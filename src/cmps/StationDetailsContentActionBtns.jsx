/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
import { setStation } from '../store/actions/station.actions'
import { PlayButton } from './PlayBtn'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'
import { stationType } from '../types/station.type'

export function StationDetailsActionBtns({ station }) {
  const selectedStationId = useSelector((s) => s.stationModule.station?._id)
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)

  const isSelectedStation = () => selectedStationId === station?._id

  const onTogglePlay = () => {
    if (!isSelectedStation()) {
      setStation(station)
      // TODO: continue playlist, instead of set to first song
      setCurrentlyPlaying(station.songs[0]._id)

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
  station: stationType,
}
