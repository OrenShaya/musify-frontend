import { useSelector } from 'react-redux'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'
import { setStation } from '../store/actions/station.actions'
import { PlayButton } from './PlayButton'
import PropTypes from 'prop-types'

export function RecentStationItem({ station }) {
  const selectedStationId = useSelector((s) => s.stationModule.station?._id)
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)
  const isSelectedStation = (station) => selectedStationId === station?._id

  const isMobile = document.documentElement.clientWidth <= 480

  const isCurrentlyPlaying = (station) => {
    return isPlaying && isSelectedStation(station)
  }

  const onTogglePlay = (station) => {
    if (!isSelectedStation(station)) {
      setStation(station)
      setCurrentlyPlaying(station, station.songs[0].yt_id)

      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <img className='recent-image' src={station.createdBy.imgUrl} alt='' />
      <span className='recent-station-name'>{station.name}</span>

      {!isMobile && (
        <PlayButton
          className='btn-play-recent-station'
          togglePlay={() => onTogglePlay(station)}
          isPlaying={isCurrentlyPlaying(station)}
        />
      )}
    </>
  )
}

RecentStationItem.propTypes = {
  station: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string),
    createdBy: PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
    }),
    songs: PropTypes.arrayOf(
      PropTypes.shape({
        yt_id: PropTypes.string,
      })
    ),
  }).isRequired,
}
