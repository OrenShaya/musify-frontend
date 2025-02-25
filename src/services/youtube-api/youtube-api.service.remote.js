/* eslint-disable no-unused-vars */
import axios from 'axios'
import { saveToStorage, loadFromStorage } from '../util.service'
import { songService } from '../song/song.service.remote'
import { stationService } from '../station/station.service.remote'
import { uploadService } from '../upload.service'

const YT_API_KEY = import.meta.env.VITE_YOUTUBE_API

const YT_STORAGE_KEY = 'ytDB'
const YT_SONG_STORAGE_KEY = 'ytSONG_DB'
const YT_ARTIST_STORAGE_KEY = 'ytARTIST_DB'
const YT_PLAYLIST_STORAGE_KEY = 'ytPLAYLIST_DB'
let gSongsMap = loadFromStorage(YT_STORAGE_KEY) || {}
let gSongs = loadFromStorage(YT_SONG_STORAGE_KEY) || {}
let gArtists = loadFromStorage(YT_ARTIST_STORAGE_KEY) || {}
let gPlaylists = loadFromStorage(YT_PLAYLIST_STORAGE_KEY) || {}

const maxResult = 10
const ytTop5SongURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&videoEmbeddable=true&type=video&videoCategoryId=10&key=${YT_API_KEY}`
const ytSongURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=SONGID&key=${YT_API_KEY}` // the SONGID can be chaged
const ytArtistURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=CHANNELID&key=${YT_API_KEY}` // the CHANNELID can be chaged
const ytPlaylistURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLAYLISTID&maxResults=50&key=${YT_API_KEY}` // the PLAYLISTID can be chaged

export const ytService = {
  getSongs,
  getSong,
  getArtist,
  getPlaylist,
  getKeywords,
}

// For DEBUGGING
window.yts = ytService //NO TOUCHING UNLESS YOU KNOW WHAT YOU'RE DOING

/************************************** SERACH **************************************/

export async function getSongs(keyword = 'metal') {
  if (gSongsMap[keyword]) {
    return Promise.resolve(gSongsMap[keyword])
  }

  const { data } = await axios.get(`${ytTop5SongURL}&q=${keyword}`)
  gSongsMap[keyword] = data.items.map(getSongInfoBrowse)
  saveToStorage(YT_STORAGE_KEY, gSongsMap)
  return gSongsMap[keyword]
}

export function getSongInfoBrowse(video) {
  const { id, snippet } = video
  const { channelId, channelTitle, publishedAt, title, thumbnails } = snippet
  const { high, medium } = thumbnails

  const songId = id.videoId
  const songUrl = _getSongURL(songId)

  const imgUrl = high.url
  const songTitle = title
  const artistTitle = channelTitle
  const artistId = channelId
  const createdAt = new Date(publishedAt).getTime()

  return {
    yt_id: songId,
    title: songTitle,
    url: songUrl,
    imgUrl,
    artistTitle,
    artistId,
    createdAt,
  }
}

/************************************** SONG **************************************/

export async function getSong(songID) {
  if (!songID) {
    console.warn('getSong: no songID')
    return null
  }
  if (gSongs[songID]) {
    return Promise.resolve(gSongs[songID])
  }

  const { data } = await axios.get(_setSongURL(songID))
  const newSong = await _getSongInfo(data.items[0])

  const artistId = newSong.artistId
  const artist = await getArtist(artistId)

  const readySong = await songService.addSongFromYT(newSong, artist)

  gSongs[songID] = readySong
  saveToStorage(YT_SONG_STORAGE_KEY, gSongs)

  return readySong
}

async function _getSongInfo(video) {
  const { id, snippet } = video
  const { channelId, channelTitle, publishedAt, title, thumbnails } = snippet
  const { high, medium } = thumbnails

  const songId = id
  const songUrl = _getSongURL(songId)

  const imgUrl = await uploadService.uploadImageUrl(high.url)
  const songTitle = title
  const artistTitle = channelTitle
  const artistId = channelId
  const createdAt = new Date(publishedAt).getTime()

  return {
    yt_id: songId,
    title: songTitle,
    url: songUrl,
    imgUrl,
    artistTitle,
    artistId,
    createdAt,
  }
}

function _setSongURL(songID) {
  if (!songID) return null
  const url = ytSongURL.replace('SONGID', songID)
  return url
}

/************************************** ARTIST **************************************/
export async function getArtist(artistID) {
  if (!artistID) {
    console.warn('getArtist(artistID) no artistID')
    return null
  }

  if (gArtists[artistID]) {
    return Promise.resolve(gArtists[artistID])
  }
  try {
    const { data } = await axios.get(_setArtistURL(artistID))
    gArtists[artistID] = await _getArtistInfo(data.items[0])
    saveToStorage(YT_ARTIST_STORAGE_KEY, gArtists)
    return gArtists[artistID]
  } catch (error) {
    console.error('Cannot get artist', error)
  }
}

async function _getArtistInfo(video) {
  const { id, snippet, statistics } = video
  const { publishedAt, title, thumbnails } = snippet
  const { high } = thumbnails
  const { videoCount, viewCount } = statistics

  const artistId = id
  const imgUrl = await uploadService.uploadImageUrl(high.url)

  const artistTitle = title
  const createdAt = new Date(publishedAt).getTime()

  return {
    yt_id: artistId,
    imgUrl,
    artistTitle,
    createdAt,
    statistics: { videoCount, viewCount },
  }
}

function _setArtistURL(artistID) {
  if (!artistID) return null
  const url = ytArtistURL.replace('CHANNELID', artistID)
  return url
}

/************************************** Playlist **************************************/

export async function getPlaylist(
  playlistID = 'PLFs4vir_WsTwEd-nJgVJCZPNL3HALHHpF'
) {
  if (!playlistID) return null
  if (gPlaylists[playlistID]) {
    return Promise.resolve(gPlaylists[playlistID])
  }

  try {
    const { data } = await axios.get(_setPlaylistURL(playlistID))

    const playlistInfo = _getPlaylistInfo(data.items[0])

    const playListSongs = await _getSongInfoFromPlaylist(data.items)

    const station = {}
    station.songs = playListSongs
    station.yt_id = playlistInfo.yt_id
    station.name = playlistInfo.playlistName
    const createdById = playlistInfo.playlistOwnerId

    const artist = await getArtist(createdById)

    const imgUrl = artist?.imgUrl || ''

    station.createdBy = {
      yt_id: artist.yt_id,
      fullname: artist.artistTitle || 'Mupify',
      imgUrl,
      createdAt: artist.createdAt || Date.now(),
      updatedAt: Date.now(),
    }

    station.msgs = []
    station.likedByUsers = []
    station.tags = []
    station.isArtist = true

    const readyStaion = await stationService.save(station)
    gPlaylists[playlistID] = readyStaion
    saveToStorage(YT_PLAYLIST_STORAGE_KEY, gPlaylists)

    return readyStaion
  } catch {
    return (err) => {
      throw new Error('Unable to add a playlist. err:', err)
    }
  }
}

function _getPlaylistInfo(video) {
  const { snippet } = video
  const {
    playlistId,
    videoOwnerChannelTitle,
    videoOwnerChannelId,
    publishedAt,
  } = snippet

  const playlistName = videoOwnerChannelTitle
  const playlistOwnerId = videoOwnerChannelId
  const createdAt = new Date(publishedAt).getTime()

  return {
    yt_id: playlistId,
    playlistName,
    playlistOwnerId,
    createdAt,
  }
}

async function _getSongInfoFromPlaylist(videos) {
  try {
    const songsPromises = videos.map(async (video) => {
      const { snippet } = video
      const {
        channelId,
        channelTitle,
        publishedAt,
        title,
        thumbnails,
        resourceId,
      } = snippet
      const { high } = thumbnails
      const songId = resourceId.videoId
      const songUrl = _getSongURL(songId)
      const songTitle = title

      const imgUrl = await uploadService.uploadImageUrl(high.url)
      const artistTitle = channelTitle
      const artistId = channelId
      const createdAt = new Date(publishedAt).getTime()

      const song = {
        yt_id: songId,
        title: songTitle,
        url: songUrl,
        imgUrl,
        artistTitle,
        artistId,
        createdAt,
      }

      const artist = await getArtist(artistId)
      const readySong = await songService.addSongFromYT(song, artist)
      gSongs[songId] = readySong
      saveToStorage(YT_SONG_STORAGE_KEY, gSongs)

      return readySong
    })

    const songsFromPlaylist = await Promise.all(songsPromises)

    return songsFromPlaylist
  } catch {
    // eslint-disable-next-line no-extra-semi
    ;(err) => {
      throw new Error('Error while awaiting songsFromPlaylist', err)
    }
  }
}

/************************************** Utils **************************************/

function _getSongURL(songID) {
  if (!songID) return null
  return `https://www.youtube.com/embed/${songID}`
}

function getKeywords() {
  return Object.keys(gSongsMap)
}

function _setPlaylistURL(playlistID) {
  if (!playlistID) return null
  const url = ytPlaylistURL.replace('PLAYLISTID', playlistID)
  return url
}
