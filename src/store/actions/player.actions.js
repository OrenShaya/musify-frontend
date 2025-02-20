import { store } from '../store'
import {
  TOGGLE_IS_PLAYING,
  SET_CURRENTLY_PLAYING,
  SET_IS_PLAYING,
  CLEAR_CURRENTLY_PLAYING,
} from '../reducers/player.reducer'
import { loadSongsQueue } from './station.actions'

export async function toggleIsPlaying() {
  store.dispatch({ type: TOGGLE_IS_PLAYING })
}

export async function setIsPlaying(itNeedsToPlay = false) {
  store.dispatch({ type: SET_IS_PLAYING, isPlaying: itNeedsToPlay })
}

export async function setCurrentlyPlaying(station, songId) {
  const song = station.songs.find((s) => s.yt_id === songId)
  store.dispatch({ type: SET_CURRENTLY_PLAYING, currentlyPlaying: song })
}

export async function clearCurrentlyPlaying() {
  store.dispatch({ type: CLEAR_CURRENTLY_PLAYING, currentlyPlaying: null })
}

export async function playerSongEndedEvent() {
  const currentlyPlayingSong = store.getState().playerModule.currentlyPlaying
  if (!currentlyPlayingSong) {
    setIsPlaying(false)
    console.warn('No currently playing song')
    return
  }

  let currSongsQueue = store.getState().stationModule.songsQueue
  if (!currSongsQueue || currSongsQueue.length === 0) {
    console.warn('No current songs queue')
    const currStation = store.getState().stationModule.station

    if (!currStation) {
      setIsPlaying(false)
      console.warn('No current station for songs queue')
      return
    } else {
      await loadSongsQueue(currStation)
      currSongsQueue = store.getState().stationModule.songsQueue
      if (!currSongsQueue || currSongsQueue.length === 0) {
        console.warn('No songs available in the station queue')
        setIsPlaying(false)
        return
      }
    }
  }

  const songIdx = currSongsQueue.findIndex(
    (song) => song.yt_id === currentlyPlayingSong.yt_id
  )
  if (songIdx < 0) {
    console.warn('song not in current songs queue - so stoping')
    setIsPlaying(false)
    return
  }

  const nextIndex = (songIdx + 1) % currSongsQueue.length
  const nextSong = currSongsQueue[nextIndex]
  const currStation = store.getState().stationModule.station

  setCurrentlyPlaying(currStation, nextSong.yt_id)
  setIsPlaying(true)
}

export function moveToNextSong() {
  const songs = store.getState().stationModule.songsQueue
  const currentSong = store.getState().playerModule.currentlyPlaying
  if (!songs || songs.length === 0) return
  if (currentSong && currentSong.yt_id) {
    const currentIndex = songs.findIndex(
      (song) => song.yt_id === currentSong.yt_id
    )

    const nextIndex = (currentIndex + 1) % songs.length
    const nextSong = songs[nextIndex]
    const currStation = store.getState().stationModule.station

    setCurrentlyPlaying(currStation, nextSong.yt_id)
  } else {
    setCurrentlyPlaying(songs[0]._id)
  }
}

export function moveToPreviousSong() {
  const songs = store.getState().stationModule.songsQueue
  if (!songs || songs.length === 0) return
  const currentSong = store.getState().playerModule.currentlyPlaying

  const currentIndex = songs.findIndex(
    (song) => song.yt_id === currentSong.yt_id
  )
  const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1
  const prevSong = songs[prevIndex]
  const currStation = store.getState().stationModule.station

  setCurrentlyPlaying(currStation, prevSong.yt_id)
}
