import optionUrl from '../assets/img/dotdotdot.svg'
import greenTickUrl from '../assets/icons/green-tick.svg'

export function StationDetailsRowMobile({ song }) {
  const getArtistsDisplay = (song) => {
    return song.artists?.join(', ') ?? 'Artist'
  }
  return (
    <div className='station-details-row-mobile'>
      {/* Image */}
      <img
        className='station-details-row-mobile-img'
        src={song.imgUrl}
        alt=''
      />

      <div className='station-details-row-mobile-song-details'>
        {/* Song title */}
        <span>{song.title}</span>
        {/* Artist Name */}
        <span className='artist-name'>{getArtistsDisplay(song)}</span>
      </div>

      {/* Options (three dots) */}
      <div className='right-icon-group'>
        <img
          className='station-details-row-mobile-song-heart-icon'
          src={greenTickUrl}
          alt=''
        />
        <img
          className='station-details-row-mobile-song-options-icon'
          src={optionUrl}
          alt=''
        />
      </div>
    </div>
  )
}
