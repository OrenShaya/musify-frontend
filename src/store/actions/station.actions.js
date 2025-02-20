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
  SET_LIKED_SONGS,
} from '../reducers/station.reducer'

export async function loadStations(filterBy) {
  try {
    const stations = await stationService.query(filterBy)
    store.dispatch(getCmdSetStations(stations))
  } catch (err) {
    console.warn('Cannot load stations', err)
    throw err
  }
}

export async function loadStation(stationId) {
  try {
    const station = await stationService.getById(stationId)
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
  store.dispatch(getCmdSetStation(station))
  setQueue(station.songs)
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
    store.dispatch(getCmdAddStationSong(savedSong))
    return savedSong
  } catch (err) {
    console.warn('Cannot add station song', err)
    throw err
  }
}

export async function setQueue(songs) {
  store.dispatch(getCmdSetSongsQueue(songs))
}

export async function setLikedSongs() {
  const station = await stationService.getLikedSongsStation()
  store.dispatch({ type: SET_LIKED_SONGS, station })
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

function getCmdAddStationSong(song) {
  return { type: ADD_STATION_SONG, song }
}
