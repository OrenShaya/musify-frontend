import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { PlayButton } from './PlayButton'
import { setStation } from '../store/actions/station.actions'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'

export function RecentlyPlayedStations() {
  const stations = useSelector((s) => s.stationModule.stations)
  const selectedStationId = useSelector((s) => s.stationModule.station?._id)
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)
  const likedSongsStation = useSelector(
    (s) => s.userModule.user?.likedSongsStation
  )
  const isSelectedStation = (station) => selectedStationId === station?._id

  const navigate = useNavigate()

  const onNav = (station) => {
    if (station.yt_id !== 'THE-CAKE-IS-A-LIE')
      navigate(`/station/${station._id}`)
    else navigate('collection/tracks')
  }

  const _getRecentStations = () => {
    if (!likedSongsStation && !stations) return []
    else if (!likedSongsStation && stations) return stations.slice(0, 8)
    return [likedSongsStation].concat(stations?.slice(0, 7))
  }

  const isCurrentlyPlaying = (station) => {
    return isPlaying && isSelectedStation(station)
  }

  const onTogglePlay = (station) => {
    if (!isSelectedStation(station)) {
      setStation(station)
      // TODO: continue playlist, instead of set to first song
      setCurrentlyPlaying(station, station.songs[0].yt_id)

      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const recentStations = _getRecentStations()

  return (
    <>
      <ul className='recent-stations-list'>
        {!!recentStations.length &&
          recentStations.map((station) => (
            <li
              key={station._id}
              className='recent-station-item'
              onClick={() => onNav(station)}
            >
              <img
                className='recent-image'
                src={station.createdBy.imgUrl}
                alt=''
              />
              <span className='recent-station-name'>{station.name}</span>

              <PlayButton
                className='btn-play-recent-station'
                togglePlay={() => onTogglePlay(station)}
                isPlaying={isCurrentlyPlaying(station)}
              />
            </li>
          ))}
      </ul>
    </>
  )
}
