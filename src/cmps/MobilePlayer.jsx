import { useSelector } from 'react-redux'
import { PlayButton } from './PlayButton'
import { setIsPlaying } from '../store/actions/player.actions'
import { LikeButton } from './LikeButton'
import { toggleLikeSong } from '../store/actions/user.actions'
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export function MobilePlayer({ playerRef }) {
  const [progress, setProgress] = useState(0)
  const progressRef = useRef()

  const currentlyPlaying = useSelector(
    (storeState) => storeState.playerModule.currentlyPlaying
  )
  const isPlaying = useSelector(
    (storeState) => storeState.playerModule.isPlaying
  )
  const likedSongs = useSelector(
    (s) => s.userModule.user?.likedSongsStation?.songs
  )

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isPlaying])

  useEffect(() => {
    if (!progressRef.current) return
    let progressPercentage = (progress / playerRef.current.getDuration()) * 100
    progressRef.current.style.width = `${progressPercentage}px`
  }, [progress])

  useEffect(() => {
    if (currentlyPlaying && currentlyPlaying.url && playerRef.current) {
      playerRef.current.setSource(
        currentlyPlaying?.url || 'https://www.youtube.com/embed/4fDfbMt6icw'
      )
      setIsPlaying(true)
    }
  }, [currentlyPlaying])

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

  const getArtistsDisplay = () => {
    return currentlyPlaying.artists?.join(', ') ?? 'Artist'
  }

  const isLikedSong = (songId) => {
    return likedSongs?.find((s) => s.yt_id === songId)
  }

  const onLikeSong = (songId, setLikedTo) => {
    toggleLikeSong(songId, setLikedTo)
  }

  if (!currentlyPlaying) return <></>
  return (
    <section className='mobile-player-cmp'>
      {/* Image */}
      <img
        className='mobile-player-image-container'
        src={currentlyPlaying.imgUrl}
        alt=''
      />

      <div className='song-details'>
        <div className='song-name song-name-marquee'>
          {/* Song name */}
          <span className='marquee-inner'>{currentlyPlaying.title}</span>
        </div>
        <div className='artist-name'>
          {/* Artist name */}
          <span>{getArtistsDisplay()}</span>
        </div>
      </div>

      <div className='btn-group center-content'>
        {/* Like button */}
        <LikeButton
          song={currentlyPlaying}
          isLiked={isLikedSong(currentlyPlaying?.yt_id)}
          onLikeSong={onLikeSong}
          classNames={['mobile-footer-icon']}
        />
        {/* Play button */}
        <PlayButton
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          className='footer-play-btn'
        />
      </div>

      {/* Progress bar */}
      <div className='mobile-progress-bar'>
        <div ref={progressRef} className='progressed'></div>
      </div>
    </section>
  )
}

MobilePlayer.propTypes = {
  playerRef: PropTypes.object,
}
