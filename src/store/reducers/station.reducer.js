/* eslint-disable no-case-declarations */
export const SET_STATIONS = 'SET_STATIONS'
export const SET_STATION = 'SET_STATION'
export const REMOVE_STATION = 'REMOVE_STATION'
export const REMOVE_LIKED_SONG = 'REMOVE_LIKED_SONG'
export const ADD_STATION = 'ADD_STATION'
export const ADD_LIKED_SONG = 'ADD_LIKED_SONG'
export const SET_SONGS_QUEUE = 'SET_SONGS_QUEUE'
export const SET_LIKED_SONGS = 'SET_LIKED_SONGS'
export const UPDATE_STATION = 'UPDATE_STATION'
export const ADD_STATION_MSG = 'ADD_STATION_MSG'
export const ADD_STATION_SONG = 'ADD_STATION_SONG'
export const REMOVE_STATION_SONG = 'REMOVE_STATION_SONG'

const initialState = {
  stations: [],
  station: null,
  songsQueue: [],
  likedSongs: [],
}

export function stationReducer(state = initialState, action) {
  let newState = state
  let stations

  switch (action.type) {
    case SET_STATIONS:
      newState = { ...state, stations: action.stations }
      break

    case SET_STATION:
      newState = { ...state, station: action.station }
      break

    case SET_SONGS_QUEUE:
      newState = { ...state, songsQueue: action.songsQueue }
      break

    case REMOVE_STATION:
      const lastRemovedStation = state.stations.find(
        (station) => station._id === action.stationId
      )
      stations = state.stations.filter(
        (station) => station._id !== action.stationId
      )
      newState = { ...state, stations, lastRemovedStation }
      break

    case ADD_STATION:
      newState = { ...state, stations: [action.station, ...state.stations] }
      break

    case ADD_LIKED_SONG:
      newState = {
        ...state,
        likedSongs: {
          ...state.likedSongs,
          songs: [...state.likedSongs.songs, action.song],
        },
      }
      break

    case REMOVE_LIKED_SONG:
      newState = {
        ...state,
        likedSongs: {
          ...state.likedSongs,
          songs: state.likedSongs.songs.filter(
            (s) => s.yt_id !== action.songId
          ),
        },
      }
      break

    case UPDATE_STATION:
      stations = state.stations.map((station) =>
        station._id === action.station._id ? action.station : station
      )
      newState = { ...state, stations, station: action.station }
      break

    case ADD_STATION_MSG:
      newState = {
        ...state,
        station: {
          ...state.station,
          msgs: [...(state.station?.msgs || []), action.msg],
        },
      }
      break

    case ADD_STATION_SONG:
      newState = {
        ...state,
        stations: state.stations.map((s) => {
          if (s._id !== action.stationId) return s
          s.songs.push(action.song)
          return s
        }),
      }
      if (state.station._id === action.stationId) {
        newState = {
          ...newState,
          station: {
            ...state.station,
            songs: [...(state.station?.songs || []), action.song],
          },
        }
      }
      break

    case REMOVE_STATION_SONG:
      newState = {
        ...state,
        station: {
          ...state.station,
          songs: (state.station?.songs || []).filter(
            (song) => song.yt_id !== action.songId
          ),
        },
      }
      break

    case SET_LIKED_SONGS:
      newState = {
        ...state,
        likedSongs: action.station,
      }
      break

    default:
      break
  }
  return newState
}
