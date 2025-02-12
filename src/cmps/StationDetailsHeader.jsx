/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStation, addStationMsg } from '../store/actions/station.actions'

export function StationDetailsHeader() {
  return (
    <section className='station-details-header'>
      <div className='header-container'>
        <div className='user-verified'>
          <span className='verified-icon'>❄️</span>
          <span className='verified-artist'>Verified artist</span>
          <h2 className='artist-title'>Artist Title</h2>
          <div className='placeholder'></div>
        </div>
      </div>
    </section>
  )
}
