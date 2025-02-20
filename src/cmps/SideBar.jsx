import { useState, useEffect, useRef } from 'react'
import { stationService } from '../services/station/station.service.local'
import { addStation } from '../store/actions/station.actions'
import { SideBarStationPreview } from './SideBarStationPreview'
import stationDefaultUrl from '../assets/icons/station-default-sidebar-img.svg'
import { useNavigate } from 'react-router'

export function SideBar() {
  const addStationRef = useRef()
  const navigate = useNavigate()
  const [stations, setStations] = useState([])
  const PLAYLIST_CONTAINER = useRef(null)

  useEffect(() => {
    // TODO: click outside closes modal
    stationService.query().then(setStations)

    PLAYLIST_CONTAINER.current = document.querySelector(
      '.side-bar-new-playlist-container'
    )

    const elAddStation = addStationRef.current

    const handleClick = () => {
      toggleHiddenClass()
      return
    }

    elAddStation.addEventListener('click', handleClick)

    // Cleanup event listener on component unmount
    return () => {
      elAddStation.removeEventListener('click', handleClick)
    }
  }, [])
  // Removed dependency [stations] because it triggers a render loop

  function toggleHiddenClass() {
    PLAYLIST_CONTAINER.current.classList.toggle('hidden')
  }

  function newPlaylistBtn() {
    const newStation = {
      name: 'New Playlist',
      tags: [],
      createdBy: {
        _id: '',
        fullname: '',
        imgUrl: stationDefaultUrl,
        createdAt: Date.now(),
      },
      likedByUsers: [], // '{minimal-user}'
      songs: [],
      msgs: [],
    }
    addStation(newStation).then((savedStation) => {
      setStations((prevStations) => [savedStation, ...prevStations])
      navigate(`/station/${savedStation._id}`)
    })
  }

  return (
    <aside className='side-bar'>
      <div className='side-bar-header-container'>
        <div className='side-bar-header-container-left'>
          <svg
            className='library-icon'
            xmlns='http://www.w3.org/2000/svg'
            data-encore-id='icon'
            role='img'
            aria-hidden='true'
            viewBox='0 0 24 24'
            height='24px'
            width='24px'
            fill='#b3b3b3'
          >
            <path d='M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z' />
          </svg>
          <h3 className='side-bar-header'>Your Library</h3>
        </div>
        <span
          ref={addStationRef}
          name='Create new playlist'
          className='plus-btn'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            data-encore-id='icon'
            role='img'
            aria-hidden='true'
            className='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
            viewBox='0 0 16 16'
            height='16px'
            width='16px'
          >
            <path d='M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z' />
          </svg>
        </span>

        <ul className='side-bar-new-playlist-container hidden'>
          <button
            onClick={() => {
              newPlaylistBtn()
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              data-encore-id='icon'
              role='img'
              aria-hidden='true'
              className='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
              viewBox='0 0 16 16'
              height='16px'
              width='16px'
            >
              <path d='M2 0v2H0v1.5h2v2h1.5v-2h2V2h-2V0H2zm11.5 2.5H8.244A5.482 5.482 0 0 0 7.966 1H15v11.75A2.75 2.75 0 1 1 12.25 10h1.25V2.5zm0 9h-1.25a1.25 1.25 0 1 0 1.25 1.25V11.5zM4 8.107a5.465 5.465 0 0 0 1.5-.593v5.236A2.75 2.75 0 1 1 2.75 10H4V8.107zM4 11.5H2.75A1.25 1.25 0 1 0 4 12.75V11.5z' />
            </svg>
            Create a new playlist
          </button>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              data-encore-id='icon'
              role='img'
              aria-hidden='true'
              className='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
              viewBox='0 0 16 16'
              height='16px'
              width='16px'
            >
              <path d='M1.75 1A1.75 1.75 0 0 0 0 2.75v11.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0 0 16 14.25v-9.5A1.75 1.75 0 0 0 14.25 3H7.82l-.65-1.125A1.75 1.75 0 0 0 5.655 1H1.75zM1.5 2.75a.25.25 0 0 1 .25-.25h3.905a.25.25 0 0 1 .216.125L6.954 4.5h7.296a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25V2.75z' />
            </svg>
            Create a random playlist
          </button>
        </ul>
      </div>

      <div className='side-bar-sort-container'>
        <span className='sort-item'>Playlists</span>
        <span className='sort-item'>Artists</span>
        <span className='sort-item'>Albums</span>
        <span className='sort-item'>Podcasts&Shows</span>
      </div>

      <div className='side-bar-station-container'>
        <div className='side-bar-search-container'>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='20'
              height='20'
              viewBox='0 0 30 30'
            >
              <path d='M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z'></path>
            </svg>
          </button>
        </div>
        <div className='pinned-stations'></div>
        <div className='regular-stations'>
          {stations
            .slice()
            .reverse()
            .map((station) => (
              <SideBarStationPreview key={station?._id} station={station} />
            ))}
        </div>
      </div>
    </aside>
  )
}
