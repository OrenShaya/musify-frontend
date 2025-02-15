import { forwardRef, useImperativeHandle, useState, useRef } from 'react'
import ReactPlayer from 'react-player'

function HiddenReactPlayer(props, ref) {
  const [url, setUrl] = useState('')
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const playerRef = useRef()

  //  methods to  parent using the ref

  useImperativeHandle(ref, () => ({
    play: () => setPlaying(true),

    pause: () => setPlaying(false),

    slideTo: (seconds) => {
      if (playerRef.current) {
        playerRef.current.seekTo(seconds, 'seconds')
      }
    },

    getCurrentTime: () => {
      return playerRef.current ? playerRef.current.getCurrentTime() : 0
    },

    getDuration: () => {
      return playerRef.current ? playerRef.current.getDuration() : 0
    },

    setVolume: (vol) => {
      setVolume(vol)
    },

    setSource: (newUrl) => {
      setUrl(newUrl)
      // to auto-play on source change:
      setPlaying(true)
    },
  }))

  return (
    /* The "hidden" class should apply to hide element from view */
    <div className='hidden'>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        volume={volume}
        width='0'
        height='0'
        className='hidden'
        // adding props  if needed.
      />
    </div>
  )
}

export default forwardRef(HiddenReactPlayer)

// HiddenReactPlayer.propTypes = {}
