export const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING'
export const SET_IS_PLAYING = 'SET_IS_PLAYING'
export const SET_CURRENTLY_PLAYING = 'SET_CURRENTLY_PLAYING'
export const CLEAR_CURRENTLY_PLAYING = 'CLEAR_CURRENTLY_PLAYING'

const initialState = {
  currentlyPlaying: null,
  isPlaying: true,
}

export function playerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CURRENTLY_PLAYING:
      return { ...state, currentlyPlaying: action.currentlyPlaying }
    case CLEAR_CURRENTLY_PLAYING:
      return { ...state, currentlyPlaying: null }
    case TOGGLE_IS_PLAYING:
      return { ...state, isPlaying: !state.isPlaying }
    case SET_IS_PLAYING:
      return { ...state, isPlaying: action.isPlaying }
    default:
      return state
  }
}
