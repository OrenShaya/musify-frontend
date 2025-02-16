import { loadStation, addStationMsg } from '../store/actions/station.actions'
import { setCurrentlyPlaying } from '../store/actions/player.actions'

export function SideBarStationPreview({ station }) {
  if (!station || !station.songs || station.songs.length === 0) {
    return <div>Loading</div>
  }

  console.log('station', station.songs[0])

  function handleClick(station) {
    console.log('stationId', station.songs[0]._id)
    loadStation(station._id)
      .then(() => {
        // console.log('works')

        if (station.songs[0] && station.songs[0]._id) {
          setCurrentlyPlaying(station.songs[0]._id)
          console.log('works')
        } else {
          console.log('Song ID not found, cannot set currently playing')
        }
      })
      .catch((err) => {
        console.log('Cannot load station', err)
      })
  }

  return (
    // <div>Hello</div>
    <div
      onClick={() => handleClick(station)}
      data-station-id={station._id}
      className={`side-bar-station-preview ${
        station.createdBy.fullname === 'Artist' ? 'artist' : 'playlist'
      }`}
    >
      <img src={station.createdBy.imgUrl} alt='img' />

      <div className='side-bar-station-preview-info'>
        <h3>{station.name}</h3>
        <h4>{station.createdBy.fullname}</h4>
      </div>
    </div>
  )
}
