import { storageService } from '../async-storage.service'
import { loadFromStorage, makeId, saveToStorage } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'station_db'

export const stationService = {
  query,
  getById,
  save,
  remove,
  addStationSong,
  removeStationSong,
}

async function query(filterBy = { name: '', tags: [] }) {
  let stations = await storageService.query(STORAGE_KEY)
  const { name, tags, sortField, sortDir } = filterBy

  if (name) {
    const regex = new RegExp(name, 'i')
    stations = stations.filter((station) => regex.test(station.name))
  }

  if (Array.isArray(tags) && tags.length) {
    stations = stations.filter((station) =>
      tags.every((tag) => station.tags.includes(tag))
    )
  }

  if (sortField === 'name' && sortDir) {
    stations.sort((a, b) => a.name.localeCompare(b.name) * +sortDir)
  }

  return stations
}

function getById(stationId) {
  return storageService.get(STORAGE_KEY, stationId)
}

async function remove(stationId) {
  // throw new Error('Nope')
  await storageService.remove(STORAGE_KEY, stationId)
}

async function save(station) {
  let savedStation
  if (station._id) {
    const createdBy = station?.createdBy || {
      _id: '',
      fullname: 'Unknown',
      imgUrl: '',
    }

    const stationToSave = {
      _id: station._id,
      name: station.name,
      tags: [...(station.tags ?? [])],
      createdBy: {
        _id: createdBy._id,
        fullname: createdBy.fullname,
        imgUrl: createdBy.imgUrl,
        createdAt: createdBy.createdAt ?? Date.now(),
        updatedAt: Date.now(),
      },
      likedByUsers: [...(station.likedByUsers ?? [])],
      songs: [...(station.songs ?? [])],
      msgs: [...(station.msgs ?? [])],
    }
    savedStation = await storageService.put(STORAGE_KEY, stationToSave)
  } else {
    const activeUser = userService.getLoggedinUser()
    if (!activeUser) throw new Error('No user logged in')

    const stationToSave = {
      _id: makeId(7),
      name: station.name,
      tags: [...(station.tags ?? [])],
      createdBy: {
        _id: activeUser._id,
        fullname: activeUser.fullname,
        imgUrl:
          station.createdBy?.imgUrl ||
          'https://cdn.pixabay.com/photo/2022/02/09/08/47/technology-7002906_960_720.png',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      likedByUsers: [...(station.likedByUsers ?? [])],
      songs: [...(station.songs ?? [])],
      msgs: [...(station.msgs ?? [])],
    }
    savedStation = await storageService.post(STORAGE_KEY, stationToSave)
  }
  return savedStation
}

async function addStationSong(stationId, song) {
  if (!stationId || !song) {
    throw new Error('Not valid stationId or song in addStationSong')
  }

  const station = await getById(stationId)
  if (!station) {
    throw new Error('No valid stationId, no station found')
  }

  const miniSong = {
    _id: song._id,
    title: song.title,
    url: song.url,
    imgUrl: song.imgUrl,
    lengthInSeconds: song.lengthInSeconds,
    addedBy: song.addedBy,
    likedBy: song.likedBy,
    createdAt: song.createdAt,
  }

  station.songs.push(miniSong)
  await storageService.put(STORAGE_KEY, station)

  return miniSong
}

async function removeStationSong(stationId, songId) {
  if (!stationId || !songId) {
    throw new Error('Not valid stationId or songId in removeStationSong')
  }

  const station = await getById(stationId)
  if (!station) {
    throw new Error('No valid stationId, no station found')
  }
  const filteredStationSongs = station.songs.filter(
    (song) => song._id !== songId
  )

  station.songs = filteredStationSongs
  await storageService.put(STORAGE_KEY, station)
}

//For debugging
//window.stationss = stationService

const stationsDemoData = [
  {
    _id: 'st12345',
    name: 'My Rock Station',
    tags: ['rock', '80s', 'live'],
    createdBy: {
      _id: 'u101',
      fullname: 'Puki Ben David',
      imgUrl:
        'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      createdAt: 1739398908555,
      updatedAt: 1739399900000,
    },
    likedByUsers: [
      {
        _id: '3S4c4',
        fullname: 'admin',
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      },
      {
        _id: '3T5yg',
        fullname: 'kiki',
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      },
    ],
    songs: [
      {
        _id: 'k3PgFdv',
        title: 'bit by bit was All',
        url: 'https://youtu.be/lYBUbBu4W08',
        imgUrl:
          'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
        lengthInSeconds: 462,
        addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
        likedBy: [],
        createdAt: 1739398908555,
        updatedAt: 1739398908555,
      },
      {
        _id: 'hmyRh2G',
        title: 'more or less It it',
        url: 'https://youtu.be/lYBUbBu4W08',
        imgUrl:
          'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
        lengthInSeconds: 699,
        addedBy: { _id: 'u101', fullname: 'Puki Ben David' },
        likedBy: [],
        createdAt: 1739357362203,
        updatedAt: 1739357362203,
      },
    ],
    msgs: [
      {
        _id: 'msg1',
        from: { _id: '7N2Ai', fullname: 'baba' },
        txt: 'Welcome to My Rock Station',
        createdAt: 1739400100000,
      },
    ],
  },
  {
    _id: 'st23456',
    name: 'The Classical Station',
    tags: ['classical', 'orchestra', 'instrumental'],
    createdBy: {
      _id: 'u102',
      fullname: 'Alice Maestro',
      imgUrl:
        'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      createdAt: 1739400000000,
      updatedAt: 1739403600000,
    },
    likedByUsers: [
      {
        _id: '3S4c4',
        fullname: 'admin',
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      },
    ],
    songs: [
      {
        _id: 'song1',
        title: 'Moonlight Sonata',
        url: 'https://youtu.be/4Tr0otuiQuU',
        imgUrl:
          'https://cdn.pixabay.com/photo/2014/04/03/10/32/music-312233_1280.png',
        lengthInSeconds: 540,
        addedBy: { _id: 'u102', fullname: 'Alice Maestro' },
        likedBy: [],
        createdAt: 1739400000000,
        updatedAt: 1739400000000,
      },
      {
        _id: 'song2',
        title: 'Four Seasons - Spring',
        url: 'https://youtu.be/f6b8hBdw78Q',
        imgUrl:
          'https://cdn.pixabay.com/photo/2016/11/14/03/16/classical-1822032_1280.jpg',
        lengthInSeconds: 600,
        addedBy: { _id: 'u102', fullname: 'Alice Maestro' },
        likedBy: [],
        createdAt: 1739400100000,
        updatedAt: 1739400100000,
      },
    ],
    msgs: [
      {
        _id: 'msg1',
        from: { _id: '7N2Ai', fullname: 'baba' },
        txt: 'Welcome to The Classical Station',
        createdAt: 1739403600000,
      },
    ],
  },
  {
    _id: 'st34567',
    name: 'Hip Hop Beats',
    tags: ['hip hop', 'rap', 'urban'],
    createdBy: {
      _id: 'u103',
      fullname: 'Bob Rhymes',
      imgUrl:
        'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      createdAt: 1739410000000,
      updatedAt: 1739413600000,
    },
    likedByUsers: [
      {
        _id: '3T5yg',
        fullname: 'kiki',
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      },
    ],
    songs: [
      {
        _id: 'song3',
        title: 'Flowing Rhythms',
        url: 'https://youtu.be/3Q3E-6HXzHQ',
        imgUrl:
          'https://cdn.pixabay.com/photo/2014/04/03/10/32/hiphop-312234_1280.png',
        lengthInSeconds: 320,
        addedBy: { _id: 'u103', fullname: 'Bob Rhymes' },
        likedBy: [],
        createdAt: 1739410000000,
        updatedAt: 1739410000000,
      },
      {
        _id: 'song4',
        title: 'Street Stories',
        url: 'https://youtu.be/dFzC-YF93LQ',
        imgUrl:
          'https://cdn.pixabay.com/photo/2016/09/01/22/46/urban-1631819_1280.jpg',
        lengthInSeconds: 275,
        addedBy: { _id: 'u103', fullname: 'Bob Rhymes' },
        likedBy: [],
        createdAt: 1739410100000,
        updatedAt: 1739410100000,
      },
    ],
    msgs: [
      {
        _id: 'msg2',
        from: { _id: '7N2Ai', fullname: 'baba' },
        txt: 'Turn up the volume!',
        createdAt: 1739413600000,
      },
    ],
  },
  {
    _id: 'st45678',
    name: 'Electronic Vibes',
    tags: ['electronic', 'EDM', 'dance'],
    createdBy: {
      _id: 'u104',
      fullname: 'Cara Synth',
      imgUrl:
        'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      createdAt: 1739420000000,
      updatedAt: 1739423600000,
    },
    likedByUsers: [
      {
        _id: '7N2Ai',
        fullname: 'baba',
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      },
      {
        _id: 'Oeiwy',
        fullname: 'shuki',
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
      },
    ],
    songs: [
      {
        _id: 'song5',
        title: 'Electric Dreams',
        url: 'https://youtu.be/electronic1',
        imgUrl:
          'https://cdn.pixabay.com/photo/2017/01/31/17/45/electronic-2022105_1280.jpg',
        lengthInSeconds: 420,
        addedBy: { _id: 'u104', fullname: 'Cara Synth' },
        likedBy: [],
        createdAt: 1739420000000,
        updatedAt: 1739420000000,
      },
      {
        _id: 'song6',
        title: 'Neon Nights',
        url: 'https://youtu.be/electronic2',
        imgUrl:
          'https://cdn.pixabay.com/photo/2018/08/14/13/23/neon-3606436_1280.jpg',
        lengthInSeconds: 390,
        addedBy: { _id: 'u104', fullname: 'Cara Synth' },
        likedBy: [],
        createdAt: 1739420100000,
        updatedAt: 1739420100000,
      },
    ],
    msgs: [
      {
        _id: 'msg3',
        from: { _id: '7N2Ai', fullname: 'baba' },
        txt: 'Get ready to dance!',
        createdAt: 1739423600000,
      },
    ],
  },
]

_createStations()
function _createStations() {
  let stations = loadFromStorage(STORAGE_KEY)
  if (!stations || !stations.length) {
    if (stationsDemoData) {
      saveToStorage(STORAGE_KEY, stationsDemoData)
    }
  }
}
