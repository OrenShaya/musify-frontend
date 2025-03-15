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

const ytSongURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=SONGID&key=${YT_API_KEY}` // the SONGID can be chaged
const ytArtistURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=CHANNELID&key=${YT_API_KEY}` // the CHANNELID can be chaged
const ytPlaylistURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLAYLISTID&maxResults=50&key=${YT_API_KEY}` // the PLAYLISTID can be chaged

export const ytService = {
  searchSongs,
  getSong,
  getArtist,
  getPlaylist,
  getKeywords,
  getSongList,
}

// For DEBUGGING
window.yts = ytService //NO TOUCHING UNLESS YOU KNOW WHAT YOU'RE DOING

/************************************** SERACH **************************************/

export async function searchSongs(keyword = 'metal', maxResults = 10) {
  if (gSongsMap[keyword]) {
    return Promise.resolve(gSongsMap[keyword])
  }
  const ytTopNSongsURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&videoEmbeddable=true&type=video&videoCategoryId=10&key=${YT_API_KEY}`

  const { data } = await axios.get(`${ytTopNSongsURL}&q=${keyword}`)
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

/************************************** Station **************************************/
async function getSongList(songNames) {
  // NOTE: Comment out return to enable using YT API (instead of dummy data)
  return [
    {
      yt_id: '4tVriTuoll8',
      title: 'ГОРОД 312 - Останусь',
      url: 'https://www.youtube.com/embed/4tVriTuoll8',
      imgUrl: 'https://i.ytimg.com/vi/4tVriTuoll8/hqdefault.jpg',
      artistTitle: 'Город312',
      artistId: 'UCluC8I2ap-mlRwVO8GQ_Diw',
      createdAt: 1225671431000,
    },
    {
      yt_id: 'SD7TJF452zs',
      title:
        'РАЗ РАЗ РАЗ ЭТО ХАРДБАСС ВСЕ В СПОРТИВКАХ АДИДАС И НА НАЙКЕ ПАЦАНЫ СЛУШАЮТ ХАРДБАСС БАСЫ!!!!!!!!!!!!',
      url: 'https://www.youtube.com/embed/SD7TJF452zs',
      imgUrl: 'https://i.ytimg.com/vi/SD7TJF452zs/hqdefault.jpg',
      artistTitle: 'TAMER',
      artistId: 'UCbQBdhOFM4FdziDij__FG4w',
      createdAt: 1558743794000,
    },
    {
      yt_id: 'ADlGkXAz1D0',
      title: 'LITTLE BIG - GO BANANAS (Official Music Video)',
      url: 'https://www.youtube.com/embed/ADlGkXAz1D0',
      imgUrl: 'https://i.ytimg.com/vi/ADlGkXAz1D0/hqdefault.jpg',
      artistTitle: 'Little Big',
      artistId: 'UCu7TZ_ATWgjgD9IrNLdnYDA',
      createdAt: 1573804802000,
    },
    {
      yt_id: 'ZMtf_ouMTHw',
      title: 'Culture Beat - Mr. Vain (Official Video)',
      url: 'https://www.youtube.com/embed/ZMtf_ouMTHw',
      imgUrl: 'https://i.ytimg.com/vi/ZMtf_ouMTHw/hqdefault.jpg',
      artistTitle: 'Culture Beat',
      artistId: 'UCtxXLpCI3JuUQHw1D4VZuMg',
      createdAt: 1727366417000,
    },
    {
      yt_id: 'O17MVZ_-uhw',
      title:
        'Rockhouse Барских — Моя Любовь - Max Barskih &amp; Wwe New World Order Titantron Hd | RaveDJ',
      url: 'https://www.youtube.com/embed/O17MVZ_-uhw',
      imgUrl: 'https://i.ytimg.com/vi/O17MVZ_-uhw/hqdefault.jpg',
      artistTitle: 'Дмитрий Баринов',
      artistId: 'UCoF9ej04W-J4rKnZubtj1JA',
      createdAt: 1537565858000,
    },
    {
      yt_id: 'Mx8gGP3xaAU',
      title: 'Sebastian Albrecht - Tapenade (Mod2 &amp; Nino Remix) [PRK002]',
      url: 'https://www.youtube.com/embed/Mx8gGP3xaAU',
      imgUrl: 'https://i.ytimg.com/vi/Mx8gGP3xaAU/hqdefault.jpg',
      artistTitle: 'un:usual',
      artistId: 'UC7Ibu5kjt029SI7eADfaxag',
      createdAt: 1403370127000,
    },
    {
      yt_id: 'uQ5mreTLdWI',
      title: 'Kendoll &amp; Grensta - Rave All Night',
      url: 'https://www.youtube.com/embed/uQ5mreTLdWI',
      imgUrl: 'https://i.ytimg.com/vi/uQ5mreTLdWI/hqdefault.jpg',
      artistTitle: 'Night Bass',
      artistId: 'UCL9hNs37uncHth3eCIIDHiQ',
      createdAt: 1555531209000,
    },
    {
      yt_id: 'SGWbyxkKBRg',
      title: 'Welcome to Foreverland 😈🧪🍄 #foreverland #rave #fyp',
      url: 'https://www.youtube.com/embed/SGWbyxkKBRg',
      imgUrl: 'https://i.ytimg.com/vi/SGWbyxkKBRg/hqdefault.jpg',
      artistTitle: 'Foreverland',
      artistId: 'UC3ds4nh6SXf434LysNQdF0A',
      createdAt: 1675867501000,
    },
    {
      yt_id: 'OmCLZC0wjEE',
      title: 'TATARKA – KAWAII [Slowed] - Edit audio',
      url: 'https://www.youtube.com/embed/OmCLZC0wjEE',
      imgUrl: 'https://i.ytimg.com/vi/OmCLZC0wjEE/hqdefault.jpg',
      artistTitle: 'Ezioddma',
      artistId: 'UCbHQMXQZBnKysh8TEh3XexQ',
      createdAt: 1653039002000,
    },
    {
      yt_id: 'Hyx79bZO-4w',
      title: 'Иван Дорн - Целовать Другого',
      url: 'https://www.youtube.com/embed/Hyx79bZO-4w',
      imgUrl: 'https://i.ytimg.com/vi/Hyx79bZO-4w/hqdefault.jpg',
      artistTitle: 'nkmf mp3',
      artistId: 'UCz1ZuMjuLwrozHYzex32X2w',
      createdAt: 1707843058000,
    },
    {
      yt_id: 'oZBypk8CrAc',
      title:
        'Arsenic @ Inder Fever Vol.2 - crispy chaos Crew , SummerStation (Vienna-Austria) 27.August 2016',
      url: 'https://www.youtube.com/embed/oZBypk8CrAc',
      imgUrl: 'https://i.ytimg.com/vi/oZBypk8CrAc/hqdefault.jpg',
      artistTitle: 'Nicole L.',
      artistId: 'UCz794pdriLyEZd2wfEwY_cg',
      createdAt: 1472492594000,
    },
    {
      yt_id: 'nidQCt_HEsY',
      title:
        'Miyagi &amp; Эндшпиль feat. Рем Дигга - I Got Love (Official Video)',
      url: 'https://www.youtube.com/embed/nidQCt_HEsY',
      imgUrl: 'https://i.ytimg.com/vi/nidQCt_HEsY/hqdefault.jpg',
      artistTitle: 'Hajime',
      artistId: 'UCApdP81v1rMFGiFUq-A7vBQ',
      createdAt: 1496403001000,
    },
    {
      yt_id: 'LDmcMlAMQAE',
      title:
        'Kalush Orchestra &amp; Black Eyed Peas - Stefania got a feeling [Mashup K-Men] [EUROVISION 2022 UKRAINE]',
      url: 'https://www.youtube.com/embed/LDmcMlAMQAE',
      imgUrl: 'https://i.ytimg.com/vi/LDmcMlAMQAE/hqdefault.jpg',
      artistTitle: 'Kamen Plamenov',
      artistId: 'UC-7v1xSqyfoEAkxrqWI56BQ',
      createdAt: 1650400559000,
    },
    {
      yt_id: '-JQ6WVrIIGw',
      title: 'Леша Свик - Малиновый Свет | Official Video',
      url: 'https://www.youtube.com/embed/-JQ6WVrIIGw',
      imgUrl: 'https://i.ytimg.com/vi/-JQ6WVrIIGw/hqdefault.jpg',
      artistTitle: 'WOW TV',
      artistId: 'UCbOmdGuNF-dUQsIN_BO9JTw',
      createdAt: 1537783147000,
    },
  ]
  const songList = []

  const maxResults = 1
  songNames.forEach(async (query) => {
    const song = searchSongs(query, maxResults)
    songList.push(song)
  })

  return (await Promise.all(songList))
    .map((songArray) => songArray[0])
    .filter((song) => song)
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
