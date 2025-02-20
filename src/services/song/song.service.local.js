import { storageService } from '../async-storage.service'
import {
  makeId,
  getRandomIntInclusive,
  saveToStorage,
  loadFromStorage,
  makeLorem,
} from '../util.service'
import { userService } from '../user'
import { getEmptySong } from './index'
import { addUserManualy } from '../user/user.service.local'
import { songsDemoData } from '../../../data/demoSongs.js'

const STORAGE_KEY = 'song_db'

export const songService = {
  query,
  getById,
  save,
  likedBy,
  remove,
  addSongFromYT,
}

async function query(filterBy = { title: '', minLength: '' }) {
  var songs = await storageService.query(STORAGE_KEY)
  let filteredSongs = songs
  const { title, minLength, sortField, sortDir } = filterBy

  if (title) {
    const regex = new RegExp(filterBy.title, 'i')
    filteredSongs = filteredSongs.filter((song) => regex.test(song.title))
  }

  if (minLength) {
    filteredSongs = filteredSongs.filter(
      (song) => song.lengthInSeconds >= minLength
    )
  }

  if (sortField === 'title') {
    filteredSongs.sort(
      (song1, song2) =>
        song1[sortField].localeCompare(song2[sortField]) * +sortDir
    )
  }

  if (sortField === 'lengthInSeconds') {
    filteredSongs.sort(
      (s1, s2) => (s1.lengthInSeconds - s2.lengthInSeconds) * +sortDir
    )
  }

  return filteredSongs
}

function getById(songId) {
  return storageService.get(STORAGE_KEY, songId)
}

async function remove(songId) {
  // throw new Error('Nope')
  await storageService.remove(STORAGE_KEY, songId)
}

async function save(song) {
  var savedSong
  if (song._id) {
    const songToSave = {
      _id: song._id,
      title: song.title,
      url: song.url,
      imgUrl: song.imgUrl,
      lengthInSeconds: song.lengthInSeconds,
      addedBy: song.addedBy,
      likedBy: song.likedBy,
      createdAt: song.createdAt,
      updatedAt: Date.now(),
    }
    savedSong = await storageService.put(STORAGE_KEY, songToSave)
  } else {
    const activeUser = userService.getLoggedinUser()
    if (!activeUser) throw new Error('No user logged in')

    const songToSave = {
      title: song.title,
      url: song.url || '',
      imgUrl: song.imgUrl || '',
      addedBy: {
        _id: activeUser._id,
        fullname: activeUser.fullname || 'Musify',
        imgUrl: activeUser.imgUrl || '',
      },
      lengthInSeconds: song.lengthInSeconds,
      likedBy: song.likedBy,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    savedSong = await storageService.post(STORAGE_KEY, songToSave)
  }
  return savedSong
}

function _createSong(
  title = '',
  url = '',
  imgUrl = '',
  addedBy = '',
  lengthInSeconds = 0,
  likedBy = [],
  createdAt = Date.now(),
  _id = makeId(7)
) {
  const song = getEmptySong()
  song.title = title
  song.url = url
  song.imgUrl = imgUrl
  song.addedBy = addedBy
  song.likedBy = likedBy
  song.lengthInSeconds = lengthInSeconds
  song.createdAt =
    createdAt || Date.now() - getRandomIntInclusive(0, 1000 * 60 * 60 * 24)
  song.updatedAt = Date.now() - getRandomIntInclusive(0, 1000 * 60 * 60 * 24)
  song._id = _id || makeId(6)
  return song
}

async function likedBy(songId, userId) {
  const song = await getById(songId)
  return song.likedBy.includes(userId)
}

const mySongDemoData = songsDemoData

// next line is used to fill up with demo data
var runOnce = false
if (!runOnce) {
  _createSongs()
  runOnce = true
}
function _createSongs() {
  let songs = loadFromStorage(STORAGE_KEY)
  if (!songs || !songs.length) {
    if (!mySongDemoData) {
      songs = []
      for (let i = 0; i < 15; i++) {
        const title = makeLorem(3)
        const url = 'https://youtu.be/lYBUbBu4W08'
        const imgUrl =
          'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png'
        const addedBy = {
          _id: 'u101',
          fullname: 'Puki Ben David',
        }
        const lengthInSeconds = getRandomIntInclusive(30, 60 * 20)

        songs.push(
          _createSong(title, url, imgUrl, addedBy, lengthInSeconds, [])
        )
      }
      saveToStorage(STORAGE_KEY, songs)
    } else {
      saveToStorage(STORAGE_KEY, mySongDemoData)
    }
  }
}

export async function addSongFromYT(ytSong, artist) {
  // Only used to manualy add demo data
  const artistId = artist.id
  const artistCreatedAt = artist.createdAt
  const artistImgUrl = artist.imgUrl
  const artistTitle = artist.artistTitle

  addUserManualy({
    _id: artistId,
    username: artistTitle || 'JohnDoe',
    fullname: artistTitle || 'John Doe',
    password: artistTitle + 'pass' || 'JohnDoepass',
    imgUrl: artistImgUrl,
    createdAt: artistCreatedAt,
  })

  const { songTitle, songUrl, imgUrl, createdAt } = ytSong
  const songId = ytSong._id

  const newSong = {
    title: songTitle,
    url: songUrl,
    imgUrl: imgUrl,
    addedBy: { _id: artistId, fullname: artistTitle, imgUrl: artistImgUrl },
    lengthInSeconds: getRandomIntInclusive(30, 400),
    likedBy: [],
    createdAt,
    updatedAt: Date.now() - getRandomIntInclusive(0, 1000 * 60 * 60 * 24),
    _id: songId,
  }

  const readySong = storageService.postWithId(STORAGE_KEY, newSong)
  return readySong
}
