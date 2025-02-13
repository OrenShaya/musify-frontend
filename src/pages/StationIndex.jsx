import { StationList } from '../cmps/StationList'

import { useEffect } from 'react'
import { loadStations } from '../store/actions/station.actions'
import { useSelector } from 'react-redux'

export function StationIndex() {
  const allStations = useSelector((s) => s.stationModule.stations)

  useEffect(() => {
    loadStations()
  }, [])

  return (
    <div className='station-index'>
      <StationList stations={allStations} />
      <StationList stations={allStations} />
      <StationList stations={allStations} />
      <StationList stations={allStations} />
      <StationList stations={allStations} />
      <StationList stations={allStations} />
      <StationList stations={allStations} />
      <StationList stations={allStations} />
    </div>
  )
}
