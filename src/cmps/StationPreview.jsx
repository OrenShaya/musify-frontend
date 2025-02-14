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
  const { name, createdBy, artists } = station
  const imgUrl = createdBy.imgUrl

  const getArtistsDisplay = () => {
    return artists?.join(', ') ?? 'Artist'
  }

  return (
    <>
      <article className='station-preview'>
        <div className='img-container'>
          <img className='index-station-img' src={imgUrl} alt='' />
          <PlayButton />
        </div>
        <div className='txt-container'>
          <span className='artist-name display-block'>{name}</span>
          <span className='artists-description'>{getArtistsDisplay()}</span>
        </div>
      </article>
    </>
  )
}

StationPreview.propTypes = {
  station: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string),
    createdBy: PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
    }),
  }).isRequired,
}
