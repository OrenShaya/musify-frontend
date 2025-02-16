import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { formatTimeFromSeconds } from '../services/util.service.js'
import { setCurrentlyPlaying } from '../store/actions/player.actions.js'
import { useSelector } from 'react-redux'
import { updateStation } from '../store/actions/station.actions.js'
import greenTick from '../assets/icons/green-tick.svg'

export function StationDetailsList({ station }) {
  function formatDate(unixDate) {
    const date = new Date(unixDate)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('en-US', options)
    return formattedDate
  }

  const songs = useSelector((s) => s.stationModule.station?.songs)

  // Function to handle the drop result
  const handleOnDragEnd = (result) => {
    if (!result.destination) return // Exit if dropped outside the list

    const reorderedItems = Array.from(songs)
    const [movedItem] = reorderedItems.splice(result.source.index, 1)
    reorderedItems.splice(result.destination.index, 0, movedItem)

    updateStation({ ...station, songs: reorderedItems })
  }

  return (
    <section className='station-details-list'>
      <div className='station-table'>
        <div className='song-number'>#</div>
        <div className='song-name'>Title</div>
        <div className='song-album'>Album</div>
        <div className='song-added-date'>Date added</div>
        <div className='song-length-icon'>
          <svg
            data-encore-id='icon'
            role='img'
            aria-hidden='true'
            className='Svg-sc-ytk21e-0 dYnaPI e-9541-icon'
            viewBox='0 0 16 16'
          >
            <path d='M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z'></path>
            <path d='M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z'></path>
          </svg>
        </div>
      </div>
      <hr />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div
              className='station-details-table'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {station?.songs?.length > 0 &&
                station?.songs.map((song, idx) => (
                  <Draggable key={song._id} draggableId={song._id} index={idx}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className='song-row'>
                          <div className='song-index'>{idx + 1}</div>
                          <div
                            className='hover-song-play'
                            onClick={() => setCurrentlyPlaying(song._id)}
                            style={{ cursor: 'pointer' }}
                          >
                            <svg
                              data-encore-id='icon'
                              role='img'
                              aria-hidden='true'
                              className='Svg-sc-ytk21e-0 bneLcE e-9541-icon zOsKPnD_9x3KJqQCSmAq'
                              viewBox='0 0 24 24'
                            >
                              <path d='m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z'></path>
                            </svg>
                          </div>
                          <div className='album-song-artist'>
                            <img className='album-img' src={song?.imgUrl} alt='album image' />
                            <div className='song-title-artist'>
                              <div className='song-title'>{song.title}</div>
                              <div className='artist'>
                                {song.addedBy.fullname}
                              </div>
                            </div>
                          </div>
                          <div className='song-album'>
                            {/* {song.album} needed here */ 'Album Name'}
                          </div>
                          <div className='date-added'>
                            {formatDate(song.addedAt || song.updatedAt)}
                            <img className='add-to-liked' src={greenTick}/>
                          </div>
                          <div className='song-length'>
                            {formatTimeFromSeconds(song?.lengthInSeconds)}
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  )
}
