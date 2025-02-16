import playBtnUrl from '../assets/img/btn-play.svg'
import pauseBtnUrl from '../assets/img/btn-pause.svg'
import { useToggle } from '../customHooks/useToggle'
import { stationType } from '../types/station.type'
import { setStation } from '../store/actions/station.actions'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'

function PlayButton({ onPlayBubble, initialIsOn = false }) {
  const [isOn, onToggle] = useToggle(initialIsOn)

  const onPlay = (ev) => {
    ev.stopPropagation()
    onToggle()
    onPlayBubble(isOn)
  }

  const buttonUrl = isOn ? pauseBtnUrl : playBtnUrl
  return (
    <button onClick={onPlay} className='play-btn'>
      <img src={buttonUrl} alt='' />
    </button>
  )
}

export function StationPreview({ station }) {
  const { name, createdBy, artists } = station
  const imgUrl = createdBy.imgUrl

  const getArtistsDisplay = () => {
    return artists?.join(', ') ?? 'Artist'
  }

  const onPlay = (playState) => {
    setStation(station)
    setCurrentlyPlaying(station.songs[0]._id)
    // setIsPlaying(playState)
  }

  const imgClass = ['', 'square'][Math.floor(Math.random() * 2)]
  const stationImgClasses = 'index-station-img ' + imgClass
  return (
    <>
      <article className='station-preview'>
        <div className='img-container'>
          <img className={stationImgClasses} src={imgUrl} alt='' />
          <PlayButton onPlayBubble={onPlay} />
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
  station: stationType,
}
