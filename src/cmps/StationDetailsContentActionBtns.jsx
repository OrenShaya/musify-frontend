/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
import { setStation } from '../store/actions/station.actions'
import { PlayButton } from './PlayButton'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'
import PropTypes from 'prop-types'

export function StationDetailsActionBtns({ station }) {
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)
  const playingSong = useSelector((s) => s.playerModule.currentlyPlaying)

  const isSelectedStation = () => {
    return station.songs?.map((s) => s.yt_id).includes(playingSong.yt_id)
  }

  const onTogglePlay = () => {
    if (!isSelectedStation()) {
      setStation(station)
      // TODO: continue playlist, instead of set to first song
      setCurrentlyPlaying(station.songs[0].yt_id)

      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const isCurrentlyPlaying = isPlaying && isSelectedStation()

  return (
    <section className='station-details-action-btns'>
      <PlayButton
        className='play-button-container'
        togglePlay={onTogglePlay}
        isPlaying={isCurrentlyPlaying}
      />
    </section>
  )
}

StationDetailsActionBtns.propType = {
  station: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string),
    createdBy: PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
    }),
    songs: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
}
