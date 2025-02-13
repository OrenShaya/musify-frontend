import PropTypes from 'prop-types'

import playBtnUrl from '../assets/img/btn-play.svg'

function PlayButton() {
  return (
    <button className='play-btn'>
      <img src={playBtnUrl} alt='' />
    </button>
  )
}

export function StationPreview({ station }) {
  const { name, artists, imgUrl } = station

  const getArtistsDisplay = () => {
    return artists.join(', ')
  }

  return (
    <article className='station-preview'>
      <div>
        <img className='station-img' src={imgUrl} alt='' />
      </div>
      <div>
        <span className='artist-name display-block'>{name}</span>
        <span className='artists-description'>{getArtistsDisplay()}</span>
      </div>
      <PlayButton />
      {/* <pre> {JSON.stringify(station, null, 2)} </pre>
      <Link to={`/station/${station._id}`}>{station.name}</Link> */}
    </article>
  )
}

StationPreview.propTypes = {
  station: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
}
