import { StationList } from '../cmps/StationList'

import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RecentlyPlayedStations } from '../cmps/RecentlyPlayedStations'
import { LoadingWrapper } from '../cmps/LoadingWrapper'

export function StationIndex() {
  const indexRef = useRef()
  const stations = useSelector((s) => s.stationModule.stations)
  const isLoading = useSelector((s) => s.systemModule.isLoading)

  const getAllStations = () => {
    const allStations = Array(5)

    for (let i = 0; i < 5; i++) {
      const from = i * 10
      const to = (1 + i) * 10
      allStations[i] = stations.slice(from, to)
    }

    return [...allStations, stations]
  }

  useEffect(() => {
    document.title = 'Musify - Web Player: Music for everyone'
  })

  const stationHeaders = [
    'Jump back in',
    'Your top mixes',
    'Recommended for today',
    'New releases for you',
    'Albums featuring songs you like',
    'Everything for you',
  ]

  return (
    <>
      <div className='station-index' ref={indexRef}>
        {!isLoading && <RecentlyPlayedStations indexRef={indexRef} />}
        <div className='station-index-main'>
          <LoadingWrapper />
          {!isLoading && (
            <ul>
              {getAllStations().map((stations, i) => (
                <li className='station-index-item' key={stationHeaders[i]}>
                  <StationList
                    stations={stations}
                    stationHeader={stationHeaders[i]}
                  />
                </li>
              ))}
            </ul>
          )}
          <div className='shadow'></div>
        </div>
      </div>
    </>
  )
}
