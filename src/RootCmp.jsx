import { useEffect, useRef } from 'react'
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
// import { StationSearch } from './pages/StationSearch.jsx'

import { login } from './store/actions/user.actions.js'
import { loadStations, setLikedSongs } from './store/actions/station.actions.js'
import {
  SOCKET_EVENT_ADD_SONG,
  socketService,
} from './services/socket.service.js'

export function RootCmp() {
  const playerRef = useRef(null)
  const mainRef = useRef(null)

  const handleSongEnded = () => {
    playerSongEndedEvent()
  }

  useEffect(() => {
    // Connect default guest
    ;async () => {
      const user = login({ username: 'guest', password: 'guest' })
      socketService.login(user._id)
      socketService.on(SOCKET_EVENT_ADD_SONG, (res) => {
        // TODO: make sure it's receiving
        console.log('res:', res)
      })
    }
  }, [])

  useEffect(() => {
    // Create Liked Songs playlist
    ;(async () => {
      await loadStations()
      setLikedSongs()
    })()
  }, [])

  // useEffect(() => {
  //   if (mainRef.current) {
  //     const mainScrollHeight = mainRef.current.scrollHeight
  //     mainRef.current.style.height = `${mainScrollHeight}px`
  //   }
  // }, [mainRef.current?.scrollHeight])

  return (
    <div className='main-container main-layout'>
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
          <Route path='explore' element={<StationExplore />} />
          {/* <Route path='search/:searchText' element={<StationSearch />} /> */}

          <Route path='admin' element={<AdminIndex />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </main>
      <SideBar />
      <HiddenReactPlayer ref={playerRef} onEnded={handleSongEnded} />
      <AppFooter playerRef={playerRef} />
    </div>
  )
}
