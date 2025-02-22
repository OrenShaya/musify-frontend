/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { QueuePreview } from './QueuePreview'
import { QueueList } from './QueueList'
import exitBtnIcon from '../assets/img/x.svg'

export function QueueIndex({ setIsQueueOpen }) {
  const currPlaying = useSelector(
    (storeState) => storeState.playerModule.currentlyPlaying
  )
  const currStation = useSelector(
    (storeState) => storeState.stationModule.station
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

      <div className='currently-playing-container'>
        <h2 className='currently-playing-header'>Now playing</h2>
        {currPlaying ? (
          <QueuePreview currSong={currPlaying} />
        ) : (
          <div className='currently-playing-container-empty'>
            No song is playing
          </div>
        )}
      </div>

      <div className='queue-list-container'>
        <h2 className='queue-list-header'>Next up</h2>
        {currStation && currStation?.songs?.length > 0 ? (
          <QueueList currQueue={currStation.songs} currPlaying={currPlaying} />
        ) : (
          <div className='queue-list-container-empty'>No songs in queue</div>
        )}
      </div>
    </section>
  )
}
