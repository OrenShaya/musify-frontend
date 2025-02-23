import { setStation } from '../store/actions/station.actions'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'
import { useSelector } from 'react-redux'
import { PlayButton } from './PlayButton'
import PropTypes from 'prop-types'

export function StationPreview({ station }) {
  const { name, createdBy, artists } = station
  const imgUrl = createdBy.imgUrl
  const selectedStationId = useSelector((s) => s.stationModule.station?._id)
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)

  const getArtistsDisplay = () => {
    return artists?.join(', ') ?? 'Artist'
  }

  const isSelectedStation = () => selectedStationId === station?._id

  const onTogglePlay = () => {
    if (!isSelectedStation()) {
      setStation(station)
      // TODO: continue playlist, instead of set to first song
      setCurrentlyPlaying(station, station.songs[0].yt_id)

      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const isCurrentlyPlaying = isPlaying && isSelectedStation()
  const imgClass = ['', 'square'][1]
  const stationImgClasses = 'index-station-img ' + imgClass
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
