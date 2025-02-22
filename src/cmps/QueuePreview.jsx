/* eslint-disable no-unused-vars */

import { useSelector } from 'react-redux'
import { setCurrentlyPlaying } from '../store/actions/player.actions'
import btnPlayIcon from '../assets/img/play-btn-white.svg'

/* eslint-disable react/prop-types */
export function QueuePreview({ currSong }) {
  const station = useSelector((s) => s.stationModule.station)

  const songId = currSong?.yt_id
  const songImgUrl = currSong?.imgUrl
  const artistName = currSong?.addedBy?.fullname
  const songName = currSong?.title

  return (
    <section className='queue-preview'>
      {currSong && (
        <article className='queue-preview-article' key={songId}>
          <div
            className='image-container'
            onClick={() => setCurrentlyPlaying(station, songId)}
          >
            <img
              className='queue-song-img'
              src={songImgUrl}
              alt={`img of ${songName}`}
            />
            <img
              className='queue-song-play-icon'
              src={btnPlayIcon}
              alt={`play-icon`}
            />
          </div>
          <div className='queue-song-title-marquee'>
            <h3 className='queue-song-title marquee-inner'>{songName}</h3>
          </div>
          <div className='queue-song-artist-marquee'>
            <span className='queue-song-artist '>{artistName}</span>
          </div>
        </article>
      )}
    </section>
  )
}
