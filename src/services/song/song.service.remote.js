import { httpService } from '../http.service'
import { getRandomIntInclusive } from '../util.service'

export const songService = {
  query,
  getById,
  save,
  remove,
  addSongFromYT,
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
  if (song._id) {
    savedSong = await httpService.put(`song/${song._id}`, song)
  } else {
    savedSong = await httpService.post('song', song)
  }
  return savedSong
}

async function addSongFromYT(ytSong, artist) {
  const artistId = artist.yt_id
  //const artistCreatedAt = artist.createdAt
  const artistImgUrl = artist.imgUrl
  const artistTitle = artist.artistTitle

  console.log('artist', artist)
  console.log('ytSong', ytSong)

  const { songTitle, songUrl, imgUrl, createdAt } = ytSong
  const songId = ytSong.yt_id

  const newSong = {
    title: songTitle,
    url: songUrl,
    imgUrl: imgUrl,
    addedBy: { yt_id: artistId, fullname: artistTitle, imgUrl: artistImgUrl },
    lengthInSeconds: getRandomIntInclusive(30, 400),
    likedBy: [],
    createdAt,
    updatedAt: Date.now() - getRandomIntInclusive(0, 1000 * 60 * 60 * 24),
    yt_id: songId,
  }
  console.log('newSong', newSong)

  // const readySong = await save(newSong)
  // console.log('readySong', readySong)

  return newSong
}
