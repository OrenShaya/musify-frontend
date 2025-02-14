/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStation, addStationMsg } from '../store/actions/station.actions'

export function StationDetailsList({station}) {
  console.log(station?.songs)  
  
  return (
    <section className='station-details-list'>
      <div className='station-table'>
        <div className='song-number'>#</div> 
        <div className='song-name'>Title</div> 
        <div className='song-album'>Album</div> 
        <div className='song-added-date'>Date added</div> 
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
          </div>
        })}
      </div>
    </section>
  )
}
