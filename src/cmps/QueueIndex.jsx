/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { QueuePreview } from './QueuePreview'
import { QueueList } from './QueueList'
import exitBtnIcon from '../assets/img/x.svg'
import { updateStation } from '../store/actions/station.actions'
import { useEffect, useRef } from 'react'
import { LoadingWrapper } from './LoadingWrapper'

export function QueueIndex({ setIsQueueOpen }) {
  const currPlaying = useSelector(
    (storeState) => storeState.playerModule.currentlyPlaying
  )
  const currStation = useSelector(
    (storeState) => storeState.stationModule.station
  )

  const originalSongsQueueRef = useRef({})

  useEffect(() => {
    if (currStation && currStation?.songs) {
      const stationId = currStation?._id
      if (!originalSongsQueueRef.current[stationId]) {
        originalSongsQueueRef.current[stationId] = currStation.songs
      }
    }
    return () => {
      if (!originalSongsQueueRef.current[currStation?._id]) {
        handleReorderQueue(originalSongsQueueRef?.current[currStation?._id])
      }
    }
  }, [currStation])

  const handleReorderQueue = async (newOrder) => {
    if (!currStation) return
    const updatedStation = { ...currStation, songs: newOrder }
    try {
      await updateStation(updatedStation)
    } catch (err) {
      console.error('error updating station songs order', err)
    }
  }

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
        <LoadingWrapper />
        {currStation && currStation?.songs?.length > 0 ? (
          <QueueList
            currQueue={currStation.songs}
            currPlaying={currPlaying}
            onReorderQueue={handleReorderQueue}
          />
        ) : (
          <div className='queue-list-container-empty'>No songs in queue</div>
        )}
      </div>
    </section>
  )
}
