import { setStation } from '../store/actions/station.actions'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'
import stationDefaultUrl from '../assets/icons/station-default-img.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

export function SideBarStationPreview({ station }) {
  const selectedStationId = useSelector((s) => s.stationModule.station?._id)
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)

  // if (!station || !station.songs || station.songs.length === 0) {
  if (!station) {
    return <div>Loading</div>
  }

  const isSelectedStation = (station) => selectedStationId === station?._id

  const handleClick = (station) => {
    if (!isSelectedStation()) {
      setStation(station)
      // TODO: continue playlist, instead of set to first song
      setCurrentlyPlaying(station, station.songs[0].yt_id)

      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const STATION_IMG_SRC = station.createdBy?.imgUrl ?? stationDefaultUrl

  return (
    <Link to={`/station/${station._id}`}>
      <div
        onClick={() => handleClick(station)}
        data-station-id={station._id}
        className={`side-bar-station-preview ${
          station.createdBy.fullname === 'Artist' ? 'artist' : 'playlist'
        }`}
      >
        {/* <img src={STATION_IMG_SRC} alt='img' /> */}
        <img src={station.createdBy?.imgUrl} alt='img' />

        <div className='side-bar-station-preview-info'>
          <h3>{station.name}</h3>
          <h4>{station.createdBy.fullname}</h4>
        </div>
      </div>
    </Link>
  )
}

SideBarStationPreview.propTypes = {
  station: PropTypes.shape({
    _id: PropTypes.string,
    yt_id: PropTypes.string,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string),
    createdBy: PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      fullname: PropTypes.string,
    }),
    songs: PropTypes.arrayOf(
      PropTypes.shape({
        yt_id: PropTypes.string,
      })
    ),
  }).isRequired,
}
