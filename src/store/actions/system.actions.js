import { store } from '../store'
import { TOGGLE_IS_PLAYING } from '../reducers/system.reducer'

export function toggleIsPlaying() {
  store.dispatch({ type: TOGGLE_IS_PLAYING })
}
