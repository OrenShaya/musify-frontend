import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'

import profileUrl from '../assets/img/profile-avatar.svg'
import homeUrl from '../assets/img/home.svg'
import homeFilledUrl from '../assets/img/home-filled.svg'
import browseUrl from '../assets/img/browse.svg'
import browseFilledUrl from '../assets/img/browse-filled.svg'
import spotifyLogoUrl from '../assets/icons/spotify-logo.svg'
import resetUrl from '../assets/img/x.svg'
import { useRef, useState } from 'react'

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.user)
  const navigate = useNavigate()
  const [showUserMenu, setShowUserMenu] = useState(false)

  function onUserClick(ev) {
    setShowUserMenu(!showUserMenu)
  }

  async function onLogout() {
    setShowUserMenu(false)
    try {
      await logout()
      navigate('/')
    } catch (err) {
      showErrorMsg('Cannot logout')
    }
  }

  return (
    <header className='app-header full'>
      <nav>
        {/* Logo */}
        <NavLink className='header-logo-link'>
          <img className='logo' src={spotifyLogoUrl} alt='spotify logo' />
        </NavLink>

        {/* Middle link group */}
        <div className='nav-links'>
          <NavlinkGroup />
        </div>

        {/* Profile \ Log in */}
        <div className='profile-section'>
          <Profile
            user={user}
            showUserMenu={showUserMenu}
            onLogout={onLogout}
            onUserClick={onUserClick}
          />
        </div>
      </nav>
    </header>
  )
}

const Profile = ({ user, showUserMenu, onLogout, onUserClick }) => {
  if (!user)
    return (
      <button className='btn-header-profile'>
        <NavLink to='login'>
          <img className='header-profile-icon' src={profileUrl} alt='' />
        </NavLink>
      </button>
    )
  return (
    <>
      <div className='user-container-div'>
        {showUserMenu && (
          <div className='user-menu'>
            <button onClick={onLogout}>Logout</button>
          </div>
        )}
        <div className='user-info btn-header-profile'>
          {user.imgUrl && <img src={user.imgUrl} onClick={onUserClick} />}
        </div>
      </div>
    </>
  )
}

const NavlinkGroup = () => {
  const location = useLocation()

  const searchbarRef = useRef(null)

  const homeIconUrl = location.pathname === '/' ? homeFilledUrl : homeUrl
  const browserIconUrl =
    location.pathname === '/explore' ? browseFilledUrl : browseUrl

  function resetSearchBar() {
    if (searchbarRef.current) {
      searchbarRef.current.value = ''
    }
  }

  return (
    <>
      <NavLink to='/' className='home-btn'>
        <img className='header-home-icon' src={homeIconUrl} />
      </NavLink>
      <div className='search-container'>
        <span className='search-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='29'
            height='29'
            viewBox='0 0 30 30'
          >
            <path d='M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z'></path>
          </svg>
        </span>
        <input
          className='search-bar'
          type='search'
          ref={searchbarRef}
          placeholder='What do you want to play?'
        />
        <NavLink to='/explore' className='browser-btn'>
          <img className='browser-icon' src={browserIconUrl} />
        </NavLink>
        <button type='reset' className='reset-btn' onClick={resetSearchBar}>
          <img className='reset-icon' src={resetUrl} />
        </button>
      </div>
    </>
  )
}
