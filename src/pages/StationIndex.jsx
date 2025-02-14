import { StationList } from '../cmps/StationList'

import { useEffect } from 'react'
import { loadStations } from '../store/actions/station.actions'
import { useSelector } from 'react-redux'

export function StationIndex() {
  const stations = useSelector((s) => s.stationModule.stations)

  let allStations = Array(6).fill([...stations])

  useEffect(() => {
    loadStations()
  }, [])
  const stationHeaders = [
    'Jump back in',
    'Your top mixes',
    'Your shows',
    'Recommended for today',
    'New releases for you',
    'Albums featuring songs you like',
  ]

  return (
    <div className='station-index'>
      <ul>
        {allStations.map((stations, i) => (
          // TODO: replace with station ID
          <li className='station-index-item' key={'k' + Math.random() * 100000}>
            <StationList
              stations={stations}
              stationHeader={stationHeaders[i]}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
