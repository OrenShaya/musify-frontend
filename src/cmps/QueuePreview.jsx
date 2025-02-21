/* eslint-disable no-unused-vars */

import { useSelector } from 'react-redux'
import { setCurrentlyPlaying } from '../store/actions/player.actions'

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
            onClick={setCurrentlyPlaying(station, songId)}
          >
            <img src={songImgUrl} alt={`img of ${songName}`} />{' '}
          </div>
          <h3 className='queue-song-title'>{songName}</h3>
          <span className='queue-song-artist'>{artistName}</span>
        </article>
      )}
    </section>
  )
}
