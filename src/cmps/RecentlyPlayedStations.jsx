import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { RecentStationItem } from './RecentStationItem'

export function RecentlyPlayedStations({ indexRef }) {
  const stations = useSelector((s) => s.stationModule.stations)
  const likedSongsStation = useSelector(
    (s) => s.userModule.user?.likedSongsStation
  )
  const stationsRef = useRef()

  const _getRecentStations = () => {
    if (!likedSongsStation && !stations) return []
    else if (!likedSongsStation && stations) {
      return _getRandomElementsFromArray(stations, 8)
    }
    return [likedSongsStation].concat(_getRandomElementsFromArray(stations, 7))
  }

  function _getRandomElementsFromArray(arr, size) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random())
    return shuffled.slice(0, size)
  }

  const recentStations = _getRecentStations()

  const onSetGradientColor = ([r, g, b]) => {
    indexRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    indexRef.current.style.backgroundImage = `linear-gradient(rgb(${r}, ${g}, ${b}) 10%, #121212 20%)`
  }
  return (
    <>
      <ul className='recent-stations-list' ref={stationsRef}>
        {!!recentStations.length &&
          recentStations.map((station) => (
            <RecentStationItem
              key={station._id}
              station={station}
              setGradientColor={onSetGradientColor}
            />
          ))}
      </ul>
    </>
  )
}
