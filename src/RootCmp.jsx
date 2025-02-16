import { useRef } from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { AdminIndex } from './pages/AdminIndex.jsx'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { SideBar } from './cmps/SideBar.jsx'

import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
// import { Signup } from './pages/Signup.jsx'
import { StationIndex } from './pages/StationIndex.jsx'
import { StationDetails } from './pages/StationDetails.jsx'

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
          <Route path='' element={<HomePage />} />
          <Route path='about' element={<AboutUs />}>
            <Route path='team' element={<AboutTeam />} />
            <Route path='vision' element={<AboutVision />} />
          </Route>

          <Route path='station' element={<StationIndex />} />
          <Route path='station/:stationId' element={<StationDetails />} />

          {/* <Route path='car' element={<CarIndex />} /> */}
          {/* <Route path='car/:carId' element={<CarDetails />} /> */}
          {/* <Route path='user/:id' element={<UserDetails />} /> */}
          {/* <Route path='review' element={<ReviewIndex />} /> */}
          {/* <Route path='chat' element={<ChatApp />} /> */}
          <Route path='admin' element={<AdminIndex />} />
          {/* <Route path='login' element={<LoginSignup />}> */}
          <Route path='login' element={<Login />} />
          {/* <Route path='signup' element={<Signup />} /> */}
          {/* </Route> */}
        </Routes>
      </main>
      <aside className='side-bar-container'>
        <SideBar />
      </aside>
      <HiddenReactPlayer ref={playerRef} onEnded={handleSongEnded} />
      <div className='app-footer'>Hello</div>
      <AppFooter playerRef={playerRef} />
    </div>
  )
}
