import playBtnUrl from '../assets/img/btn-play.svg'
import pauseBtnUrl from '../assets/img/btn-pause.svg'
import PropTypes from 'prop-types'

export function PlayButton({ isPlaying, togglePlay, className = 'play-btn' }) {
  const onPlay = (ev) => {
    ev.stopPropagation()
    togglePlay()
  }

  const buttonUrl = isPlaying ? pauseBtnUrl : playBtnUrl
  return (
    <button onClick={onPlay} className={className}>
      <img src={buttonUrl} alt='' />
    </button>
  )
}

PlayButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  togglePlay: PropTypes.func.isRequired,
  className: PropTypes.string,
}
