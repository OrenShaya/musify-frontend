import { httpService } from '../http.service'

export const stationService = {
  query,
  getById,
  save,
  remove,
  addStationSong,
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

  return await httpService.put(`station/${stationId}/song`, song)
}
