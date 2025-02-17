import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import { stationReducer } from './reducers/station.reducer'
import { stationGroupReducer } from './reducers/stationGroup.reducer'
import { userReducer } from './reducers/user.reducer'
import { playerReducer } from './reducers/player.reducer'
import { systemReducer } from './reducers/system.reducer'

const rootReducer = combineReducers({
  stationModule: stationReducer,
  stationGroupModule: stationGroupReducer,
  userModule: userReducer,
  systemModule: systemReducer,
  playerModule: playerReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : compose
// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
export const store = createStore(rootReducer, middleware)

// For debug:
// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })
