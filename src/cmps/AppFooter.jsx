import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import LOA7MIX from '../assets/demo-songs/LOA7MIX.wav'
import emblem2 from '../assets/demo-songs/emblem2.png'
import { toggleIsPlaying } from '../store/actions/system.actions'

export function AppFooter() {
  const count = useSelector((storeState) => storeState.userModule.count)
  const isPlaying = useSelector(
    (storeState) => storeState.systemModule.isPlaying
  )
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef(new Audio(LOA7MIX))
  const [isHovered, setIsHovered] = useState(false)

  let songInputColor = 'white'

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    toggleIsPlaying()
  }

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(audioRef.current.currentTime)
    }

    audioRef.current.addEventListener('timeupdate', updateCurrentTime)

    audioRef.current.volume = volume

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateCurrentTime)
    }
  }, [volume])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const handleRangeInput = (input) => {
    const VALUE = ((input.value - input.min) / (input.max - input.min)) * 100

    console.log(VALUE)

    input.style.background = `linear-gradient(90deg, ${songInputColor} ${
      VALUE ? VALUE : 0
    }%, #4d4d4d ${VALUE ? VALUE : 0}%)`
  }

  return (
    <footer className='app-footer full'>
      <div className='song-details'>
        <img height='70px' width='70px' src={emblem2} alt='song-cover' />
      </div>
      <div className='song-controls'>
        <div className='song-btns'>
          <button className='previous-song-btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              dataEncoreId='icon'
              role='img'
              ariaHidden='true'
              class='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
              viewBox='0 0 16 16'
              height='16px'
              width='16px'
            >
              <path d='M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z' />
            </svg>
          </button>

          <button className='footer-play-btn' onClick={togglePlay}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              dataEncoreId='icon'
              //   role='img'
              ariaHidden='true'
              class='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
              viewBox='0 0 16 16'
              height='16px'
              width='16px'
            >
              <path
                d={
                  isPlaying
                    ? 'M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z'
                    : 'M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z'
                }
                fill='black'
              />
            </svg>
          </button>

          <button className='next-song-btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              data-encore-id='icon'
              role='img'
              aria-hidden='true'
              class='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
              viewBox='0 0 16 16'
              height='16px'
              width='16px'
            >
              <path d='M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z' />
            </svg>
          </button>
        </div>
        <div className='song-position-bar'>
          <div className='elapsed-time'>
            <span>{formatTime(currentTime)}</span>
          </div>
          <input
            style={{ background: '#4d4d4d' }}
            onMouseEnter={() => (songInputColor = '#1db552')}
            onMouseLeave={() => (songInputColor = 'white')}
            onInput={(e) => handleRangeInput(e.target)}
            type='range'
            value={currentTime}
            onChange={(e) => {
              audioRef.current.currentTime = e.target.value
              handleRangeInput(e.target)
            }}
            max={audioRef.current.duration || 0}
          />
          <span className='song-duration'>
            {formatTime(audioRef.current.duration)}
          </span>
        </div>
      </div>
      <div className='volume-control'>
        <input
          type='range'
          value={volume * 100}
          onChange={(e) => {
            const newVolume = e.target.value / 100
            setVolume(newVolume)
            audioRef.current.volume = newVolume
          }}
          min={0}
          max={100}
        />
      </div>

      {/* {import.meta.env.VITE_LOCAL ? 
                <span className="local-services">Local Services</span> : 
                <span className="remote-services">Remote Services</span>} */}
    </footer>
  )
}
