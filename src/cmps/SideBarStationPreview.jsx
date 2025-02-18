import { loadStation, addStationMsg } from '../store/actions/station.actions'
import { setCurrentlyPlaying } from '../store/actions/player.actions'
import { useNavigate } from 'react-router-dom'
import stationDefaultUrl from '../assets/icons/station-default-img.svg'
import { Link } from 'react-router-dom'

export function SideBarStationPreview({ station }) {
  // if (!station || !station.songs || station.songs.length === 0) {
  if (!station) {
    console.log(station)
    return <div>Loading</div>
  }

  function handleClick(station) {
    loadStation(station._id)
      .then(() => {
        if (station.songs[0] && station.songs[0]._id) {
          setCurrentlyPlaying(station.songs[0]._id)
        } else {
          console.log('Song ID not found, cannot set currently playing')
        }
      })
      .catch((err) => {
        console.log('Cannot load station', err)
      })
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
