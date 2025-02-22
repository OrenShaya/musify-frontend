import optionUrl from '../assets/img/dotdotdot.svg'

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
        <span>{getArtistsDisplay(song)}</span>
      </div>

      {/* Options (three dots) */}
      <div>
        <img
          className='station-details-row-mobile-song-options-icon'
          src={optionUrl}
          alt=''
        />
      </div>
    </div>
  )
}
