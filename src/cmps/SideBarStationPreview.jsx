import { setStation } from '../store/actions/station.actions'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'
import stationDefaultUrl from '../assets/icons/station-default-sidebar-img.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import pinUrl from '../assets/img/pin.svg'

export function SideBarStationPreview({ station }) {
  const selectedStationId = useSelector((s) => s.stationModule.station?._id)
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)
  const likedSongsCount = useSelector(
    (s) => s.userModule.user?.likedSongsStation?.songs.length
  )
  const navigate = useNavigate()

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
    onNav()
  }

  const isLikedSongs = () => station.yt_id === 'THE-CAKE-IS-A-LIE'

  const onNav = () => {
    if (!isLikedSongs()) navigate(`/station/${station._id}`)
    else navigate('collection/tracks')
  }

  return (
    <div
      onClick={() => handleClick(station)}
      data-station-id={station._id}
      className={`side-bar-station-preview ${
        station.createdBy.fullname === 'Artist' ? 'artist' : 'playlist'
      }`}
    >
      <img
        className='sidebar-station-img'
        src={station.createdBy?.imgUrl || stationDefaultUrl}
        alt='img'
      />

      <div className='side-bar-station-preview-info'>
        <h3>{station.name}</h3>
        {isLikedSongs() ? (
          <h4 className='count-line'>
            <span className='liked'>
              <img className='pin-icon' src={pinUrl} alt='' />
              Playlist • {likedSongsCount} song
              {likedSongsCount !== 1 ? 's' : ''}
            </span>
          </h4>
        ) : (
          <h4>{station.createdBy.fullname}</h4>
        )}
      </div>
    </div>
  )
}

SideBarStationPreview.propTypes = {
  station: PropTypes.shape({
    _id: PropTypes.string,
    yt_id: PropTypes.string,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string),
    createdBy: PropTypes.shape({
      imgUrl: PropTypes.string,
      fullname: PropTypes.string,
    }),
    songs: PropTypes.arrayOf(
      PropTypes.shape({
        yt_id: PropTypes.string,
      })
    ),
  }).isRequired,
}
