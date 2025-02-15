import { forwardRef, useImperativeHandle, useState, useRef } from 'react'
import ReactPlayer from 'react-player/youtube'

// eslint-disable-next-line react-refresh/only-export-components
function HiddenReactPlayer(props, ref) {
  const [url, setUrl] = useState('')
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [mute, setMute] = useState(true)
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
      setMute(false)
    },

    setSource: (newUrl) => {
      setUrl(newUrl)
      // to auto-play on source change
      setPlaying(true)
      setMute(false)
    },
  }))

  return (
    /*  "hidden" class  apply to hide element from view */
    <div className='react-player-container hidden'>
      <ReactPlayer
        ref={playerRef}
        id='hidden-react-player'
        url={url}
        playing={playing}
        volume={volume}
        width='1px'
        height='1px'
        onBack
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              mute: mute ? 1 : 0,
              origin: window.location.origin,
            },
          },
        }}
        //className='hidden'
        // adding props if needed.
      />
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(HiddenReactPlayer)

// HiddenReactPlayer.propTypes = {}
