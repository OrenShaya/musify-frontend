/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStation, addStationMsg } from '../store/actions/station.actions'
import { StationDetailsHeader } from '../cmps/StationDetailsHeader'
import { StationDetailsList } from '../cmps/StationDetailsList'
import { StationDetailsActionBtns } from '../cmps/StationDetailsContentActionBtns'

export function StationDetails() {
  const { stationId } = useParams()
  
  const station = useSelector((storeState) => storeState.stationModule.station)  

  useEffect(() => {
    loadStation(stationId)
  }, [station])

  return (
    <section className='station-details'>
      <StationDetailsHeader station={station}/>
      <StationDetailsActionBtns />
      <StationDetailsList station={station}/>
    </section>
  )
}
