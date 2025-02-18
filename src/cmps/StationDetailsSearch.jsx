/* eslint-disable no-extra-semi */
/* eslint-disable react/prop-types */
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import {
  debounce,
  formatDate,
  formatTimeFromSeconds,
} from '../services/util.service.js'
import { setCurrentlyPlaying } from '../store/actions/player.actions.js'
import { useSelector } from 'react-redux'
import {
  addStationSong,
  updateStation,
} from '../store/actions/station.actions.js'
import greenTickUrl from '../assets/icons/green-tick.svg'
import addLikedSongUrl from '../assets/img/add-liked-song.svg'
import { useState, useEffect, useRef } from 'react'
import {
  getArtist,
  getSong,
  getSongInfoBrowse,
  getSongs,
} from '../services/youtube-api.service.js'
import { addSongFromYT } from '../services/song/song.service.local.js'

export function StationDetailsSearch({ station }) {
  const [searchTerm, setSearchTerm] = useState('')
  const searchInputRef = useRef(null)
  const setSearchTermDebounce = useRef(debounce(setSearchTerm, 300))
  const [searchedSongs, setSearchedSongs] = useState(null)

  useEffect(() => {
    getSearchedSongs()
  }, [searchTerm])

  async function getSearchedSongs() {
    try {
      const songs = await getSongs(searchInputRef.current.value)
      if (!songs) return

      const miniSongs = songs.map((song) => {
        return getSongInfoBrowse(song)
        // {
        //     id,
        //     songTitle,
        //     songUrl,
        //     imgUrl,
        //     artistTitle,
        //     artistId,
        //     createdAt,
        // }
      })
      setSearchedSongs(miniSongs)
    } catch {
      ;(err) => {
        throw new Error('Unable to search for songs', err)
      }
    }
  }
  async function addSongToStation(songId, artistId) {
    try {
      const ytSong = await getSong(songId)
      if (!ytSong) return
      const artist = await getArtist(artistId)
      if (!artist) return
      const readySong = await addSongFromYT(ytSong, artist)
      if (!readySong) return
      await addStationSong(station._id, readySong)
    } catch {
      ;(err) => {
        throw new Error('Unable to search for songs', err)
      }
    }
  }

  // Function to handle the drop result
  const handleOnDragEnd = (result) => {
    if (!result.destination) return // Exit if dropped outside the list

    const reorderedItems = Array.from(station?.songs)
    const [movedItem] = reorderedItems.splice(result.source.index, 1)
    reorderedItems.splice(result.destination.index, 0, movedItem)

    updateStation({ ...station, songs: reorderedItems })
  }

  return (
    <section className='station-details-search'>
      {/* <div className='station-table'>
        <div className='song-number'>#</div>
        <div className='song-name'>Title</div>
        <div className='song-album-table-head'>Album</div>
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
      <hr /> */}
      <div className='station-details-search-header'>
        <h1>Let&#39;s find something for your playlist</h1>
      </div>
      <form className='searchbar-container-form'>
        <input
          type='search'
          name=''
          id=''
          placeholder='Search for songs or episodes'
          value={searchTerm}
          ref={searchInputRef}
          onChange={setSearchTermDebounce.current}
        />
      </form>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div
              className='search-result-grid'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {searchedSongs?.length > 0 &&
                searchedSongs.map((song, idx) => (
                  <Draggable key={song.id} draggableId={song.id} index={idx}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className='song-row'>
                          <div
                            className='hover-song-play'
                            onClick={() => setCurrentlyPlaying(song.id)}
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
                            <img
                              className='album-img'
                              src={song?.imgUrl}
                              alt='album image'
                            />
                            <div className='song-title-artist'>
                              <div className='song-title'>{song.songTitle}</div>
                              <div className='artist'>{song.artistTitle}</div>
                            </div>
                          </div>
                          <div className='song-album'>
                            {/* {song.album} needed here */ 'Album Name'}
                          </div>

                          <button
                            onClick={addSongToStation(song.id, song.artistId)}
                          >
                            Add
                          </button>
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
