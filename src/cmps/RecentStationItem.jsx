import { useSelector } from 'react-redux'

import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'
import { setStation } from '../store/actions/station.actions'
import { PlayButton } from './PlayButton'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import { useHover } from '../customHooks/useHover'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'
import { useNavigate } from 'react-router'

export function RecentStationItem({ station, setGradientColor }) {
  const selectedStationId = useSelector((s) => s.stationModule.station?._id)
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)
  const isSelectedStation = (station) => selectedStationId === station?._id
  const itemRef = useRef()
  const imgRef = useRef()

  const isHovered = useHover(itemRef)
  const navigate = useNavigate()

  const onNav = (station) => {
    if (station.yt_id !== 'THE-CAKE-IS-A-LIE')
      navigate(`/station/${station._id}`)
    else navigate('collection/tracks')
  }

  const isMobile = document.documentElement.clientWidth <= 480

  useEffectUpdate(() => {}, [isHovered])

  useEffect(() => {
    const img = imgRef.current
    const colorThief = new ColorThief()

    const handleImageLoad = async () => {
      if (!img || !img.complete) return
      const [r, g, b] = await colorThief.getColor(img)
      setGradientColor([r, g, b])
    }

    if (img) {
      img.addEventListener('load', handleImageLoad)
      if (img.complete) {
        handleImageLoad() // Handle cached images
      }
    }

    return () => {
      if (img) {
        img.removeEventListener('load', handleImageLoad)
      }
    }
  }, [isHovered])

  const isCurrentlyPlaying = (station) => {
    return isPlaying && isSelectedStation(station)
  }

  const onTogglePlay = (station) => {
    if (!isSelectedStation(station)) {
      setStation(station)
      setCurrentlyPlaying(station, station.songs[0].yt_id)

      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <li
      className='recent-station-item'
      ref={itemRef}
      onClick={() => onNav(station)}
    >
      <img
        crossOrigin='anonymous'
        ref={imgRef}
        className='recent-image'
        src={station.createdBy.imgUrl}
        alt=''
      />
      <span className='recent-station-name'>{station.name}</span>

      {!isMobile && (
        <PlayButton
          className='btn-play-recent-station'
          togglePlay={() => onTogglePlay(station)}
          isPlaying={isCurrentlyPlaying(station)}
        />
      )}
    </li>
  )
}

RecentStationItem.propTypes = {
  station: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string),
    createdBy: PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
    }),
    songs: PropTypes.arrayOf(
      PropTypes.shape({
        yt_id: PropTypes.string,
      })
    ),
  }).isRequired,
}
