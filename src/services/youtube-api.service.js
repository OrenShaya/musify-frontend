/* eslint-disable no-unused-vars */
import axios from 'axios'
import { saveToStorage, loadFromStorage } from './util.service'
import { addSongFromYT } from './song/song.service.local'
import { addStationManualy } from './station/station.service.local'
import { storageService } from './async-storage.service'

const YT_API_KEY = 'AIzaSyB_6u19ZnSR_5zv7HYgTJKw6qkPpnsREcg'

const YT_STORAGE_KEY = 'ytDB'
const YT_SONG_STORAGE_KEY = 'ytSONG_DB'
const YT_ARTIST_STORAGE_KEY = 'ytARTIST_DB'
const YT_PLAYLIST_STORAGE_KEY = 'ytPLAYLIST_DB'
let gSongsMap = loadFromStorage(YT_STORAGE_KEY) || {}
let gSongs = loadFromStorage(YT_SONG_STORAGE_KEY) || {}
let gArtists = loadFromStorage(YT_ARTIST_STORAGE_KEY) || {}
let gPlaylists = loadFromStorage(YT_PLAYLIST_STORAGE_KEY) || {}

const maxResult = 5
const ytTop5SongURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&videoEmbeddable=true&type=video&key=${YT_API_KEY}`
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
//window.yts = ytService

/************************************** SERACH **************************************/

export async function getSongs(keyword = 'metal') {
  if (gSongsMap[keyword]) {
    return Promise.resolve(gSongsMap[keyword])
  }

  const { data } = await axios.get(`${ytTop5SongURL}&q=${keyword}`)
  console.log('data from await axios.get(`${ytURL}&q=${keyword}`)', data)
  gSongsMap[keyword] = data.items.map(_getSongInfoBrowse)
  saveToStorage(YT_STORAGE_KEY, gSongsMap)
  return gSongsMap[keyword]
}

function _getSongInfoBrowse(video) {
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
    id: songId,
    songTitle,
    songUrl,
    imgUrl,
    artistTitle,
    artistId,
    createdAt,
  }
}

/************************************** SONG **************************************/

export async function getSong(songID) {
  if (!songID) return null
  if (gSongs[songID]) {
    return Promise.resolve(gSongs[songID])
  }

  const { data } = await axios.get(_setSongURL(songID))
  const newSong = _getSongInfo(data.items[0])
  const artistId = newSong.artistId
  const artist = await getArtist(artistId)
  const readySong = await addSongFromYT(newSong, artist)

  gSongs[songID] = readySong
  saveToStorage(YT_SONG_STORAGE_KEY, gSongs)

  return gSongs[songID]
}

function _getSongInfo(video) {
  const { id, snippet } = video
  const { channelId, channelTitle, publishedAt, title, thumbnails } = snippet
  const { high, medium } = thumbnails

  const songId = id
  const songUrl = _getSongURL(songId)

  const imgUrl = high.url
  const songTitle = title
  const artistTitle = channelTitle
  const artistId = channelId
  const createdAt = new Date(publishedAt).getTime()

  return {
    _id: songId,
    songTitle,
    songUrl,
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
function _setArtistURL(artistID) {
  if (!artistID) return null
  const url = ytArtistURL.replace('CHANNELID', artistID)
  return url
}
function _setPlaylistURL(playlistID) {
  if (!playlistID) return null
  const url = ytPlaylistURL.replace('PLAYLISTID', playlistID)
  return url
}

/******************************************
 * DATA FROM getSongs
 */
