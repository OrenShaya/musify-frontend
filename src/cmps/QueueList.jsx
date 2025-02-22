import { useEffect } from 'react'
import { QueuePreview } from './QueuePreview'

/* eslint-disable react/prop-types */
export function QueueList({ currQueue, currPlaying }) {
  useEffect(() => {
    console.log('currQueue', currQueue)
  })
  return (
    <section className='queue-list'>
      {currQueue?.length > 0 && (
        <ul className='queue-songs-list'>
          {currQueue
            .filter((song) => {
              return song?.yt_id !== currPlaying?.yt_id
            })
            .map((song) => {
              return (
                <li className='queue-list-item' key={song?.yt_id}>
                  <QueuePreview currSong={song} />
                </li>
              )
            })}
        </ul>
      )}
    </section>
  )
}
