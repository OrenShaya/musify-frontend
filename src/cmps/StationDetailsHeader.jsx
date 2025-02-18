import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs'

import { formatTimeFromSeconds } from '../services/util.service.js'
import blueTick from '../assets/icons/blue-tick.svg'
import stationDefaultUrl from '../assets/icons/station-default-img.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export function StationDetailsHeader({ station }) {
  const createdBy = station?.createdBy
  const heroImgRef = useRef()
  const [headerColor, setHeaderColor] = useState([0, 0, 0])

  useEffect(() => {
    const img = heroImgRef.current
    const colorThief = new ColorThief()

    const handleImageLoad = async () => {
      if (img && img.complete && !img.src.includes('station-default-img')) {
        const [r, g, b] = await colorThief.getColor(img)
        setHeaderColor(
          `linear-gradient(0deg, rgb(0, 0, 0) 10%, rgb(${r}, ${g}, ${b}) 100%)`
        )
      }
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
  }, [createdBy])

  function songsInfo() {
    let totalSongsLength =
      station?.songs?.reduce((totalSongsLength, song) => {
        return totalSongsLength + song.lengthInSeconds
      }, 0) ?? 0
    totalSongsLength = formatTimeFromSeconds(totalSongsLength)
    let [minutes, seconds] = totalSongsLength.split(':')
    let minutesString = `${minutes} min`
    let secondsString = `${seconds} sec`
    let hoursString = ``

    if (+seconds < 10) secondsString = `${seconds.charAt(1)} sec`
    if (minutes == 0) return secondsString
    if (+minutes > 60) {
      if (+minutes / 60 > 24) return 'over 24 hr'
      hoursString += `${Math.floor(minutes / 60)} hr`
      minutes = +minutes - 60
      minutesString = `${minutes} min`
    }

    return hoursString
      ? `${hoursString} ${minutesString} ${secondsString}`
      : `${minutesString} ${secondsString}`
  }

  const heroImgUrl = createdBy?.imgUrl ?? stationDefaultUrl
  return (
    <section
      className='station-details-header'
      style={{ background: headerColor }}
    >
      {/* Artist image in header */}
      <img
        crossOrigin='anonymous'
        ref={heroImgRef}
        src={heroImgUrl}
        className='station-img'
        alt='playlist img'
      />

      <div className='header-container'>
        <div className='station-type'>Playlist</div>
        <div className='station-name'>{station?.name}</div>
        <div className='user-verified'>
          <h2 className='artist-title'>
            {' '}
            <span className='station-creator-name'>
              {' '}
              {createdBy?.fullname}{' '}
            </span>
            <span className='verified-icon'>
              <img className='verified-icon-img' src={blueTick} />
            </span>
            •{' '}
            <span className='station-total-length'>
              {station?.songs &&
                station?.songs.length +
                  ' song' +
                  (station?.songs.length > 1 ? 's' : '') +
                  ','}{' '}
              {songsInfo()}
            </span>
          </h2>
          <div className='placeholder'> </div>
        </div>
      </div>
    </section>
  )
}
