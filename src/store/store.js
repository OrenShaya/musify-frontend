import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import { carReducer } from './reducers/car.reducer'
import { stationReducer } from './reducers/station.reducer'
import { userReducer } from './reducers/user.reducer'
import { reviewReducer } from './reducers/review.reducer'
import { systemReducer } from './reducers/system.reducer'

const rootReducer = combineReducers({
  carModule: carReducer,
  stationModule: stationReducer,
  userModule: userReducer,
  systemModule: systemReducer,
  reviewModule: reviewReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : compose
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
export const store = createStore(rootReducer, middleware)

// For debug:
// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })
