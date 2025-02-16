import { stationGroupService } from '../../services/stationGroup'
import { store } from '../store'
import {
  SET_STATION_GROUPS,
  SET_STATION_GROUP,
  REMOVE_STATION_GROUP,
  ADD_STATION_GROUP,
  UPDATE_STATION_GROUP,
  ADD_STATION_GROUP_MSG,
  ADD_STATION_GROUP_SONG,
  SET_SONGS_QUEUE,
} from '../reducers/stationGroup.reducer'

export async function loadStations(filterBy) {
  try {
    const stationGroups = await stationGroupService.query(filterBy)
    store.dispatch(getCmdSetStations(stationGroups))
  } catch (err) {
    console.log('Cannot load stationGroups', err)
    throw err
  }
}

export async function loadStation(stationGroupId) {
  try {
    const stationGroup = await stationGroupService.getById(stationGroupId)
    store.dispatch(getCmdSetStation(stationGroup))
    store.dispatch(getCmdSetSongsQueue(stationGroup.songs))
  } catch (err) {
    console.log('Cannot load stationGroup', err)
    throw err
  }
}
export async function loadSongsQueue(stationGroup) {
  try {
    store.dispatch(getCmdSetSongsQueue(stationGroup.songs))
  } catch (err) {
    console.log('Cannot load songs queue', err)
    throw err
  }
}

export async function removeStation(stationGroupId) {
  try {
    await stationGroupService.remove(stationGroupId)
    store.dispatch(getCmdRemoveStation(stationGroupId))
  } catch (err) {
    console.log('Cannot remove stationGroup', err)
    throw err
  }
}

export async function addStation(stationGroup) {
  try {
    const savedStation = await stationGroupService.save(stationGroup)
    store.dispatch(getCmdAddStation(savedStation))
    return savedStation
  } catch (err) {
    console.log('Cannot add stationGroup', err)
    throw err
  }
}

export async function updateStation(stationGroup) {
  try {
    const savedStation = await stationGroupService.save(stationGroup)
    store.dispatch(getCmdUpdateStation(savedStation))
    return savedStation
  } catch (err) {
    console.log('Cannot save stationGroup', err)
    throw err
  }
}

export async function setStation(stationGroup) {
  store.dispatch(getCmdSetStation(stationGroup))
}

export async function addStationMsg(stationGroupId, txt) {
  try {
    const msg = await stationGroupService.addStationMsg(stationGroupId, txt)
    store.dispatch(getCmdAddStationMsg(msg))
    return msg
  } catch (err) {
    console.log('Cannot add stationGroup msg', err)
    throw err
  }
}

export async function addStationSong(stationGroupId, song) {
  try {
    const savedSong = await stationGroupService.addStationSong(
      stationGroupId,
      song
    )
    store.dispatch(getCmdAddStationSong(savedSong))
    return savedSong
  } catch (err) {
    console.log('Cannot add stationGroup song', err)
    throw err
  }
}

// Command Creators:
function getCmdSetStations(stationGroups) {
  return {
    type: SET_STATION_GROUPS,
    stationGroups,
  }
}
function getCmdSetStation(stationGroup) {
  return {
    type: SET_STATION_GROUP,
    stationGroup,
  }
}
function getCmdSetSongsQueue(songs) {
  return {
    type: SET_SONGS_QUEUE,
    songsQueue: songs,
  }
}
function getCmdRemoveStation(stationGroupId) {
  return {
    type: REMOVE_STATION_GROUP,
    stationGroupId,
  }
}
function getCmdAddStation(stationGroup) {
  return {
    type: ADD_STATION_GROUP,
    stationGroup,
  }
}
function getCmdUpdateStation(stationGroup) {
  return {
    type: UPDATE_STATION_GROUP,
    stationGroup,
  }
}
function getCmdAddStationMsg(msg) {
  return {
    type: ADD_STATION_GROUP_MSG,
    msg,
  }
}

function getCmdAddStationSong(song) {
  return { type: ADD_STATION_GROUP_SONG, song }
}
