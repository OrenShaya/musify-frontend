/* eslint-disable no-unused-vars */
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
// import { loadStation, addStationMsg } from '../store/actions/station.actions'
import { Logger } from 'sass'
import { formatTimeFromSeconds } from '../services/util.service.js'

export function StationDetailsHeader({station}) {  
  const createdBy = station?.createdBy
  const stationImg = getStationImg(createdBy)

  function songsInfo() {
    let totalSongsLength = station?.songs.reduce((totalSongsLength, song) => {
      return totalSongsLength + song.lengthInSeconds
    }, 0)
    totalSongsLength = formatTimeFromSeconds(totalSongsLength)
    let [minutes, seconds] = totalSongsLength.split(':')   
    let minutesString = `${minutes} min`
    let secondsString = `${seconds} sec`

    if (+seconds < 10) secondsString = `${seconds.charAt(1)} sec`
    if (minutes == 0) return secondsString
    
    return  `${minutesString} ${secondsString}`
  }

  function getStationImg(createdBy) {
    if (createdBy?.imgUrl) return <img src={createdBy.imgUrl} className='station-img' alt='playlist img' />
    return <svg xmlns='http://www.w3.org/2000/svg' data-encore-id='icon' role='img' aria-hidden='true' className='station-img-svg' data-testid='playlist' viewBox='0 0 24 24'><path d='M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z'/></svg>
  }

  return (
    <section className='station-details-header'>
      <div className='station-img'>
        {stationImg}
      </div>
      <div className='header-container'>
        <div className='station-type'>Playlist</div>
        <div className='station-name'>{station?.name}</div>
        <div className='user-verified'>
          <span className='verified-icon'>❄️</span>
          <h2 className='artist-title'>{createdBy?.fullname} • {station?.songs.length + ' song' + ((station?.songs.length > 1) ? 's' : '') + ','} {songsInfo()}</h2>
          <div className='placeholder'> </div>
        </div>
      </div>
    </section>
  )
}
