import { StationList } from '../cmps/StationList'

import { useEffect, useRef } from 'react'
import { loadStations } from '../store/actions/station.actions'
import { useSelector } from 'react-redux'
import { useClientSize } from '../customHooks/useClientSize'

export function StationIndex() {
  const indexRef = useRef()
  const stations = useSelector((s) => s.stationModule.stations)
  const shadowContainerRef = useRef()
  const [width, height] = useClientSize(indexRef)

  let allStations = Array(6).fill([...stations])

  useEffect(() => {
    document.title = 'Musify'
  })

  useEffect(() => {
    loadStations()
  }, [])

  useEffect(() => {
    onMount()
  }, [width, height])

  const stationHeaders = [
    'Jump back in',
    'Your top mixes',
    'Your shows',
    'Recommended for today',
    'New releases for you',
    'Albums featuring songs you like',
  ]

  const onMount = () => {
    shadowContainerRef.current.style = getBoundriesStyle()
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
            <li className='station-index-item' key={stationHeaders[i]}>
              <StationList
                stations={stations}
                stationHeader={stationHeaders[i]}
                onMount={onMount}
              />
            </li>
          ))}
        </ul>
      </div>
      <div ref={shadowContainerRef} className='shadow-container'></div>
    </>
  )
}
