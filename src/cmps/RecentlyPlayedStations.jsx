import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useRef } from 'react'
import { RecentStationItem } from './RecentStationItem'

export function RecentlyPlayedStations() {
  const stations = useSelector((s) => s.stationModule.stations)
  const likedSongsStation = useSelector(
    (s) => s.userModule.user?.likedSongsStation
  )
  const navigate = useNavigate()
  const stationsRef = useRef()

  const onNav = (station) => {
    if (station.yt_id !== 'THE-CAKE-IS-A-LIE')
      navigate(`/station/${station._id}`)
    else navigate('collection/tracks')
  }

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

  return (
    <>
      <ul className='recent-stations-list' ref={stationsRef}>
        {!!recentStations.length &&
          recentStations.map((station) => (
            <li
              key={station._id}
              className='recent-station-item'
              onClick={() => onNav(station)}
            >
              <RecentStationItem station={station} />
            </li>
          ))}
      </ul>
    </>
  )
}
