import { httpService } from '../http.service'

export const songService = {
  query,
  getById,
  save,
  remove,
}

async function query(filterBy = { txt: '', price: 0 }) {
  return httpService.get(`song`, filterBy)
}

function getById(songId) {
  return httpService.get(`song/${songId}`)
}

async function remove(songId) {
  return httpService.delete(`song/${songId}`)
}
async function save(song) {
  var savedSong
  if (song.yt_id) {
    savedSong = await httpService.put(`song/${song.yt_id}`, song)
  } else {
    savedSong = await httpService.post('song', song)
  }
  return savedSong
}
