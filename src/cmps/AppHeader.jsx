import { Link, NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'

import profileUrl from '../assets/img/profile-avatar.svg'
import homeUrl from '../assets/img/home.svg'
import homeFilledUrl from '../assets/img/home-filled.svg'
import browseUrl from '../assets/img/browse.svg'
import browseFilledUrl from '../assets/img/browse-filled.svg'
import resetUrl from '../assets/img/x.svg'
import { useRef } from 'react'

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.user)
  const navigate = useNavigate()
  const location = useLocation()
  const searchbarRef = useRef(null)

  async function onLogout() {
    try {
      await logout()
      navigate('/')
      // showSuccessMsg(`Bye now`)
    } catch (err) {
      showErrorMsg('Cannot logout')
    }
  }

  function resetSearchBar() {
    if (searchbarRef.current) {
      searchbarRef.current.value = ''
    }
  }
  const homeIconUrl = location.pathname === '/' ? homeFilledUrl : homeUrl
  const browserIconUrl =
    location.pathname === '/explore' ? browseFilledUrl : browseUrl

  return (
    <header className='app-header full'>
      <nav>
        <NavLink className='header-logo-link'>
          <svg
            className='logo'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='35'
            height='35'
            viewBox='0,0,256,256'
          >
            <g
              fill='#ffffff'
              fillRule='nonzero'
              stroke='none'
              strokeWidth='1'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='10'
              strokeDasharray=''
              strokeDashoffset='0'
              fontFamily='none'
              fontWeight='none'
              fontSize='none'
              textAnchor='none'
            >
              <g transform='scale(5.12,5.12)'>
                <path d='M25.009,1.982c-12.687,0 -23.009,10.322 -23.009,23.009c0,12.687 10.322,23.009 23.009,23.009c12.687,0 23.009,-10.321 23.009,-23.009c0,-12.688 -10.322,-23.009 -23.009,-23.009zM34.748,35.333c-0.289,0.434 -0.765,0.668 -1.25,0.668c-0.286,0 -0.575,-0.081 -0.831,-0.252c-2.473,-1.649 -6.667,-2.749 -10.167,-2.748c-3.714,0.002 -6.498,0.914 -6.526,0.923c-0.784,0.266 -1.635,-0.162 -1.897,-0.948c-0.262,-0.786 0.163,-1.636 0.949,-1.897c0.132,-0.044 3.279,-1.075 7.474,-1.077c3.5,-0.002 8.368,0.942 11.832,3.251c0.69,0.46 0.876,1.391 0.416,2.08zM37.74,29.193c-0.325,0.522 -0.886,0.809 -1.459,0.809c-0.31,0 -0.624,-0.083 -0.906,-0.26c-4.484,-2.794 -9.092,-3.385 -13.062,-3.35c-4.482,0.04 -8.066,0.895 -8.127,0.913c-0.907,0.258 -1.861,-0.272 -2.12,-1.183c-0.259,-0.913 0.272,-1.862 1.184,-2.12c0.277,-0.079 3.854,-0.959 8.751,-1c4.465,-0.037 10.029,0.61 15.191,3.826c0.803,0.5 1.05,1.56 0.548,2.365zM40.725,22.013c-0.373,0.634 -1.041,0.987 -1.727,0.987c-0.344,0 -0.692,-0.089 -1.011,-0.275c-5.226,-3.068 -11.58,-3.719 -15.99,-3.725c-0.021,0 -0.042,0 -0.063,0c-5.333,0 -9.44,0.938 -9.481,0.948c-1.078,0.247 -2.151,-0.419 -2.401,-1.495c-0.25,-1.075 0.417,-2.149 1.492,-2.4c0.185,-0.043 4.573,-1.053 10.39,-1.053c0.023,0 0.046,0 0.069,0c4.905,0.007 12.011,0.753 18.01,4.275c0.952,0.56 1.271,1.786 0.712,2.738z'></path>
              </g>
            </g>
          </svg>
        </NavLink>

        <div className='nav-links'>
          {/* <NavLink to='about'>About</NavLink> */}

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
        </div>

        <div className='profile-section'>
          {!user && (
            <button className='btn-header-profile'>
              <NavLink to='login'>
                <img className='header-profile-icon' src={profileUrl} alt='' />
              </NavLink>
            </button>
          )}

          {user?.isAdmin && <NavLink to='/admin'>Admin</NavLink>}

          {user && (
            <div className='user-info'>
              <Link to={`user/${user._id}`}>
                {/* {user.imgUrl && <img src={user.imgUrl} />} */}
                {user.fullname}
              </Link>
              <button onClick={onLogout}>logout</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
