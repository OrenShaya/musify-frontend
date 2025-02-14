/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
// import { loadStation, addStationMsg } from '../store/actions/station.actions'
import { formatTimeFromSeconds } from '../services/util.service.js'

export function StationDetailsList({station}) {
  // console.log(station?.songs[0])  
   

  function formatTime(songLength) {
    if (!station?.lengthInSeconds) return 'no duration found'
    return +formatTimeFromSeconds(songLength)
  }

  useEffect(() => {
    if (!station) return
    console.log(station?.songs[0])
    var songsLength = station.songs.map((song, idx) => {})
  }, [station])
  
  
  return (
    <section className='station-details-list'>
      <div className='station-table'>
        <div className='song-number'>#</div> 
        <div className='song-name'>Title</div> 
        <div className='song-album'>Album</div> 
        <div className='song-added-date'>Date added</div> 
        <div className='song-length'><svg data-encore-id='icon' role='img' aria-hidden='true' className='Svg-sc-ytk21e-0 dYnaPI e-9541-icon' viewBox='0 0 16 16'><path d='M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z'></path><path d='M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z'></path></svg></div> 
      </div>
      <hr />
      <div className='station-details-table'>
        {station?.songs?.length > 0 && station?.songs.map((song, idx) => {
          return  <div className='song-row' key={song._id}>
            <div className='song-index'>
              {idx + 1}
            </div>
            <div className='song-title-artist'>
              {song.title}
              {song.addedBy.fullname}
            </div>
            <div className='song-album'>
              {/* {song.album} */ 'Album Name Here'}
            </div>
            <div>
              {song.addedAt}
            </div>
            <div className='song-length'>
              {formatTime(song.lengthInSeconds) && '0:00'}
            </div>
          </div>
        })}
      </div>
    </section>
  )
}
