/* eslint-disable react/prop-types */
import { setStation } from '../store/actions/station.actions'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'
import { useSelector } from 'react-redux'
import { PlayButton } from './PlayBtn'
import PropTypes from 'prop-types'

export function StationPreviewFiltered({ station }) {
  const { _id, name, createdBy, songs } = station
  const imgUrl = createdBy?.imgUrl || ''
  const selectedStationId = useSelector((s) => s.stationModule.station?._id)
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)

  const isSelectedStation = () => selectedStationId === _id
  const isCurrentlyPlaying = isPlaying && isSelectedStation()

  const onTogglePlay = () => {
    if (!isSelectedStation()) {
      setStation(station)

      setCurrentlyPlaying(station, songs[0]?.yt_id)

      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const stationImgClasses = 'index-station-img square'
  return (
    <article className='station-preview'>
      <div className='img-container'>
        <img className={stationImgClasses} src={imgUrl} alt='Station Cover' />
        <PlayButton togglePlay={onTogglePlay} isPlaying={isCurrentlyPlaying} />
      </div>
      <div className='txt-container'>
        <span className='artist-name display-block'>
          {name || 'Unknown Station'}
        </span>
      </div>
    </article>
  )
}

StationPreviewFiltered.propTypes = {
  station: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string),
    createdBy: PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
    }),
    songs: PropTypes.arrayOf(PropTypes.shape({ yt_id: PropTypes.string })),
  }).isRequired,
}
