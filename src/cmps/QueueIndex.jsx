/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { QueuePreview } from './QueuePreview'
import { QueueList } from './QueueList'
import exitBtnIcon from '../assets/img/x.svg'

export function QueueIndex({ setIsQueueOpen }) {
  const currPlaying = useSelector(
    (storeState) => storeState.playerModule.currentlyPlaying
  )
  const currQueue = useSelector(
    (storeState) => storeState.stationModule.songsQueue
  )

  return (
    <section className='queue-index'>
      <div className='queue-index-header'>
        <h1 className='queue-heading'>Queue</h1>
        <button className='close-queue-btn'>
          <img
            src={exitBtnIcon}
            alt='close-queue-btn-icon'
            onClick={() => setIsQueueOpen(false)}
          />
        </button>
      </div>
      {currPlaying && (
        <div className='currently-playing-container'>
          <h2 className='currently-playing-header'>Now playing</h2>
          <QueuePreview currSong={currPlaying} />
        </div>
      )}
      <div className='queue-list-container'>
        <h2 className='queue-list-header'>Next up</h2>
        <QueueList currQueue={currQueue} currPlaying={currPlaying} />
      </div>
    </section>
  )
}
