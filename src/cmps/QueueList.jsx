import { QueuePreview } from './QueuePreview'

/* eslint-disable react/prop-types */
export function QueueList({ currQueue, currPlaying }) {
  return (
    <section className='queue-list'>
      {currQueue && (
        <ul className='queue-songs-list'>
          {currQueue
            .filter((song) => {
              return song?.yt_id !== currPlaying?.yt_id
            })
            .map((song) => {
              return (
                <li className='queue-list-item' key={song.yt_id}>
                  <QueuePreview song={song} />
                </li>
              )
            })}
        </ul>
      )}
    </section>
  )
}
