export function SideBar() {
  return (
    <div className='side-bar'>
      <div className='side-bar-header-container'>
        <div className='side-bar-header-container-left'>
          <svg
            className='library-icon'
            xmlns='http://www.w3.org/2000/svg'
            data-encore-id='icon'
            role='img'
            aria-hidden='true'
            class='Svg-sc-ytk21e-0 bneLcE e-9541-icon'
            viewBox='0 0 24 24'
            height='24px'
            width='24px'
            fill='#b3b3b3'
          >
            <path d='M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z' />
          </svg>
          <h3 className='side-bar-header'>Your Library</h3>
        </div>
        <span className='plus-btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            data-encore-id='icon'
            role='img'
            aria-hidden='true'
            class='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
            viewBox='0 0 16 16'
            height='16px'
            width='16px'
          >
            <path d='M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z' />
          </svg>
        </span>
      </div>

      <div className='side-bar-sort-container'>
        <span className='sort-item'>Playlists</span>
        <span className='sort-item'>Artists</span>
        <span className='sort-item'>Albums</span>
        <span className='sort-item'>Podcasts&Shows</span>
      </div>

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

      <div className='side-bar-station-container'>
        <div className='station-preview'></div>
      </div>
    </div>
  )
}
