import { StationList } from '../cmps/StationList'

import { useEffect, useRef } from 'react'
import { loadStations } from '../store/actions/station.actions'
import { useSelector } from 'react-redux'

export function StationIndex() {
  const indexRef = useRef()
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

  const onMount = () => {
    document.querySelector('.shadow-container').style = getBoundriesStyle()
  }

  const getBoundriesStyle = () => {
    const width = indexRef.current?.offsetWidth
    const height = indexRef.current?.offsetHeight

    return `width:${width}px; height:${height}px;`
  }

  return (
    <>
      <div className='station-index' ref={indexRef}>
        <ul>
          {allStations.map((stations, i) => (
            // TODO: replace with station ID
            <li
              className='station-index-item'
              key={'k' + Math.random() * 100000}
            >
              <StationList
                stations={stations}
                stationHeader={stationHeaders[i]}
                onMount={onMount}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='shadow-container'></div>
    </>
  )
}
