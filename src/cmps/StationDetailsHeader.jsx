/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs'

import { formatTimeFromSeconds } from '../services/util.service.js'
import blueTick from '../assets/icons/blue-tick.svg'
import stationDefaultUrl from '../assets/icons/station-default-sidebar-img.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

export function StationDetailsHeader({
  station,
  setIsModalShow,
  setGradientColor,
}) {
  const createdBy = station?.createdBy
  const heroImgRef = useRef()
  const [headerColor, setHeaderColor] = useState([0, 0, 0])
  const [style, setStyle] = useState({ zIndex: -1 })
  const user = useSelector((storeState) => storeState.userModule.user)

  useEffect(() => {
    const img = heroImgRef.current
    const colorThief = new ColorThief()

    const handleImageLoad = async () => {
      if (img && img.complete && !img.src.includes('station-default-img')) {
        const [r, g, b] = await colorThief.getColor(img)
        setGradientColor(
          `linear-gradient(0deg, rgb(0, 0, 0) 10%, rgb(${r}, ${g}, ${b}) 100%)`
        )
        setHeaderColor(`transparent`)
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

  const heroImgUrl = station?.createdBy?.imgUrl ?? stationDefaultUrl

  function openEditModal() {
    if (user?._id !== createdBy?._id) return
    setIsModalShow()
  }

  return (
    <section
      className='station-details-header'
      style={{ background: headerColor }}
    >
      <div
        className='station-img-container'
        onMouseEnter={(e) => {
          setStyle({ zIndex: 2 })
        }}
        onMouseLeave={(e) => {
          setStyle({ zIndex: -1 })
        }}
      >
        {' '}
        {/* Edit station image svg */}
        {user && user?._id === station?.createdBy?._id && (
          <div className='svg-container' style={style} onClick={openEditModal}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              data-encore-id='icon'
              role='img'
              aria-hidden='true'
              className='edit-img-svg'
              viewBox='0 0 24 24'
            >
              <path
                d='M17.318 1.975a3.329 3.329 0 1 1 4.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 0 1-1.28-1.28l1.581-4.376a4.726 4.726 0 0 1 1.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 0 0-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 0 0 1.001-.636L20.611 5.268a1.329 1.329 0 0 0 0-1.879z'
                fill='#ffffff'
              />
            </svg>
            Choose photo
          </div>
        )}
        {/* Artist image in header */}
        <img
          crossOrigin='anonymous'
          ref={heroImgRef}
          src={heroImgUrl}
          className={`station-img ${
            heroImgUrl === stationDefaultUrl ? 'station-default-img' : ''
          }`}
          alt='playlist img'
          style={{
            ...(heroImgUrl === stationDefaultUrl && { padding: '80px' }),
          }}
        />
      </div>

      <div className='header-container'>
        <div className='station-type'>Playlist</div>
        <div className='station-name' onClick={openEditModal}>
          {station?.name}
        </div>
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
            {station?.songs?.length > 0 && (
              <span className='station-total-length'>
                •{' '}
                {station?.songs &&
                  station?.songs.length +
                    ' song' +
                    (station?.songs.length > 1 ? 's' : '') +
                    ','}{' '}
                {songsInfo()}
              </span>
            )}
          </h2>
          <div className='placeholder'> </div>
        </div>
      </div>
    </section>
  )
}
