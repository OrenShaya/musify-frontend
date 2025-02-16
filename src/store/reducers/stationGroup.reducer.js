/* eslint-disable no-case-declarations */
export const SET_STATION_GROUPS = 'SET_STATION_GROUPS'
export const SET_STATION_GROUP = 'SET_STATION_GROUP'
export const REMOVE_STATION_GROUP = 'REMOVE_STATION_GROUP'
export const ADD_STATION_GROUP = 'ADD_STATION_GROUP'
export const SET_SONGS_QUEUE = 'SET_SONGS_QUEUE'
export const UPDATE_STATION_GROUP = 'UPDATE_STATION_GROUP'
export const ADD_STATION_GROUP_MSG = 'ADD_STATION_GROUP_MSG'
export const ADD_STATION_GROUP_SONG = 'ADD_STATION_GROUP_SONG'
export const REMOVE_STATION_GROUP_SONG = 'REMOVE_STATION_GROUP_SONG'

const initialState = {
  stationGroups: [],
  stationGroup: null,
}

export function stationGroupReducer(state = initialState, action) {
  let newState = state
  let stationGroups

  switch (action.type) {
    case SET_STATION_GROUPS:
      newState = { ...state, stationGroups: action.stationGroups }
      break
    case SET_STATION_GROUP:
      newState = { ...state, stationGroup: action.stationGroup }
      break

    case REMOVE_STATION_GROUP:
      const lastRemovedStation = state.stationGroups.find(
        (stationGroup) => stationGroup._id === action.stationGroupId
      )
      stationGroups = state.stationGroups.filter(
        (stationGroup) => stationGroup._id !== action.stationGroupId
      )
      newState = { ...state, stationGroups, lastRemovedStation }
      break
    case ADD_STATION_GROUP:
      newState = {
        ...state,
        stationGroups: [...state.stationGroups, action.stationGroup],
      }
      break
    case UPDATE_STATION_GROUP:
      stationGroups = state.stationGroups.map((stationGroup) =>
        stationGroup._id === action.stationGroup._id
          ? action.stationGroup
          : stationGroup
      )
      newState = { ...state, stationGroups, stationGroup: action.stationGroup }
      break
    case ADD_STATION_GROUP_MSG:
      newState = {
        ...state,
        stationGroup: {
          ...state.stationGroup,
          msgs: [...(state.stationGroup?.msgs || []), action.msg],
        },
      }
      break

    default:
      break
  }
  return newState
}
