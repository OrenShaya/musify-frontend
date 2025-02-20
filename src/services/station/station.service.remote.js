import { store } from '../../store/store'
import { httpService } from '../http.service'
import { userService } from '../user'

export const stationService = {
  query,
  getById,
  save,
  remove,
  addStationSong,
  getLikedSongsStation,
}

async function query(filterBy = { name: '', tags: [] }) {
  return httpService.get(`station`, filterBy)
}

function getById(stationId) {
  return httpService.get(`station/${stationId}`)
}

async function remove(stationId) {
  return httpService.delete(`station/${stationId}`)
}

async function save(station) {
  if (station._id) {
    return put(station)
  }
  return post(station)
}

async function put(station) {
  return await httpService.put(`station/${station._id}`, station)
}

async function post(station) {
  return await httpService.post('station', station)
}

async function addStationSong(stationId, song) {
  if (!stationId || !song) {
    throw new Error('Not valid stationId or song in addStationSong')
  }

  return await httpService.post(`station/${stationId}/song`, song)
}

function getLikedSongsStation() {
  const userId = store.getState().userModule.user._id
  const stations = store.getState().stationModule.stations
  const likedSongsStation = { songs: [] }

  stations.forEach((station) => {
    station.songs.forEach((song) => {
      if (song.likedByUsers?.includes(userId)) {
        likedSongsStation.songs.push(song)
      }
    })
  })

  return likedSongsStation
}
