import { useRef } from 'react'
import { stationService } from '../services/station'
import { loadStation } from '../store/actions/station.actions'
import { useSelector } from 'react-redux'

import resetUrl from '../assets/img/x.svg'

export function StationGenerate() {
  const promptRef = useRef()
  const stationId = useSelector((s) => s.stationModule.station?._id)

  const onGenerateStation = async (ev) => {
    ev.preventDefault()
    if (!promptRef.current) return

    const prompt = promptRef.current.value
    if (prompt.length > 126) {
      alert('prompt too long! (max 126 characters)')
      return
    }
    await stationService.generateStation(prompt) // get all songs
    loadStation(stationId)
  }

  return (
    <form className='station-generate-form' action=''>
      <h2 htmlFor=''>Enter prompt (i.e Israeli Pop):</h2>
      <form className='searchbar-container-form' onSubmit={onGenerateStation}>
        <span className='search-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='24'
            height='24'
            fill='#b3b3b3'
            viewBox='0 0 30 30'
          >
            <path d='M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z'></path>
          </svg>
        </span>
        <input
          type='search'
          name='song-search'
          id='song-search'
          placeholder='Describe the playlist you want'
          ref={promptRef}
          autoComplete='off'
        />
        <button type='reset' className='reset-btn'>
          <img className='reset-icon' src={resetUrl} />
        </button>
      </form>
      <div className='user-menu'>
        <button onClick={onGenerateStation}>Generate Playlist</button>
      </div>
    </form>
  )
}
