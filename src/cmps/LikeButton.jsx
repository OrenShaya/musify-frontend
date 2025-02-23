import PropTypes from 'prop-types'
import greenTickUrl from '../assets/icons/green-tick.svg'
import addLikedSongUrl from '../assets/img/add-liked-song.svg'

export function LikeButton({ song, isLiked, onLikeSong }) {
  const getClasses = () => {
    const classes = ['add-to-liked']
    if (!isLiked) classes.push('add')

    return classes.join(' ')
  }

  const imgUrl = isLiked ? greenTickUrl : addLikedSongUrl

  return (
    <button
      className='clean-btn'
      onClick={() => onLikeSong(song?.yt_id, !isLiked)}
    >
      <img className={getClasses()} src={imgUrl} />
    </button>
  )
}

LikeButton.propTypes = {
  song: PropTypes.object,
  isLiked: PropTypes.bool,
  onLikeSong: PropTypes.func,
}
