/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import {
  loadStation,
  addStationMsg,
  setStationLikedSongs,
  getCmdAddStationSong,
} from '../store/actions/station.actions'
import { StationDetailsHeader } from '../cmps/StationDetailsHeader'
import { StationDetailsList } from '../cmps/StationDetailsList'
import { StationDetailsSearch } from '../cmps/StationDetailsSearch'
import { StationDetailsActionBtns } from '../cmps/StationDetailsContentActionBtns'
import { useToggle } from '../customHooks/useToggle'
import { EditStationModal } from '../cmps/EditStationModal'
import { useClientSize } from '../customHooks/useClientSize'
import { StationDetailsMobile } from './StationDetailsMobile'
import { store } from '../store/store'
import {
  SOCKET_EVENT_ADD_SONG,
  socketService,
} from '../services/socket.service'

export function StationDetails() {
  const { stationId } = useParams()
  const location = useLocation()
  const station = useSelector((storeState) => storeState.stationModule.station)
  const user = useSelector((storeState) => storeState.userModule.user)
  const [gradientColor, setGradientColor] = useState([0, 0, 0])
  const [isModalShow, setIsModalShow] = useToggle(false)
  const pageRef = useRef()
  const [width, height] = useClientSize(pageRef)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const MOBILE_WIDTH = 480
    if (width <= MOBILE_WIDTH) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  useEffect(() => {
    const _addSong = ({ song, stationId }) => {
      console.log('res:', song, stationId)
      store.dispatch(getCmdAddStationSong(song, stationId))
    }
    socketService.on(SOCKET_EVENT_ADD_SONG, _addSong)

    return () => {
      socketService.off(SOCKET_EVENT_ADD_SONG, _addSong)
    }
  })

  useEffect(() => {
    if (station) document.title = station.name + ' | Musify'
  }, [station])

  useEffect(() => {
    const regex = new RegExp('^/station.*')
    if (regex.test(location.pathname)) {
      loadStation(stationId)
    } else {
      setStationLikedSongs()
    }
  }, [location.pathname, stationId])

  return (
    <section
      ref={pageRef}
      className='station-details'
      style={{ background: gradientColor }}
    >
      {isMobile ? (
        <StationDetailsMobile />
      ) : (
        <>
          <StationDetailsHeader
            station={station}
            setIsModalShow={setIsModalShow}
            setGradientColor={setGradientColor}
          />
          <StationDetailsActionBtns station={station} />
          <StationDetailsList station={station} />
          {user && user?._id === station?.createdBy?._id && (
            <StationDetailsSearch station={station} />
          )}
          {user && isModalShow && (
            <EditStationModal
              station={station}
              setIsModalShow={setIsModalShow}
            />
          )}
        </>
      )}
    </section>
  )
}
