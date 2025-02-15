/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import emblem2 from '../assets/demo-songs/emblem2.png'
import {
  toggleIsPlaying,
  setCurrentlyPlaying,
} from '../store/actions/player.actions'
import { formatTimeFromSeconds } from '../services/util.service'

export function AppFooter({ playerRef }) {
  const isPlaying = useSelector(
    (storeState) => storeState.playerModule.isPlaying
  )
  const currentlyPlaying = useSelector(
    (storeState) => storeState.playerModule.currentlyPlaying
  )
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)

  let songInputColor = 'white'

  const togglePlay = () => {
    if (!playerRef.current) return
    console.log('togglePlay playerRef.current', playerRef.current)

    if (isPlaying) {
      playerRef.current.pause()
    } else {
      playerRef.current.play()
    }
    toggleIsPlaying()
  }

  useEffect(() => {
    // default song
    setCurrentlyPlaying('FGBhQbmPwH8')
  }, [])

  useEffect(() => {
    // poll the player's current time every second
    const interval = setInterval(() => {
      if (playerRef.current && isPlaying) {
        console.log(
          'poll the player useEffect playerRef.current',
          playerRef.current
        )

        setCurrentTime(playerRef.current.getCurrentTime())
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [isPlaying, playerRef])

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.setVolume(volume)
    }
  }, [playerRef, volume])

  useEffect(() => {
    if (currentlyPlaying && currentlyPlaying.url && playerRef.current) {
      playerRef.current.setSource(
        currentlyPlaying?.url || 'https://www.youtube.com/embed/4fDfbMt6icw'
      )
    }
  }, [currentlyPlaying, playerRef])

  useEffect(() => {
    if (!playerRef.current) return

    if (isPlaying) {
      playerRef.current.play()
    } else {
      playerRef.current.pause()
    }
  }, [isPlaying, playerRef])

  const formatTime = (time) => formatTimeFromSeconds(time)

  const handleRangeInput = (input) => {
    const VALUE = ((input.value - input.min) / (input.max - input.min)) * 100

    console.log('handleRangeInput VALUE', VALUE, 'input', input)

    input.style.background = `linear-gradient(90deg, ${songInputColor} ${
      VALUE ? VALUE : 0
    }%, #4d4d4d ${VALUE ? VALUE : 0}%)`
  }

  const handleSlider = (e) => {
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
            value={currentTime ?? 0}
            onChange={handleSlider}
            max={playerRef.current ? playerRef.current.getDuration() ?? 0 : 0}
          />
          <span className='song-duration'>
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
            if (playerRef.current) {
              playerRef.current.setVolume(newVolume)
            }
          }}
          min={0}
          max={100}
        />
      </div>
    </footer>
  )
}
