import { userService } from '../../services/user'
import { store } from '../store'

import { showErrorMsg } from '../../services/event-bus.service'
import { LOADING_DONE, LOADING_START } from '../reducers/system.reducer'
import {
  REMOVE_USER,
  SET_STATION_GROUPS,
  SET_USER,
  SET_USERS,
  SET_WATCHED_USER,
} from '../reducers/user.reducer'

export async function loadUsers() {
  try {
    store.dispatch({ type: LOADING_START })
    const users = await userService.getUsers()
    store.dispatch({ type: SET_USERS, users })
  } catch (err) {
    console.warn('UserActions: err in loadUsers', err)
  } finally {
    store.dispatch({ type: LOADING_DONE })
  }
}

export async function removeUser(userId) {
  try {
    await userService.remove(userId)
    store.dispatch({ type: REMOVE_USER, userId })
  } catch (err) {
    console.warn('UserActions: err in removeUser', err)
  }
}

export async function login(credentials) {
  try {
    const user = await userService.login(credentials)
    store.dispatch({
      type: SET_USER,
      user,
    })
    debugger
    store.dispatch({
      type: SET_STATION_GROUPS,
      stationGroups: user.stationGroups,
    })
    return user
  } catch (err) {
    console.warn('Cannot login', err)
    throw err
  }
}

export async function signup(credentials) {
  try {
    const user = await userService.signup(credentials)
    store.dispatch({
      type: SET_USER,
      user,
    })
    return user
  } catch (err) {
    console.warn('Cannot signup', err)
    throw err
  }
}

export async function logout() {
  try {
    await userService.logout()
    store.dispatch({
      type: SET_USER,
      user: null,
    })
  } catch (err) {
    console.warn('Cannot logout', err)
    throw err
  }
}

export async function loadUser(userId) {
  try {
    const user = await userService.getById(userId)
    store.dispatch({ type: SET_WATCHED_USER, user })
  } catch (err) {
    showErrorMsg('Cannot load user')
    console.warn('Cannot load user', err)
  }
}

export async function toggleLikeSong(songId, setLikedTo) {
  const user = userService.getLoggedinUser()
  try {
    let updatedUser
    if (setLikedTo) updatedUser = await userService.likeSong(user._id, songId)
    else updatedUser = await userService.removeLikedSongId(user._id, songId)
    store.dispatch({ type: SET_USER, user: updatedUser })
  } catch (err) {
    console.warn('Cannot like song', err)
    throw err
  }
}
