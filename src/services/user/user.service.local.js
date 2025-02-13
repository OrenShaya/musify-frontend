/* eslint-disable no-unused-vars */
import { storageService } from '../async-storage.service'
import { loadFromStorage, saveToStorage } from '../util.service'
import { stationService } from '../station'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY_USERS = 'users_db'

export const userService = {
  login,
  logout,
  signup,
  getUsers,
  getById,
  remove,
  update,
  getLoggedinUser,
  saveLoggedinUser,
  addLikedSongId,
  removeLikedSongId,
  addLikedStationId,
  removeLikedStationId,
}

async function getUsers() {
  const users = await storageService.query(STORAGE_KEY_USERS)
  return users.map((user) => {
    delete user.password
    return user
  })
}

async function getById(userId) {
  return await storageService.get(STORAGE_KEY_USERS, userId)
}

function remove(userId) {
  return storageService.remove(STORAGE_KEY_USERS, userId)
}

async function update(updateInfo) {
  let userToUpdate
  if (updateInfo && updateInfo._id) {
    userToUpdate = await storageService.get(STORAGE_KEY_USERS, updateInfo._id)
    userToUpdate = { ...userToUpdate, ...updateInfo }
  } else {
    throw new Error('Invalid update data')
  }

  await storageService.put(STORAGE_KEY_USERS, userToUpdate)

  // Update session user if needed
  const loggedinUser = getLoggedinUser()
  if (
    (loggedinUser && loggedinUser._id === userToUpdate._id) ||
    loggedinUser.isAdmin
  ) {
    saveLoggedinUser(userToUpdate)
  }

  return userToUpdate
}

async function login(userCred) {
  const users = await storageService.query(STORAGE_KEY_USERS)
  const user = users.find(
    (user) => user.username === userCred.username
    // && user.password === userCred.password
  )

  if (!user) {
    // return null or throw an error
    throw new Error('Invalid username or password')
  }

  return saveLoggedinUser(user)
}

async function signup(userCred) {
  const users = await storageService.query(STORAGE_KEY_USERS)
  const existingUser = users.find((u) => u.username === userCred.username)
  if (existingUser) throw new Error('Username is already taken!')

  if (!userCred.imgUrl)
    userCred.imgUrl =
      'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
  userCred.likedStationIds = []
  userCred.likedSongIds = []

  const newUser = await storageService.post(STORAGE_KEY_USERS, userCred)
  return saveLoggedinUser(newUser)
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function saveLoggedinUser(user) {
  user = {
    _id: user._id,
    fullname: user.fullname,
    imgUrl: user.imgUrl,
    likedStationIds: user.likedStationIds,
    likedSongIds: user.likedSongIds,
    isAdmin: user.isAdmin,
  }
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

// add song
async function addLikedSongId(userId, songId) {
  if (!userId || !songId) throw new Error('not valid userId or songId')

  const user = await getById(userId)
  if (!user) throw new Error('user not found')

  user.likedSongIds = user.likedSongIds || []

  if (!user.likedSongIds.includes(songId)) {
    user.likedSongIds.push(songId)
  }

  const updatedUser = await update({
    _id: userId,
    likedSongIds: user.likedSongIds,
  })
  // Update the liked station after updating likedSongIds
  await stationService.updateLikedSongsStation(updatedUser)
  return updatedUser
}

// remove song
async function removeLikedSongId(userId, songId) {
  if (!userId || !songId) throw new Error('not valid userId or songId')

  const user = await getById(userId)
  if (!user) throw new Error('user not found')

  user.likedSongIds = (user.likedSongIds || []).filter((id) => id !== songId)

  const updatedUser = await update({
    _id: userId,
    likedSongIds: user.likedSongIds,
  })
  await stationService.updateLikedSongsStation(updatedUser)
  return updatedUser
}

// add station
async function addLikedStationId(userId, stationId) {
  if (!userId || !stationId) throw new Error('not valid userId or stationId')

  const user = await getById(userId)
  if (!user) throw new Error('user not found')

  user.likedStationIds = user.likedStationIds || []

  if (!user.likedStationIds.includes(stationId)) {
    user.likedStationIds.push(stationId)
  }
  return await update({ _id: userId, likedStationIds: user.likedStationIds })
}

// remove station
async function removeLikedStationId(userId, stationId) {
  if (!userId || !stationId) throw new Error('not valid userId or stationId')

  const user = await getById(userId)
  if (!user) throw new Error('user not found')

  user.likedStationIds = (user.likedStationIds || []).filter(
    (id) => id !== stationId
  )
  return await update({ _id: userId, likedStationIds: user.likedStationIds })
}

/************************************************************* */

// next line is used to fill up with demo data
_createUsers()
function _createUsers() {
  let users = loadFromStorage(STORAGE_KEY_USERS)
  if (!users || !users.length) {
    const demoUsers = [
      {
        username: 'admin',
        password: 'admin',
        fullname: 'admin',
        isAdmin: true,
        likedStationIds: [],
        likedSongIds: [],
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        _id: '3S4c4',
      },
      {
        username: 'kiki',
        password: 'kiki',
        fullname: 'kiki',
        isAdmin: false,
        likedStationIds: [],
        likedSongIds: [],
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        _id: '3T5yg',
      },
      {
        username: 'muki',
        password: 'muki',
        fullname: 'muki',
        isAdmin: false,
        likedStationIds: [],
        likedSongIds: [],
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        _id: 'NuBkh',
      },
      {
        username: 'shuki',
        password: 'shuki',
        fullname: 'shuki',
        isAdmin: false,
        likedStationIds: [],
        likedSongIds: [],
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        _id: 'Oeiwy',
      },
      {
        username: 'baba',
        password: 'baba',
        fullname: 'baba',
        isAdmin: false,
        likedStationIds: [],
        likedSongIds: [],
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        _id: '7N2Ai',
      },
      {
        username: 'puki',
        password: 'puki',
        fullname: 'Puki Ben David',
        isAdmin: false,
        likedStationIds: [],
        likedSongIds: [],
        imgUrl:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        _id: 'u101',
      },
    ]
    saveToStorage(STORAGE_KEY_USERS, demoUsers)
  }
}

// To quickly create an admin user, uncomment the next line
// _createAdmin()
// async function _createAdmin() {
//   const user = {
//     username: 'admin',
//     password: 'admin',
//     fullname: 'admin adminov',
//     imgUrl:
//       'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
//     isAdmin: true,
//     likedStationIds: [],
//     likedSongIds: [],
//   }

//   const newUser = await storageService.post(STORAGE_KEY_USERS, user)
//   console.log('newUser: ', newUser)
// }

/****************************************************************************** */

// async function unitTestUserService() {
//   try {
//     console.log('**** Starting User Service Unit Test ****')

//     //  Get initial users
//     let users = await userService.getUsers()
//     console.log('initial users:', users)
//     console.log('Expected: demo users array (should contain demo users)')

//     // Signup new user
//     const newUserCred = {
//       username: 'testuser',
//       password: 'testuser',
//       fullname: 'Test User',
//     }
//     const signedUpUser = await userService.signup(newUserCred)
//     console.log('signed up user:', signedUpUser)
//     console.log(
//       'Expected: new user object with username "testuser" and no password'
//     )

//     // Get users again to verify new user
//     users = await userService.getUsers()
//     console.log('users after signup:', users)
//     console.log('Expected: demo users array include new "testuser"')

//     //  Log in loggedInUser with the new user cred
//     const loggedInUser = await userService.login({
//       username: 'testuser',
//       password: 'testuser',
//     })
//     console.log('logged in user:', loggedInUser)
//     console.log('Expected: minimal user object "testuser" from session storage')

//     // Update new user's fullname
//     const updatedUser = await userService.update({
//       _id: signedUpUser._id,
//       fullname: 'User Updated',
//     })
//     console.log('updated user:', updatedUser)
//     console.log(
//       'Expected: user object with fullname changed to "Test User Updated"'
//     )

//     // Retrieve user by ID
//     const userById = await userService.getById(signedUpUser._id)
//     console.log('User fetched by ID:', userById)
//     console.log('Expected: user object matching the updated user details')

//     // Remove user
//     await userService.remove(signedUpUser._id)
//     console.log('removed user id:', signedUpUser._id)
//     console.log(
//       'Expected: user with the provided _id should be removed from storage'
//     )

//     // Get users again to confirm removal
//     users = await userService.getUsers()
//     console.log('Users after removal:', users)
//     console.log('Expected: demo users array that does not include "testuser"')

//     // Logout
//     await userService.logout()
//     const currentUser = userService.getLoggedinUser()
//     console.log('current logged in user after logout:', currentUser)
//     console.log('Expected: null (session storage cleared)')

//     console.log('**** user service unit test completed ****')
//   } catch (err) {
//     console.error('Error user service unit test:', err)
//   }
// }

// unitTestUserService()

/****************************************************************************** */
// async function unitTestUserLikes() {
//   try {
//     console.log('****** Start User Likes Unit Test ******')

//     // login as admin
//     const loggedInUser = await login({ username: 'admin', password: 'admin' })
//     console.log('logged in user:', loggedInUser)

//     // add  songid
//     let updatedUser = await addLikedSongId(loggedInUser._id, 'song_test_1')
//     console.log('after add id "song_test_1":', updatedUser.likedSongIds)
//     console.log('Expected: likedSongIds includes "song_test_1"')

//     // add songid again
//     updatedUser = await addLikedSongId(loggedInUser._id, 'song_test_2')
//     console.log('after add songid "song_test_2":', updatedUser.likedSongIds)
//     console.log(
//       'Expected: likedSongIds includes "song_test_1" and "song_test_2"'
//     )

//     // remove songid
//     updatedUser = await removeLikedSongId(loggedInUser._id, 'song_test_1')
//     console.log(
//       'after removing song id "song_test_1":',
//       updatedUser.likedSongIds
//     )
//     console.log('Expected: likedSongIds only includes "song_test_2"')

//     // remove songid
//     updatedUser = await removeLikedSongId(loggedInUser._id, 'song_test_2')
//     console.log(
//       'after removing song id "song_test_2":',
//       updatedUser.likedSongIds
//     )
//     console.log('Expected: likedSongIds be empty')

//     // add  stationid
//     updatedUser = await addLikedStationId(loggedInUser._id, 'station_test_1')
//     console.log(
//       'After adding station id "station_test_1":',
//       updatedUser.likedStationIds
//     )
//     console.log('Expected: likedStationIds includes "station_test_1"')

//     // temove stationid
//     updatedUser = await removeLikedStationId(loggedInUser._id, 'station_test_1')
//     console.log(
//       'After removing station id "station_test_1":',
//       updatedUser.likedStationIds
//     )
//     console.log('Expected: likedStationIds is empty')

//     await logout()
//     console.log('****** User Likes Unit Test Completed ******')
//   } catch (err) {
//     console.error('Error during User Likes Unit Test:', err)
//   }
// }

// unitTestUserLikes()
