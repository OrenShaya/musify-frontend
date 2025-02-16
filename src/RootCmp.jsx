import { useRef } from 'react'
import { Routes, Route } from 'react-router'

import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { AdminIndex } from './pages/AdminIndex.jsx'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { SideBar } from './cmps/SideBar.jsx'

//import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
// import { Signup } from './pages/Signup.jsx'
import { StationIndex } from './pages/StationIndex.jsx'
import { StationDetails } from './pages/StationDetails.jsx'
import { StationExplore } from './pages/StationExplore.jsx'

import {} from './services/station'
import {} from './services/song'
import {} from './services/youtube-api.service.js'

import HiddenReactPlayer from './cmps/HiddenReactPlayer'
import { playerSongEndedEvent } from './store/actions/player.actions.js'

export function RootCmp() {
  const playerRef = useRef(null)
  const handleSongEnded = () => {
    playerSongEndedEvent()
  }

  return (
    <div className='main-container main-layout'>
      <AppHeader />
      <UserMsg />
      <main>
        <Routes>
          <Route path='' element={<StationIndex />} />
          <Route path='about' element={<AboutUs />}>
            <Route path='team' element={<AboutTeam />} />
            <Route path='vision' element={<AboutVision />} />
          </Route>

          <Route path='station/:stationId' element={<StationDetails />} />
          <Route path='explore' element={<StationExplore />} />

          <Route path='admin' element={<AdminIndex />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </main>
      <aside className='side-bar-container'>
        <SideBar />
      </aside>
      <HiddenReactPlayer ref={playerRef} onEnded={handleSongEnded} />
      <AppFooter playerRef={playerRef} />
    </div>
  )
}
