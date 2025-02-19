import { userService } from '../../services/user'

export const SET_USER = 'SET_USER'
export const SET_WATCHED_USER = 'SET_WATCHED_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_USERS = 'SET_USERS'

const initialState = {
  user: userService.getLoggedinUser() || null,
  users: [],
  watchedUser: null,
}

export function userReducer(state = initialState, action) {
  var newState = state
  switch (action.type) {
    case SET_USER:
      newState = { ...state, user: action.user }
      break

    case SET_WATCHED_USER:
      newState = { ...state, watchedUser: action.user }
      break

    case REMOVE_USER:
      newState = {
        ...state,
        users: state.users.filter((user) => user._id !== action.userId),
      }
      break

    case SET_USERS:
      newState = { ...state, users: action.users }
      break

    default:
  }
  // For debug:
  // window.userState = newState
  // console.log('State:', newState)
  return newState
}
