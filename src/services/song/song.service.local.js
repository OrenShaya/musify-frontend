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

const STORAGE_KEY = 'song_db'

export const songService = {
  query,
  getById,
  save,
  remove,
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
      _id: makeId(9),
      title: song.title,
      url: song.url || '',
      imgUrl: song.imgUrl || '',
      addedBy: {
        _id: activeUser._id,
        fullname: activeUser.fullname,
        imgUrl: activeUser.imgUrl,
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
  likedBy = []
) {
  const song = getEmptySong()
  song.title = title
  song.url = url
  song.imgUrl = imgUrl
  song.addedBy = addedBy
  song.likedBy = likedBy
  song.lengthInSeconds = lengthInSeconds
  song.createdAt = song.updatedAt =
    Date.now() - getRandomIntInclusive(0, 1000 * 60 * 60 * 24)
  song._id = makeId(7)
  return song
}

// For debugging
//window.songss = songService

// eslint-disable-next-line no-unused-vars
const songsDemoData = [
  {
    title: 'bit by bit was All ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 462,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739398908555,
    createdAt: 1739398908555,
    _id: 'k3PgFdv',
  },
  {
    title: 'more or less was the port ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 305,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739355561973,
    createdAt: 1739355561973,
    _id: 'hmyRh2G',
  },
  {
    title: 'more or less It it ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 699,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739357362203,
    createdAt: 1739357362203,
    _id: 'cUC2HeD',
  },
  {
    title: 'the story to All ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 1148,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739389128775,
    createdAt: 1739389128775,
    _id: 'n3J6wIN',
  },
  {
    title: 'and the story bit by bit ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 1186,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739388638018,
    createdAt: 1739388638018,
    _id: 'RVLVbLm',
  },
  {
    title: 'the color of television in such cases above ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 671,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739339142676,
    createdAt: 1739339142676,
    _id: '7I9IVXX',
  },
  {
    title: 'to burn to ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 539,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739389196002,
    createdAt: 1739389196002,
    _id: 'laffqiU',
  },
  {
    title: 'had above this happened ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 293,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739373730095,
    createdAt: 1739373730095,
    _id: 'h8FSuCF',
  },
  {
    title: 'and burn each time ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 808,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739377799126,
    createdAt: 1739377799126,
    _id: 'NA5BBCK',
  },
  {
    title: 'had . was ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 743,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739372640153,
    createdAt: 1739372640153,
    _id: 'rdYoAoZ',
  },
  {
    title: '. bit by bit from various people ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 188,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739389309523,
    createdAt: 1739389309523,
    _id: 'IyZI2pX',
  },
  {
    title: 'happens . and ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 210,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739330276142,
    createdAt: 1739330276142,
    _id: 'P0ZQopd',
  },
  {
    title: 'each time it burn ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 990,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739340081857,
    createdAt: 1739340081857,
    _id: 'AZJ5CKj',
  },
  {
    title: 'was burn the color of television ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 475,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739394883477,
    createdAt: 1739394883477,
    _id: 'yYTUYzI',
  },
  {
    title: 'each time I . ',
    url: 'https://youtu.be/lYBUbBu4W08',
    imgUrl:
      'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
    lengthInSeconds: 804,
    addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
    likedBy: [],
    updatedAt: 1739371475133,
    createdAt: 1739371475133,
    _id: 'eD8KAWP',
  },
]

_createSongs()
function _createSongs() {
  let songs = loadFromStorage(STORAGE_KEY)
  if (!songs || !songs.length) {
    if (!songsDemoData) {
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
      saveToStorage(STORAGE_KEY, songsDemoData)
    }
  }
}
