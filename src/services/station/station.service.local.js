import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
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
