import { useSelector } from 'react-redux'
import { MobileNavigator } from './MobileNavigator'
import { PlayButton } from './PlayButton'
import { setIsPlaying } from '../store/actions/player.actions'
import PropTypes from 'prop-types'
import { LikeButton } from './LikeButton'
import { toggleLikeSong } from '../store/actions/user.actions'
import { useEffect, useState } from 'react'

export function AppFooterMobile({ playerRef }) {
  return (
    <div className='app-footer-mobile'>
      <MobilePlayer playerRef={playerRef} />

      <MobileNavigator />
    </div>
  )
}

function MobilePlayer({ playerRef }) {
  const currentlyPlaying = useSelector(
    (storeState) => storeState.playerModule.currentlyPlaying
  )
  const isPlaying = useSelector(
    (storeState) => storeState.playerModule.isPlaying
  )
  const likedSongs = useSelector(
    (s) => s.userModule.user.likedSongsStation?.songs
  )
  // const currentStation = useSelector((s) => s.stationModule.station)
  // const [currentTime, setCurrentTime] = useState(0)

  // useEffect(() => {
  //   if (currentStation) setCurrentlyPlaying(currentStation, 'FGBhQbmPwH8')
  //   // songProgressRef.current.style.setProperty('--song-time', 0)
  // }, [])

  // useEffect(() => {
  //   // poll the player's current time every second
  //   const interval = setInterval(() => {
  //     if (playerRef.current && isPlaying) {
  //       setCurrentTime(playerRef.current.getCurrentTime())
  //     }
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [isPlaying, playerRef])

  useEffect(() => {
    if (currentlyPlaying && currentlyPlaying.url && playerRef.current) {
      playerRef.current.setSource(
        currentlyPlaying?.url || 'https://www.youtube.com/embed/4fDfbMt6icw'
      )
      setIsPlaying(true)
      // setCurrentTime(0)
      // if (songProgressRef.current) {
      //   playerRef.current.slideTo(0)
      // }
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
        <div>
          {/* Song name */}
          <span>{currentlyPlaying.title}</span>
          {/* Artist name */}
          <span>• {getArtistsDisplay()}</span>
        </div>
        <div></div>
      </div>

      {/* Like button */}
      <LikeButton
        song={currentlyPlaying}
        isLiked={isLikedSong(currentlyPlaying?.yt_id)}
        onLikeSong={onLikeSong}
      />
      {/* Play button */}
      <PlayButton
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        className='footer-play-btn'
      />

      {/* Progress bar */}
      <div className='mobile-progress-bar'></div>
    </section>
  )
}

AppFooterMobile.propTypes = {
  playerRef: PropTypes.object,
}

MobilePlayer.propTypes = {
  playerRef: PropTypes.object,
}
