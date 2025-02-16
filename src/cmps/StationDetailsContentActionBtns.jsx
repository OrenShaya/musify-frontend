/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStation, addStationMsg } from '../store/actions/station.actions'

export function StationDetailsActionBtns() {
  return (
    <section className='station-details-action-btns'>
      <div className='play-button-container'>
        <svg data-encore-id='icon' role='img' aria-hidden='true' className='play-button' viewBox='0 0 24 24'><path d='m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z'></path></svg>
      </div>
    </section>
  )
}
