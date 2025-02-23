import { QueuePreview } from './QueuePreview'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

/* eslint-disable react/prop-types */
export function QueueList({ currQueue, currPlaying, onReorderQueue }) {
  const filteredQueue =
    currQueue?.filter((song) => song?.yt_id !== currPlaying?.yt_id) || []

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const reordered = Array.from(filteredQueue)
    const [movedItem] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, movedItem)
    onReorderQueue(reordered)
  }

  return (
    <section className='queue-list'>
      {filteredQueue.length > 0 && (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='queueListDroppable'>
            {(provided) => (
              <ul
                className='queue-songs-list'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {filteredQueue.map((song, index) => (
                  <Draggable
                    key={song?.yt_id}
                    draggableId={song?.yt_id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        className='queue-list-item'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <QueuePreview currSong={song} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </section>
  )
}
