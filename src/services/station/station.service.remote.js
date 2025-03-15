import { store } from '../../store/store'
import { httpService } from '../http.service'
import { songService } from '../song'
import { ytService } from '../youtube-api/youtube-api.service.remote'
//import { userService } from '../user'

export const stationService = {
  query,
  getById,
  save,
  remove,
  addStationSong,
  removeStationSong,
  generateStation,
  getSongNames,
  addSongToStationLocally,
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

async function generateStation(prompt) {
  try {
    const songNames = await stationService.getSongNames(prompt)
    const songList = await ytService.getSongList(songNames)
    const stationId = store.getState().stationModule.station._id
    // console.log('list:', songList)
    const addedPromises = []
    songList.forEach((song) => {
      addedPromises.push(
        addSongToStationLocally(song.yt_id, song.artistId, stationId)
      )
    })
    return Promise.all(addedPromises)
  } catch (err) {
    console.log('error song.service -> generateStation:', err)
    throw err
  }
}

async function getSongNames(prompt) {
  if (!prompt || prompt.length <= 0)
    throw new Error('Cannot generate station - invalid prompt')
  return await httpService.get(`station/generate/${prompt}`)
}

async function removeStationSong(stationId, songId) {
  if (!stationId || !songId) {
    throw new Error('Not valid stationId or song in addStationSong')
  }

  return await httpService.delete(`station/${stationId}/${songId}`)
}

async function addSongToStationLocally(songId, artistId, stationId) {
  if (!songId || !artistId) return
  try {
    const ytSong = await ytService.getSong(songId)
    if (!ytSong) return

    const artist = await ytService.getArtist(artistId)
    if (!artist) return

    const readySong = await songService.addSongFromYT(ytSong, artist)
    if (!readySong) return

    await addStationSong(stationId, readySong)

    return 'load station'
  } catch (err) {
    console.error('Unable to search for songs', err)
  }
}
