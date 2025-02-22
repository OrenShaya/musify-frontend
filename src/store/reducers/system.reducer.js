export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

const initialState = {
  isLoading: false,
  searchTerm: '',
}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }

    case LOADING_DONE:
      return { ...state, isLoading: false }

    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.newSearchTerm }

    default:
      return state
  }
}
