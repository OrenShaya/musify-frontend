import { useSelector } from 'react-redux'
import optionUrl from '../assets/img/dotdotdot.svg'
import { LikeButton } from './LikeButton'
import { toggleLikeSong } from '../store/actions/user.actions'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'

export function StationDetailsRowMobile({ song }) {
  const likedSongs = useSelector(
    (s) => s.userModule.user.likedSongsStation?.songs
  )
  const selectedStation = useSelector((s) => s.stationModule.station)

  const getArtistsDisplay = (song) => {
    return song.artists?.join(', ') ?? 'Artist'
  }
  const isLikedSong = (songId) => {
    return likedSongs?.find((s) => s.yt_id === songId)
  }
  const onLikeSong = (songId, setLikedTo) => {
    toggleLikeSong(songId, setLikedTo)
  }

  const onTogglePlay = () => {
    setCurrentlyPlaying(
      selectedStation,
      selectedStation.songs.find((s) => s.yt_id === song.yt_id).yt_id
    )
    setIsPlaying((prevIsPlaying) => !prevIsPlaying)
  }

  return (
    <div className='station-details-row-mobile' onClick={onTogglePlay}>
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
