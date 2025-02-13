import PropTypes from 'prop-types'

export function StationPreview({ station }) {
  const { name, artists, imgUrl } = station

  const getArtistsDisplay = () => {
    return artists.join(', ')
  }

  return (
    <article className='station-preview'>
      <div>
        <img src={imgUrl} alt='' />
      </div>
      <div>
        <span className='artist-name display-block'>{name}</span>
        <span className='artists-description'>{getArtistsDisplay()}</span>
      </div>
      {/* <pre> {JSON.stringify(station, null, 2)} </pre>
      <Link to={`/station/${station._id}`}>{station.name}</Link> */}
    </article>
  )
}

StationPreview.propTypes = {
  station: PropTypes.exact({
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
}
