import { useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import emblem2 from '../assets/demo-songs/emblem2.png'
import {
  setCurrentlyPlaying,
  moveToPreviousSong,
  moveToNextSong,
  setIsPlaying,
} from '../store/actions/player.actions'
import { formatTimeFromSeconds } from '../services/util.service'
import { PlayButton } from './PlayBtn'

export function AppFooter({ playerRef }) {
  const isPlaying = useSelector(
    (storeState) => storeState.playerModule.isPlaying
  )
  const currentlyPlaying = useSelector(
    (storeState) => storeState.playerModule.currentlyPlaying
  )
  const currentStation = useSelector((s) => s.stationModule.station)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const songProgressRef = useRef(null)
  const volumeSliderRef = useRef(null)

  const [isMute, setIsMute] = useState(false)
  const [lastVolume, setLastVolume] = useState(volume)

  let songInputColor = 'white'

  const togglePlay = () => {
    if (!playerRef.current) return

    if (isPlaying) {
      playerRef.current.pause()
      setIsPlaying(false)
    } else {
      playerRef.current.play()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    if (currentStation) setCurrentlyPlaying(currentStation, 'FGBhQbmPwH8')
  }, [])

  useEffect(() => {
    // poll the player's current time every second
    const interval = setInterval(() => {
      if (playerRef.current && isPlaying) {
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
      setCurrentTime(0)
      setIsPlaying(true)
      if (songProgressRef.current) {
        playerRef.current.slideTo(0)
        // handleRangeInput(sliderRef.current)
      }
    }
  }, [currentlyPlaying])

  useEffect(() => {
    if (!playerRef.current) return

    if (isPlaying) {
      playerRef.current.play()
    } else {
      playerRef.current.pause()
    }
  }, [isPlaying, playerRef])

  useEffect(() => {
    setIsMute(volume == 0)
    const slider = volumeSliderRef.current
    if (slider) {
      slider.style.setProperty('--volume-percentage', `${volume * 100}%`)
    }
  }, [volume])

  useEffect(() => {
    const slider = songProgressRef.current
    if (slider) {
      const timeInPrecetage = currentTime / playerRef.current.getDuration() * 100
      slider.style.setProperty('--song-time', `${timeInPrecetage}%`)
    }
  }, [currentTime])

  const formatTime = (time) => formatTimeFromSeconds(time)

  const handleSlider = (e) => {
    e.stopPropagation()
    if (playerRef.current) {
      playerRef.current.slideTo(e.target.value)
      songProgressRef.current.style.setProperty('--song-time', e.target.value)
      // handleRangeInput(e.target)
    }
  }

  function onVolumeChange(e) {
    e.stopPropagation()
    let newVolume = e.target.value / 100
    setVolume(newVolume)
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume)
    }
    setIsMute(() => volume == 0)
  }

  function onMuteVolume(e) {
    e.stopPropagation()
    if (!isMute) {
      setLastVolume(volume)
      setVolume(0)
    } else {
      setVolume(lastVolume)
    }
    setIsMute(!isMute)
  }
  function onMoveToNextSong(e) {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    moveToNextSong()
  }
  function onMoveToPrevSong(e) {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    moveToPreviousSong()
  }

  return (
    <footer className='app-footer full'>
      <div className='song-details-container'>
        <div className='song-details'>
          <img
            height='70px'
            width='70px'
            src={currentlyPlaying?.imgUrl || emblem2}
            alt='song-cover'
          />
          <div className='song-details-spans'>
            <span className='song-name-span capitalise'>
              {currentlyPlaying?.title}
            </span>
            <span className='song-artist-span capitalise'>
              {currentlyPlaying?.addedby?.fullname}
            </span>
          </div>
        </div>
      </div>
      <div className='song-controls'>
        <div className='song-btns'>
          <button
            className='previous-song-btn'
            onClick={(e) => onMoveToPrevSong(e)}
          >
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
          <PlayButton
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            className='footer-play-btn'
          />
          <button className='next-song-btn' onClick={onMoveToNextSong}>
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
          ref={songProgressRef}
          className='song-progress-bar'
          type='range'
          value={currentTime || 0}
          onChange={(e) => handleSlider(e)}
          min={0}
          max={playerRef?.current?.getDuration() || 0}
          />
          {/* <input
            ref={songProgressRef}
            style={{ background: '#4d4d4d' }}
            onMouseEnter={() => (songInputColor = '#1db552')}
            onMouseLeave={() => (songInputColor = 'white')}
            type='range'
            value={currentTime ?? 0}
            onChange={handleSlider}
            max={playerRef.current ? playerRef.current.getDuration() ?? 0 : 0}
          /> */}
          <span className='song-duration'>
            {formatTime(
              playerRef.current ? playerRef.current.getDuration() : 0
            )}
          </span>
        </div>
      </div>
      <div className='volume-control'>
        {isMute ? (
          // muted volume icon
          <svg
            onClick={(e) => onMuteVolume(e)}
            data-encore-id='icon'
            role='presentation'
            aria-label='Volume off'
            aria-hidden='false'
            className='volume-mute-icon'
            id='volume-icon'
            viewBox='0 0 16 16'
          >
            <path d='M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z'></path>
            <path d='M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z'></path>
          </svg>
        ) : (
          // unmuted volume icon
          <svg
            onClick={(e) => onMuteVolume(e)}
            data-encore-id='icon'
            role='presentation'
            aria-label='Volume medium'
            aria-hidden='false'
            className='volume-icon'
            id='volume-icon'
            viewBox='0 0 16 16'
          >
            <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z'></path>
          </svg>
        )}
        <input
          ref={volumeSliderRef}
          className='volume-slider'
          type='range'
          value={volume * 100}
          onChange={(e) => onVolumeChange(e)}
          min={0}
          max={100}
        />
      </div>
    </footer>
  )
}
