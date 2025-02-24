import { stationService } from '../../services/station'
import { store } from '../store'
import {
  SET_STATIONS,
  SET_STATION,
  REMOVE_STATION,
  ADD_STATION,
  UPDATE_STATION,
  ADD_STATION_MSG,
  ADD_STATION_SONG,
  SET_SONGS_QUEUE,
} from '../reducers/station.reducer'
import {
  SOCKET_EMIT_ADD_SONG,
  socketService,
} from '../../services/socket.service'
import { LOADING_DONE, LOADING_START } from '../reducers/system.reducer'

export async function loadStations(filterBy) {
  store.dispatch({ type: LOADING_START })
  try {
    const stations = await stationService.query(filterBy)
    store.dispatch(getCmdSetStations(stations))
  } catch (err) {
    console.warn('Cannot load stations', err)
    throw err
  } finally {
    store.dispatch({ type: LOADING_DONE })
  }
}

export async function loadStation(stationId) {
  store.dispatch({ type: LOADING_START })
  try {
    const station = await stationService.getById(stationId)
    store.dispatch(getCmdSetStation(station))
    store.dispatch(getCmdSetSongsQueue(station.songs))
  } catch (err) {
    console.warn('Cannot load station', err)
    throw err
  } finally {
    store.dispatch({ type: LOADING_DONE })
  }
}

export function setStationLikedSongs() {
  try {
    const station = store.getState().userModule.user.likedSongsStation
    store.dispatch(getCmdSetStation(station))
    store.dispatch(getCmdSetSongsQueue(station.songs))
  } catch (err) {
    console.warn('Cannot load station', err)
    throw err
  }
}

export async function loadSongsQueue(station) {
  try {
    store.dispatch(getCmdSetSongsQueue(station.songs))
  } catch (err) {
    console.warn('Cannot load songs queue', err)
    throw err
  }
}

export async function removeStation(stationId) {
  try {
    await stationService.remove(stationId)
    store.dispatch(getCmdRemoveStation(stationId))
  } catch (err) {
    console.warn('Cannot remove station', err)
    throw err
  }
}

export async function addStation(station) {
  try {
    const savedStation = await stationService.save(station)
    store.dispatch(getCmdAddStation(savedStation))
    return savedStation
  } catch (err) {
    console.warn('Cannot add station', err)
    throw err
  }
}

export async function updateStation(station) {
  try {
    const savedStation = await stationService.save(station)
    store.dispatch(getCmdUpdateStation(savedStation))
    return savedStation
  } catch (err) {
    console.warn('Cannot save station', err)
    throw err
  }
}

export async function setStation(station) {
  try {
    store.dispatch(getCmdSetStation(station))
    setQueue(station.songs)
  } catch (err) {
    console.warn('Error setting staion', err)
  }
}

export async function addStationMsg(stationId, txt) {
  try {
    const msg = await stationService.addStationMsg(stationId, txt)
    store.dispatch(getCmdAddStationMsg(msg))
    return msg
  } catch (err) {
    console.warn('Cannot add station msg', err)
    throw err
  }
}

export async function addStationSong(stationId, song) {
  try {
    const savedSong = await stationService.addStationSong(stationId, song)
    socketService.emit(SOCKET_EMIT_ADD_SONG, { song: savedSong, stationId })
    store.dispatch(getCmdAddStationSong(savedSong, stationId))
    return savedSong
  } catch (err) {
    console.warn('Cannot add station song', err)
    throw err
  }
}

export async function setQueue(songs) {
  store.dispatch(getCmdSetSongsQueue(songs))
}

// Command Creators:
function getCmdSetStations(stations) {
  return {
    type: SET_STATIONS,
    stations,
  }
}

function getCmdSetStation(station) {
  return {
    type: SET_STATION,
    station,
  }
}

function getCmdSetSongsQueue(songs) {
  return {
    type: SET_SONGS_QUEUE,
    songsQueue: songs,
  }
}

function getCmdRemoveStation(stationId) {
  return {
    type: REMOVE_STATION,
    stationId,
  }
}

function getCmdAddStation(station) {
  return {
    type: ADD_STATION,
    station,
  }
}

function getCmdUpdateStation(station) {
  return {
    type: UPDATE_STATION,
    station,
  }
}

function getCmdAddStationMsg(msg) {
  return {
    type: ADD_STATION_MSG,
    msg,
  }
}

export function getCmdAddStationSong(song, stationId) {
  return { type: ADD_STATION_SONG, song, stationId }
}
