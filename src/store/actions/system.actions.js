import { store } from '../store'

import { SET_SEARCH_TERM } from '../reducers/system.reducer'

export async function setSearchTerm(newSearchTerm = '') {
  try {
    store.dispatch({ type: SET_SEARCH_TERM, newSearchTerm })
  } catch (err) {
    console.warn('Unable to set search term', err)
  }
}

export async function clearSearchTerm() {
  try {
    store.dispatch({ type: SET_SEARCH_TERM, newSearchTerm: '' })
  } catch (err) {
    console.warn('Unable to reset search term', err)
  }
}
