export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING'

const initialState = {
  isLoading: false,
  isPlaying: true,
}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case TOGGLE_IS_PLAYING:
      return { ...state, isPlaying: !state.isPlaying }
    default:
      return state
  }
}
