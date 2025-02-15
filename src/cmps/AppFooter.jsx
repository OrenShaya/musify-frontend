/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
// import LOA7MIX from '../assets/demo-songs/LOA7MIX.wav'
import emblem2 from '../assets/demo-songs/emblem2.png'
import {
  toggleIsPlaying,
  //setCurrentlyPlaying,
  //clearCurrentlyPlaying,
} from '../store/actions/player.actions'
import { formatTimeFromSeconds } from '../services/util.service'

export function AppFooter({ playerRef }) {
  //const count = useSelector((storeState) => storeState.userModule.count)
  const isPlaying = useSelector(
    (storeState) => storeState.playerModule.isPlaying
  )
  const currentlyPlaying = useSelector(
    (storeState) => storeState.playerModule.currentlyPlaying
  )
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)

  // const audioRef = useRef(new Audio(LOA7MIX))
  //const audioRef = useRef(null)
  //const [isHovered, setIsHovered] = useState(false)

  let songInputColor = 'white'

  const togglePlay = () => {
    // const player = audioRef.current?.contentWindow?.audioPlayer
    // if (!player) return

    // console.log('player', player)
    // console.log('isPlaying', isPlaying)

    if (!playerRef.current) return
    if (isPlaying) {
      playerRef.current.pause()
    } else {
      playerRef.current.play()
    }
    toggleIsPlaying()
  }

  // useEffect(() => {
  //   const handleMessage = (event) => {
  //     console.log('useEffect[], handleMessage, event:', event)
  //     //singelton listens to this
  //     if (event.data?.type === 'timeupdate') {
  //       console.log(
  //         'useEffect[], type is timeupdate, currentTime:',
  //         event.data.currentTime
  //       )
  //       setCurrentTime(event.data.currentTime)
  //     }
  //   }

  //   // listeners with cb handleMessage
  //   window.addEventListener('message', handleMessage)
  //   return () => {
  //     window.removeEventListener('message', handleMessage)
  //   }
  // }, [])

  useEffect(() => {
    // poll the player's current time every second
    const interval = setInterval(() => {
      if (playerRef.current) {
        setCurrentTime(playerRef.current.getCurrentTime())
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [playerRef])

  useEffect(() => {
    // const updateCurrentTime = () => {
    //   setCurrentTime(audioRef.current.currentTime)
    // }

    // audioRef.current.addEventListener('timeupdate', updateCurrentTime)

    // audioRef.current.volume = volume

    // return () => {
    //   audioRef.current.removeEventListener('timeupdate', updateCurrentTime)
    // }

    // const player = audioRef.current?.contentWindow?.audioPlayer
    // if (player) {
    //   player.volume = volume
    // }

    if (playerRef.current) {
      playerRef.current.setVolume(volume)
    }
  }, [playerRef, volume])

  const formatTime = (time) => formatTimeFromSeconds(time)

  const handleRangeInput = (input) => {
    const VALUE = ((input.value - input.min) / (input.max - input.min)) * 100

    console.log('handleRangeInput VALUE', VALUE, 'input', input)

    input.style.background = `linear-gradient(90deg, ${songInputColor} ${
      VALUE ? VALUE : 0
    }%, #4d4d4d ${VALUE ? VALUE : 0}%)`
  }

  const handleSlider = (e) => {
    // const player = audioRef.current?.contentWindow?.audioPlayer
    // if (player) {
    //   player.currentTime = e.target.value
    //   handleRangeInput(e.target)
    // }
    if (playerRef.current) {
      playerRef.current.slideTo(e.target.value)
      handleRangeInput(e.target)
    }
  }

  return (
    <footer className='app-footer full'>
      <div className='song-details'>
        <img
          height='70px'
          width='70px'
          src={currentlyPlaying?.imgUrl || emblem2}
          alt='song-cover'
        />
        {/* <span className='song-name-span capitalise'>
          {currentlyPlaying?.title}
        </span> */}
      </div>
      <div className='song-controls'>
        <div className='song-btns'>
          <button className='previous-song-btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              data-encore-id='icon'
              role='img'
              aria-hidden='true'
              className='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
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
              data-encore-id='icon'
              //   role='img'
              aria-hidden='true'
              className='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
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
              className='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
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
            onChange={
              //(e) => {
              // audioRef.current.currentTime = e.target.value
              // handleRangeInput(e.target)
              //}
              handleSlider
            }
            // max={audioRef.current.duration || 0}
            // max={audioRef.current?.contentWindow?.audioPlayer?.duration || 0}
            max={playerRef.current ? playerRef.current.getDuration() : 0}
          />
          <span className='song-duration'>
            {/* {formatTime(audioRef.current.duration)} */}
            {/* {formatTime(
              audioRef.current?.contentWindow?.audioPlayer?.duration || 0
            )} */}
            {formatTime(
              playerRef.current ? playerRef.current.getDuration() : 0
            )}
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
            //audioRef.current.volume = newVolume
            const player = audioRef.current?.contentWindow?.audioPlayer
            if (player) {
              player.volume = newVolume
            }
          }}
          min={0}
          max={100}
        />
      </div>

      {/* hidden iframe, loads the audio player, which instantiates the singleton */}
      <iframe
        ref={audioRef}
        className='hidden'
        src={
          currentlyPlaying?.url || 'https://www.youtube.com/embed/hvL1339luv0'
        }
        title='Audio Player'
      ></iframe>

      {/* {import.meta.env.VITE_LOCAL ? 
                <span className="local-services">Local Services</span> : 
                <span className="remote-services">Remote Services</span>} */}
    </footer>
  )
}
