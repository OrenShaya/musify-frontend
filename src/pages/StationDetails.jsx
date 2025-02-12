import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStation, addStationMsg } from '../store/actions/station.actions'

export function StationDetails() {
  const { stationId } = useParams()
  const station = useSelector((storeState) => storeState.stationModule.station)

  useEffect(() => {
    loadStation(stationId)
  }, [stationId])

  async function onAddStationMsg(stationId) {
    try {
      await addStationMsg(stationId, 'bla bla ' + parseInt(Math.random() * 10))
      showSuccessMsg(`Station msg added`)
    } catch (err) {
      showErrorMsg('Cannot add station msg')
    }
  }

  return (
    <section className='station-details'>
      <Link to='/station'>Back to list</Link>
      <h1>Station Details</h1>
      {station && (
        <div>
          <h3>{station.vendor}</h3>
          <h4>${station.price}</h4>
          <pre> {JSON.stringify(station, null, 2)} </pre>
        </div>
      )}
      <button
        onClick={() => {
          onAddStationMsg(station._id)
        }}
      >
        Add station msg
      </button>
    </section>
  )
}
