import { useSelector } from 'react-redux'
import optionUrl from '../assets/img/dotdotdot.svg'
import { LikeButton } from './LikeButton'
import { toggleLikeSong } from '../store/actions/user.actions'

export function StationDetailsRowMobile({ song }) {
  const likedSongs = useSelector(
    (s) => s.userModule.user.likedSongsStation?.songs
  )
  const getArtistsDisplay = (song) => {
    return song.artists?.join(', ') ?? 'Artist'
  }
  const isLikedSong = (songId) => {
    return likedSongs?.find((s) => s.yt_id === songId)
  }
  const onLikeSong = (songId, setLikedTo) => {
    toggleLikeSong(songId, setLikedTo)
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
        <LikeButton
          song={song}
          isLiked={isLikedSong(song?.yt_id)}
          onLikeSong={onLikeSong}
          classNames={['mobile-footer-icon']}
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
