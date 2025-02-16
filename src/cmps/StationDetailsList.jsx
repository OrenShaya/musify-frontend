import { formatTimeFromSeconds } from '../services/util.service.js'
import { setCurrentlyPlaying } from '../store/actions/player.actions.js'

export function StationDetailsList({ station }) {
  function formatDate(unixDate) {
    const date = new Date(unixDate)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('en-US', options)
    return formattedDate
  }

  return (
    <section className='station-details-list'>
      <div className='station-table'>
        <div className='song-number'>#</div>
        <div className='song-name'>Title</div>
        <div className='song-album'>Album</div>
        <div className='song-added-date'>Date added</div>
        <div className='song-length-icon'>
          <svg
            data-encore-id='icon'
            role='img'
            aria-hidden='true'
            className='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
            viewBox='0 0 16 16'
          >
            <path d='M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z'></path>
            <path d='M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z'></path>
          </svg>
        </div>
      </div>
      <hr />
      <div className='station-details-table'>
        {station?.songs?.length > 0 && station?.songs.map((song, idx) => {
          return  <div className='song-row' key={song._id}>
            <div className='song-index'>
              {idx + 1}
            </div>
            <div className='hover-song-play'>
              <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE e-9541-icon zOsKPnD_9x3KJqQCSmAq" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
            </div>
            <div className='album-song-artist'>
              <div className='album-img'
                onClick={() => setCurrentlyPlaying(song._id)}
                style={{ cursor: 'pointer' }}>
                <img src={song?.imgUrl} alt='album image' />
              </div>
              <div className='song-title-artist'>
                <div className='song-title'>
                  {song.title}
                </div>
                <div className='artist'>
                  {song.addedBy.fullname}
                </div>
              </div>
            </div>
            <div className='song-album'>
              {/* {song.album} */ 'Album Name'}
            </div>
            <div>
              {formatDate(song.addedAt || song.updatedAt)}
              {/* {formatDate(song)} */}
            </div>
            <div className='song-length'>
              {formatTimeFromSeconds(song?.lengthInSeconds)}
            </div>
          </div>
        })}
      </div>
    </section>
  )
}
