/* eslint-disable no-extra-semi */
/* eslint-disable react/prop-types */
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { debounce } from '../services/util.service.js'
import { setCurrentlyPlaying } from '../store/actions/player.actions.js'
import {
  addStationSong,
  updateStation,
} from '../store/actions/station.actions.js'
import { useState, useEffect, useRef } from 'react'
import {
  getArtist,
  getSong,
  getSongs,
} from '../services/youtube-api.service.js'
import resetUrl from '../assets/img/x.svg'

import { addSongFromYT } from '../services/song/song.service.local.js'

export function StationDetailsSearch({ station }) {
  const [searchTerm, setSearchTerm] = useState('')

  const [searchedSongs, setSearchedSongs] = useState(null)

  const getSearchedSongsDebounce = useRef(
    debounce((term) => getSearchedSongs(term), 500)
  )

  useEffect(() => {
    getSearchedSongsDebounce.current(searchTerm)
  }, [searchTerm])

  async function addSongAndPlayIt(songId) {
    const song = await getSong(songId)
    if (!song) return

    setCurrentlyPlaying(song._id)
  }

  async function getSearchedSongs(term) {
    if (!term || term === '') return
    try {
      const songs = await getSongs(term)
      if (!songs) return

      setSearchedSongs(songs)
    } catch (err) {
      console.error('Unable to search for songs', err)
    }
  }
  async function addSongToStation(songId, artistId) {
    if (!songId || !artistId) return
    try {
      const ytSong = await getSong(songId)
      if (!ytSong) return

      const artist = await getArtist(artistId)
      if (!artist) return
      const readySong = await addSongFromYT(ytSong, artist)
      if (!readySong) return

      await addStationSong(station._id, readySong)
    } catch (err) {
      console.error('Unable to search for songs', err)
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

  function resetSearchInput() {
    setSearchTerm('')
  }

  return (
    <section className='station-details-search'>
      <hr className='search-divider' />
      <div className='station-details-search-header'>
        <h1>Let&#39;s find something for your playlist</h1>

        <form className='searchbar-container-form'>
          <span className='search-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='24'
              height='24'
              fill='#b3b3b3'
              viewBox='0 0 30 30'
            >
              <path d='M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z'></path>
            </svg>
          </span>
          <input
            type='search'
            name='song-search'
            id='song-search'
            placeholder='Search for songs or episodes'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='reset' className='reset-btn' onClick={resetSearchInput}>
            <img className='reset-icon' src={resetUrl} />
          </button>
        </form>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div
              className='search-result-grid'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {searchedSongs?.length > 0 ? (
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
                            onClick={() => addSongAndPlayIt(song?.id)}
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
                            className='add-song-to-station-btn'
                            onClick={() =>
                              addSongToStation(song?.id, song?.artistId)
                            }
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))
              ) : (
                <div>
                  {searchTerm !== '' || searchTerm !== ' ' ? (
                    <div className='no-results-display'>
                      <h1>
                        No results found for &quot;{searchTerm.toString()}&quot;
                      </h1>
                      <p>
                        Please make sure your words are spelled correctly, or
                        use fewer or different keywords.
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  )
}
