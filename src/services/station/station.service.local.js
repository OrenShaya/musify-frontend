import { storageService } from '../async-storage.service'
import { loadFromStorage, makeId, saveToStorage } from '../util.service'
import { userService } from '../user'
import { songService } from '../song'
import { stationsDemoData } from '../../../data/demoStations.js'

const STORAGE_KEY = 'station_db'

export const stationService = {
  query,
  getById,
  save,
  remove,
  addStationSong,
  removeStationSong,
  updateLikedSongsStation,
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
        imgUrl: createdBy.imgUrl || '',
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
        imgUrl: station.createdBy?.imgUrl || '',
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

export async function addStationManualy(station) {
  await storageService.postWithId(STORAGE_KEY, station)
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
    addedAt: Date.now(),
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

let stationsDemo = stationsDemoData

var runOnce = false
if (!runOnce) {
  _createStations()
  runOnce = true
}

function _createStations() {
  let stations = loadFromStorage(STORAGE_KEY)
  if (!stations || !stations.length) {
    if (stationsDemo) {
      saveToStorage(STORAGE_KEY, stationsDemo)
    }
  }
}

async function _getLikedStationId(user) {
  if (!user.likedStationIds || !user.likedStationIds.length) return null

  const stationPromises = user.likedStationIds.map((id) =>
    getById(id).catch(() => null)
  )

  //wait for all the station so use Promise.all
  const stations = await Promise.all(stationPromises)
  const likedStation = stations.find(
    (station) => station && station.name === 'Liked Songs'
  )
  return likedStation ? likedStation._id : null
}

async function updateLikedSongsStation(user) {
  const likedSongIds = user.likedSongIds || []
  let likedStationId = await _getLikedStationId(user)

  if (likedSongIds.length === 0) {
    if (likedStationId) {
      await stationService.remove(likedStationId)
      user.likedStationIds = user.likedStationIds.filter(
        (id) => id !== likedStationId
      )
      await userService.update({
        _id: user._id,
        likedStationIds: user.likedStationIds,
      })
    }
    return
  }

  let likedStation
  if (!likedStationId) {
    const newStation = {
      name: 'Liked Songs',
      tags: ['liked'],
      createdBy: {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: '',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      likedByUsers: [
        {
          _id: user._id,
          fullname: user.fullname,
          imgUrl: user.imgUrl,
        },
      ],
      songs: [],
      msgs: [],
    }

    likedStation = await stationService.save(newStation)
    likedStationId = likedStation._id
    if (!user.likedStationIds) user.likedStationIds = []

    user.likedStationIds.push(likedStationId)

    await userService.update({
      _id: user._id,
      likedStationIds: user.likedStationIds,
    })
  } else {
    likedStation = await getById(likedStationId)
  }

  const likedSongsPromises = likedSongIds.map((songId) => {
    const song = songService.getById(songId)
    if (!song) return null
    song.addedAt = Date.now()
    return song
  })

  const likedSongs = (await Promise.all(likedSongsPromises)).filter(Boolean)
  likedStation.songs = likedSongs
  await stationService.save(likedStation)
}
