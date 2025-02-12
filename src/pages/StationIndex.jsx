import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  loadStations,
  addStation,
  updateStation,
  removeStation,
} from '../store/actions/station.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { stationService } from '../services/station/'
import { userService } from '../services/user'

import { StationList } from '../cmps/StationList'
import { StationFilter } from '../cmps/StationFilter'

export function StationIndex() {
  const [filterBy, setFilterBy] = useState(stationService.getDefaultFilter())
  const stations = useSelector(
    (storeState) => storeState.stationModule.stations
  )

  useEffect(() => {
    loadStations(filterBy)
  }, [filterBy])

  async function onRemoveStation(stationId) {
    try {
      await removeStation(stationId)
      showSuccessMsg('Station removed')
    } catch (err) {
      showErrorMsg('Cannot remove station')
    }
  }

  async function onAddStation() {
    const station = stationService.getEmptyStation()
    station.vendor = prompt('Vendor?')
    try {
      const savedStation = await addStation(station)
      showSuccessMsg(`Station added (id: ${savedStation._id})`)
    } catch (err) {
      showErrorMsg('Cannot add station')
    }
  }

  async function onUpdateStation(station) {
    const speed = +prompt('New speed?', station.speed)
    if (speed === 0 || speed === station.speed) return

    const stationToSave = { ...station, speed }
    try {
      const savedStation = await updateStation(stationToSave)
      showSuccessMsg(`Station updated, new speed: ${savedStation.speed}`)
    } catch (err) {
      showErrorMsg('Cannot update station')
    }
  }

  return (
    <main className='station-index'>
      <header>
        <h2>Stations</h2>
        {userService.getLoggedinUser() && (
          <button onClick={onAddStation}>Add a Station</button>
        )}
      </header>
      <StationFilter filterBy={filterBy} setFilterBy={setFilterBy} />
      <StationList
        stations={stations}
        onRemoveStation={onRemoveStation}
        onUpdateStation={onUpdateStation}
      />
    </main>
  )
}
