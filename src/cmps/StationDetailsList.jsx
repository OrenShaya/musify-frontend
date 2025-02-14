/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStation, addStationMsg } from '../store/actions/station.actions'

export function StationDetailsList(station) {
  return (
    <section className='station-details-list'>
      <div className='station-table'>
        <div className='song-number'>#</div> 
        <div className='song-name'>Title</div> 
        <div className='song-album'>Album</div> 
        <div className='song-added-date'>Date added</div> 
      </div>
      <hr />
    </section>
  )
}
