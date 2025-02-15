import { store } from '../store'
import {
  TOGGLE_IS_PLAYING,
  SET_CURRENTLY_PLAYING,
  CLEAR_CURRENTLY_PLAYING,
} from '../reducers/player.reducer'
import { songService } from '../../services/song'

export async function toggleIsPlaying() {
  store.dispatch({ type: TOGGLE_IS_PLAYING })
}
export async function setCurrentlyPlaying(songId) {
  const song = await songService.getById(songId)
  store.dispatch({ type: SET_CURRENTLY_PLAYING, song })
}
export async function clearCurrentlyPlaying() {
  store.dispatch({ type: CLEAR_CURRENTLY_PLAYING })
}
