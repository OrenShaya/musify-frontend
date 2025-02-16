import { stationType } from '../types/station.type'
import { setStation } from '../store/actions/station.actions'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'
import { useSelector } from 'react-redux'
import { PlayButton } from './PlayBtn'

export function StationPreview({ station }) {
  const { name, createdBy, artists } = station
  const imgUrl = createdBy.imgUrl
  const selectedStationId = useSelector((s) => s.stationModule.station?._id)
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)

  const getArtistsDisplay = () => {
    return artists?.join(', ') ?? 'Artist'
  }

  const isSelectedStation = () => selectedStationId === station._id
  const onTogglePlay = () => {
    if (!isSelectedStation()) {
      setStation(station)
      setCurrentlyPlaying(station.songs[0]._id)
      setIsPlaying(true)
    }
  }

  const isCurrentlyPlaying = isPlaying && isSelectedStation()
  // const imgClass = ['', 'square'][Math.floor(Math.random() * 2)]
  const stationImgClasses = 'index-station-img '
  return (
    <>
      <article className='station-preview'>
        <div className='img-container'>
          <img className={stationImgClasses} src={imgUrl} alt='' />
          <PlayButton
            togglePlay={onTogglePlay}
            isPlaying={isCurrentlyPlaying}
          />
        </div>
        <div className='txt-container'>
          <span className='artist-name display-block'>{name}</span>
          <span className='artists-description'>{getArtistsDisplay()}</span>
        </div>
      </article>
    </>
  )
}

StationPreview.propTypes = {
  station: stationType.isRequired,
}
