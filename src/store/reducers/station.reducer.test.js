// unitTestReducer()

// function unitTestReducer() {
//     var state = initialState
//     const station1 = { _id: 'b101', vendor: 'Station ' + parseInt(Math.random() * 10), msgs: [] }
//     const station2 = { _id: 'b102', vendor: 'Station ' + parseInt(Math.random() * 10), msgs: [] }

//     state = stationReducer(state, { type: SET_STATIONS, stations: [station1] })
//     console.log('After SET_STATIONS:', state)

//     state = stationReducer(state, { type: ADD_STATION, station: station2 })
//     console.log('After ADD_STATION:', state)

//     state = stationReducer(state, { type: UPDATE_STATION, station: { ...station2, vendor: 'Good' } })
//     console.log('After UPDATE_STATION:', state)

//     state = stationReducer(state, { type: REMOVE_STATION, stationId: station2._id })
//     console.log('After REMOVE_STATION:', state)

//     const msg = { id: 'm' + parseInt(Math.random() * 100), txt: 'Some msg' }
//     state = stationReducer(state, { type: ADD_STATION_MSG, stationId: station1._id, msg })
//     console.log('After ADD_STATION_MSG:', state)

//     state = stationReducer(state, { type: REMOVE_STATION, stationId: station1._id })
//     console.log('After REMOVE_STATION:', state)
// }
