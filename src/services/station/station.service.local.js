import { storageService } from '../async-storage.service'
import { loadFromStorage, makeId, saveToStorage } from '../util.service'
import { userService } from '../user'
import { songService } from '../song'
import { stationsDemoData } from '../../../data/demoStations.js'

const STORAGE_KEY = 'station_db'

export const stationService = {
  query,
  getById,
  save,
  remove,
  addStationSong,
  removeStationSong,
  updateLikedSongsStation,
}

async function query(filterBy = { name: '', tags: [] }) {
  let stations = await storageService.query(STORAGE_KEY)
  const { name, tags, sortField, sortDir } = filterBy

  if (name) {
    const regex = new RegExp(name, 'i')
    stations = stations.filter((station) => regex.test(station.name))
  }

  if (Array.isArray(tags) && tags.length) {
    stations = stations.filter((station) =>
      tags.every((tag) => station.tags.includes(tag))
    )
  }

  if (sortField === 'name' && sortDir) {
    stations.sort((a, b) => a.name.localeCompare(b.name) * +sortDir)
  }

  return stations
}

function getById(stationId) {
  return storageService.get(STORAGE_KEY, stationId)
}

async function remove(stationId) {
  // throw new Error('Nope')
  await storageService.remove(STORAGE_KEY, stationId)
}

async function save(station) {
  let savedStation
  if (station._id) {
    const createdBy = station?.createdBy || {
      _id: '',
      fullname: 'Unknown',
      imgUrl: '',
    }

    const stationToSave = {
      _id: station._id,
      name: station.name,
      tags: [...(station.tags ?? [])],
      createdBy: {
        _id: createdBy._id,
        fullname: createdBy.fullname,
        imgUrl: createdBy.imgUrl || '',
        createdAt: createdBy.createdAt ?? Date.now(),
        updatedAt: Date.now(),
      },
      likedByUsers: [...(station.likedByUsers ?? [])],
      songs: [...(station.songs ?? [])],
      msgs: [...(station.msgs ?? [])],
    }
    savedStation = await storageService.put(STORAGE_KEY, stationToSave)
  } else {
    const activeUser = userService.getLoggedinUser()
    if (!activeUser) throw new Error('No user logged in')

    const stationToSave = {
      _id: makeId(7),
      name: station.name,
      tags: [...(station.tags ?? [])],
      createdBy: {
        _id: activeUser._id,
        fullname: activeUser.fullname,
        imgUrl: station.createdBy?.imgUrl || '',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      likedByUsers: [...(station.likedByUsers ?? [])],
      songs: [...(station.songs ?? [])],
      msgs: [...(station.msgs ?? [])],
    }
    savedStation = await storageService.post(STORAGE_KEY, stationToSave)
  }
  return savedStation
}

export async function addStationManualy(station) {
  await storageService.postWithId(STORAGE_KEY, station)
}

async function addStationSong(stationId, song) {
  if (!stationId || !song) {
    throw new Error('Not valid stationId or song in addStationSong')
  }

  const station = await getById(stationId)
  if (!station) {
    throw new Error('No valid stationId, no station found')
  }

  const miniSong = {
    _id: song._id,
    title: song.title,
    url: song.url,
    imgUrl: song.imgUrl,
    lengthInSeconds: song.lengthInSeconds,
    addedBy: song.addedBy,
    likedBy: song.likedBy,
    createdAt: song.createdAt,
    addedAt: Date.now(),
  }

  station.songs.push(miniSong)
  await storageService.put(STORAGE_KEY, station)

  return miniSong
}

async function removeStationSong(stationId, songId) {
  if (!stationId || !songId) {
    throw new Error('Not valid stationId or songId in removeStationSong')
  }

  const station = await getById(stationId)
  if (!station) {
    throw new Error('No valid stationId, no station found')
  }
  const filteredStationSongs = station.songs.filter(
    (song) => song._id !== songId
  )

  station.songs = filteredStationSongs
  await storageService.put(STORAGE_KEY, station)
}

//For debugging
//window.stationss = stationService
// import ddtUrl from '../../assets/img/station-ddt.jpeg'
// import corpoMenteUrl from '../../assets/img/station-corpo-mente.jpeg'
// import rubyMyDearUrl from '../../assets/img/station-ruby-my-dear.jpeg'

let stationsDemo = stationsDemoData
//stationsDemoData = stationsDemoData.concat(stationsDemoData)
// wtf Shahar...

_createStations()
function _createStations() {
  let stations = loadFromStorage(STORAGE_KEY)
  if (!stations || !stations.length) {
    if (stationsDemo) {
      saveToStorage(STORAGE_KEY, stationsDemo)
    }
  }
}

// next line is used to fill up with demo data
//_createStations()

async function _getLikedStationId(user) {
  if (!user.likedStationIds || !user.likedStationIds.length) return null

  const stationPromises = user.likedStationIds.map((id) =>
    getById(id).catch(() => null)
  )

  //wait for all the station so use Promise.all
  const stations = await Promise.all(stationPromises)
  const likedStation = stations.find(
    (station) => station && station.name === 'Liked Songs'
  )
  return likedStation ? likedStation._id : null
}

async function updateLikedSongsStation(user) {
  const likedSongIds = user.likedSongIds || []
  let likedStationId = await _getLikedStationId(user)

  if (likedSongIds.length === 0) {
    if (likedStationId) {
      await stationService.remove(likedStationId)
      user.likedStationIds = user.likedStationIds.filter(
        (id) => id !== likedStationId
      )
      await userService.update({
        _id: user._id,
        likedStationIds: user.likedStationIds,
      })
    }
    return
  }

  let likedStation
  if (!likedStationId) {
    const newStation = {
      name: 'Liked Songs',
      tags: ['liked'],
      createdBy: {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: '',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      likedByUsers: [
        {
          _id: user._id,
          fullname: user.fullname,
          imgUrl: user.imgUrl,
        },
      ],
      songs: [],
      msgs: [],
    }

    likedStation = await stationService.save(newStation)
    likedStationId = likedStation._id
    if (!user.likedStationIds) user.likedStationIds = []

    user.likedStationIds.push(likedStationId)

    await userService.update({
      _id: user._id,
      likedStationIds: user.likedStationIds,
    })
  } else {
    likedStation = await getById(likedStationId)
  }

  const likedSongsPromises = likedSongIds.map((songId) => {
    const song = songService.getById(songId)
    if (!song) return null
    song.addedAt = Date.now()
    return song
  })

  const likedSongs = (await Promise.all(likedSongsPromises)).filter(Boolean)
  likedStation.songs = likedSongs
  await stationService.save(likedStation)
}

/********************************************************** */

// eslint-disable-next-line no-unused-vars
// async function unitTestStationService() {
//   try {
//     console.log('**** Start station service unit test ****')

//     // Query initial stations
//     let stations = await stationService.query()
//     console.log(
//       'initial stations:',
//       stations,
//       'stations count',
//       stations.length
//     )
//     console.log('Expected: array of demo stations from storage')

//     const loggedInUser = await userService.login({
//       username: 'admin',
//       password: 'admin',
//     })

//     // Add a new station
//     const newStation = {
//       name: 'Test Station',
//       tags: ['test', 'demo'],
//       // For new stations, createdBy, likedByUsers, songs, msgs are left empty;
//       // the service will use the active user for createdBy.
//       likedByUsers: [],
//       songs: [],
//       msgs: [],
//     }
//     const addedStation = await stationService.save(newStation)
//     console.log('Added station:', addedStation)
//     console.log(
//       'Expected: New station object with a generated _id, createdBy set from active user, and current timestamps'
//     )

//     // Update the new station (change its name)
//     const updatedStationData = { ...addedStation, name: 'Test Station Updated' }
//     const updatedStation = await stationService.save(updatedStationData)
//     console.log('Updated station:', updatedStation)
//     console.log(
//       'Expected: station  with name updated to "Test Station Updated" and a updated updatedAt timestamp'
//     )

//     // Update the new station (change its name)
//     const updatedStationDataLikedUser = {
//       ...updatedStation,
//       likedByUsers: [
//         { _id: loggedInUser._id, fullname: loggedInUser.fullname },
//       ],
//     }
//     const updatedStationLikedUser = await stationService.save(
//       updatedStationDataLikedUser
//     )
//     console.log('updated station:', updatedStationLikedUser)
//     console.log(
//       'Expected: station with likedByUsers updated to loggedInUser and a updated updatedAt timestamp'
//     )

//     // Retrieve station by id
//     const fetchedStation = await stationService.getById(updatedStation._id)
//     console.log('fetched station by id:', fetchedStation)
//     console.log('Expected: station matching the updated station')

//     // test addStationSong:
//     // new demo song object
//     const newSong = {
//       _id: makeId(7),
//       title: 'Test Song for Station',
//       url: 'https://youtu.be/testsong',
//       imgUrl: 'https://placeholder.com',
//       lengthInSeconds: 300,
//       // The service will use the active user for addedBy in save() if song._id is not provided,
//       // but here we mimic a song with an _id already.
//       addedBy: { _id: loggedInUser._id, fullname: loggedInUser.fullname },
//       likedBy: [],
//       createdAt: Date.now(),
//       updatedAt: Date.now(),
//     }
//     const addedSong = await stationService.addStationSong(
//       updatedStation._id,
//       newSong
//     )
//     console.log('added station song:', addedSong)
//     console.log(
//       "Expected: song object added to the station's songs array (with matching _id and song details)"
//     )
//     // Retrieve station by id to see added song
//     const fetchedStation2 = await stationService.getById(updatedStation._id)
//     console.log('fetched station by id to view added song:', fetchedStation2)
//     console.log(
//       'Expected: station matching the updated station with added song'
//     )

//     // Remove station song
//     await stationService.removeStationSong(updatedStation._id, addedSong._id)
//     console.log(`removed station song with id: ${addedSong._id}`)
//     console.log(
//       "Expected: song with the given _id is removed from the station's songs array"
//     )

//     // Retrieve station by id to see removed song
//     const fetchedStation3 = await stationService.getById(updatedStation._id)
//     console.log('fetched station by id to view removed song:', fetchedStation3)
//     console.log(
//       'Expected: station matching the updated station with removed song'
//     )

//     // Remove station
//     await stationService.remove(updatedStation._id)
//     console.log('removed station with id:', updatedStation._id)
//     console.log(
//       'Expected: station with the provided _id is removed from storage'
//     )

//     // Query stations again to confirm removal
//     stations = await stationService.query()
//     console.log(
//       'Stations after removal:',
//       stations,
//       'stations count',
//       stations.length
//     )
//     console.log(
//       'Expected: array of stations should not include removed station'
//     )

//     await userService.logout()
//     console.log('**** Station service unit test completed ****')
//   } catch (err) {
//     console.error('Error during station service unit test:', err)
//   }
// }

// unitTestStationService()

/****************************************************** */

// eslint-disable-next-line no-unused-vars
// async function unitTestUpdateLikedSongsStation() {
//   try {
//     console.log('***** Starting updateLikedSongsStation Unit Test *****')

//     // Log in admin
//     let user = await userService.login({ username: 'admin', password: 'admin' })
//     console.log('Logged in user:', user)

//     // make sure likedSongIds and likedStationIds are initially empty.
//     console.log('Initial likedSongIds:', user.likedSongIds, 'Expected: []')
//     console.log(
//       'Initial likedStationIds:',
//       user.likedStationIds,
//       ' Expected: []'
//     )

//     // song objects (without _id)
//     const newSong = {
//       title: 'Test Song',
//       url: 'https://youtu.be/testsong',
//       imgUrl: 'https://via.placeholder.com/300',
//       lengthInSeconds: 240,
//       likedBy: [],
//     }
//     const mockSong = await songService.save(newSong)
//     console.log('added test song:', mockSong)
//     const newSong2 = {
//       title: 'Test Song2',
//       url: 'https://youtu.be/testsong',
//       imgUrl: 'https://via.placeholder.com/300',
//       lengthInSeconds: 220,
//       likedBy: [],
//     }
//     const mockSong2 = await songService.save(newSong2)
//     console.log('added test song:', mockSong2)

//     // add a liked song id to the user.
//     user = await userService.addLikedSongId(user._id, mockSong._id)
//     console.log('after add song_test_1, likedSongIds:', user.likedSongIds)
//     console.log('Expected: likedSongIds includes:', mockSong._id)

//     // UPDATE THE LIKED SONGS STATION_______
//     await updateLikedSongsStation(user)

//     let likedStationId = await _getLikedStationId(user)
//     console.log('after update liked stationid:', likedStationId)

//     let likedStation = likedStationId ? await getById(likedStationId) : null
//     console.log('Liked Station after adding song1:', likedStation)
//     console.log(
//       'Expected: a station named "Liked Songs" with its songs array containing details for "song1"'
//     )

//     // Add another liked song.
//     user = await userService.addLikedSongId(user._id, mockSong2._id)
//     await updateLikedSongsStation(user)
//     console.log('after adding song2, likedSongIds:', user.likedSongIds)
//     likedStationId = await _getLikedStationId(user)
//     likedStation = likedStationId ? await getById(likedStationId) : null
//     console.log('liked Station after adding song2:', likedStation)
//     console.log(
//       'Expected: liked station songs array contains details for both ',
//       mockSong._id,
//       mockSong2._id
//     )

//     // Remove one liked song.
//     user = await userService.removeLikedSongId(user._id, mockSong._id)
//     await updateLikedSongsStation(user)
//     console.log('After removing song_test_1, likedSongIds:', user.likedSongIds)

//     likedStationId = await _getLikedStationId(user)
//     likedStation = likedStationId ? await getById(likedStationId) : null

//     console.log('Liked Station after removal of song_test_1:', likedStation)
//     console.log(
//       'Expected: liked station songs array only contains details for ',
//       mockSong2._id
//     )

//     // Remove the last liked song.
//     user = await userService.removeLikedSongId(user._id, mockSong2._id)
//     await updateLikedSongsStation(user)
//     console.log(
//       'after removing all liked songs, likedSongIds:',
//       user.likedSongIds
//     )
//     console.log('Expected: likedSongIds is empty')
//     likedStationId = await _getLikedStationId(user)
//     console.log('Retrieved liked station id after removal:', likedStationId)
//     console.log('Expected: likedStationId is null (station removed)')

//     // remove mock song
//     await songService.remove(mockSong._id)
//     await songService.remove(mockSong2._id)
//     console.log('Removed song with _ids:', mockSong._id, mockSong2._id)

//     //logout
//     await userService.logout()
//     console.log('***** updateLikedSongsStation UT completed *****')
//   } catch (err) {
//     console.error('Error during updateLikedSongsStation unit test:', err)
//   }
// }

// setTimeout(() => {
//   unitTestUpdateLikedSongsStation()
// }, 5000)
