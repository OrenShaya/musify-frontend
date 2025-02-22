/* eslint-disable no-extra-semi */
import { useEffect, useRef, useState } from 'react'
import { Routes, Route } from 'react-router'

import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { AdminIndex } from './pages/AdminIndex.jsx'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { SideBar } from './cmps/SideBar.jsx'
import HiddenReactPlayer from './cmps/HiddenReactPlayer'
import { playerSongEndedEvent } from './store/actions/player.actions.js'

import { Login } from './pages/Login.jsx'
import { StationIndex } from './pages/StationIndex.jsx'
import { StationDetails } from './pages/StationDetails.jsx'
import { StationExplore } from './pages/StationExplore.jsx'

import { login } from './store/actions/user.actions.js'
import { loadStations, setLikedSongs } from './store/actions/station.actions.js'
import {
  SOCKET_EVENT_ADD_SONG,
  socketService,
} from './services/socket.service.js'

import { QueueIndex } from './cmps/QueueIndex.jsx'

export function RootCmp() {
  const playerRef = useRef(null)
  const mainRef = useRef(null)
  const [isQueueOpen, setIsQueueOpen] = useState(false)

  const handleSongEnded = () => {
    playerSongEndedEvent()
  }

  useEffect(() => {
    login({ username: 'guest', password: 'guest' })
  }, [])

  useEffect(() => {
    loadStations()
  }, [])

  return (
    <div
      className={`main-container main-layout ${isQueueOpen && 'queue-open'}`}
    >
      <AppHeader />
      <UserMsg />
      <main style={{ overflowY: 'scroll' }} ref={mainRef}>
        <Routes>
          <Route path='' element={<StationIndex />} />
          <Route path='about' element={<AboutUs />}>
            <Route path='team' element={<AboutTeam />} />
            <Route path='vision' element={<AboutVision />} />
          </Route>

          <Route path='station/:stationId' element={<StationDetails />} />
          <Route path='collection/tracks' element={<StationDetails />} />
          <Route path='explore' element={<StationExplore />} />
          {/* <Route path='search/:searchText' element={<StationSearch />} /> */}

          <Route path='admin' element={<AdminIndex />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </main>
      <SideBar />
      {isQueueOpen && <QueueIndex setIsQueueOpen={setIsQueueOpen} />}
      <HiddenReactPlayer ref={playerRef} onEnded={handleSongEnded} />
      <AppFooter
        playerRef={playerRef}
        isQueueOpen={isQueueOpen}
        setIsQueueOpen={setIsQueueOpen}
      />
    </div>
  )
}
