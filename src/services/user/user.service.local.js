/* eslint-disable no-unused-vars */
import { storageService } from '../async-storage.service'
import { loadFromStorage, saveToStorage } from '../util.service'

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
    // If updateInfo is the entire user object
    userToUpdate = await storageService.get(STORAGE_KEY_USERS, updateInfo._id)
    userToUpdate = { ...userToUpdate, ...updateInfo }
  } else {
    throw new Error('Invalid update data')
  }

  await storageService.put(STORAGE_KEY_USERS, userToUpdate)

  // Update session user if needed
  const loggedinUser = getLoggedinUser()
  if (loggedinUser && loggedinUser._id === userToUpdate._id) {
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
async function _createAdmin() {
  const user = {
    username: 'admin',
    password: 'admin',
    fullname: 'admin adminov',
    imgUrl:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
    isAdmin: true,
    likedStationIds: [],
    likedSongIds: [],
  }

  const newUser = await storageService.post(STORAGE_KEY_USERS, user)
  console.log('newUser: ', newUser)
}

//For debugging
//window.userss = userService
