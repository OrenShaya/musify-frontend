/* eslint-disable no-unused-vars */
import { storageService } from '../async-storage.service'
import { loadFromStorage, saveToStorage } from '../util.service'
import { stationService } from '../station'
import { demoUsers } from '../../../data/demoUsers.js'

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
  likeSong,
  removeLikedSongId,
  addLikedStationId,
  removeLikedStationId,
  isLikedSong,
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

async function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

export async function addUserManualy(userCred) {
  // Only used to manualy add demo data
  try {
    const users = await storageService.query(STORAGE_KEY_USERS)
    const existingUser = users.find((u) => u.username === userCred.username)
    if (existingUser) return

    userCred.likedStationIds = []
    userCred.likedSongIds = []
    userCred.isAdmin = false
    storageService.postWithId(STORAGE_KEY_USERS, userCred)
  } catch {
    // eslint-disable-next-line no-extra-semi
    ;(err) => {
      throw new Error('Unable to add user manualy, err: ', err)
    }
  }
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
async function likeSong(userId, songId) {
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

async function isLikedSong(userId, songId) {
  const user = await getById(userId)
  return user.likedSongIds.includes(songId)
}

/************************************************************* */

// next line is used to fill up with demo data
var runOnce = false
if (!runOnce) {
  _createUsers()
  runOnce = true
}

function _createUsers() {
  let users = loadFromStorage(STORAGE_KEY_USERS)
  if (!users || !users.length) {
    const myDemoUsers = demoUsers
    saveToStorage(STORAGE_KEY_USERS, myDemoUsers)
  }
}
