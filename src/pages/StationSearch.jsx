import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import {
  getArtist,
  getSong,
  getSongs,
} from '../services/youtube-api.service.js'

export function StationSearch() {
  const { searchText } = useParams()
  const [searchedSongs, setSearchedSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getSearchedSongs(searchText)
  }, [searchText])

  console.log(searchText)

  async function getSearchedSongs(term) {
    if (!term || term === '') return
    try {
      setIsLoading(true)
      const songs = await getSongs(term)
      if (!songs) return

      setSearchedSongs(songs)
    } catch (err) {
      console.error('Unable to search for songs', err)
      setSearchedSongs([]) // Reset songs on error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div>
        <h3>Top results: {searchText}</h3>
      </div>
      <div>
        <h3>Songs</h3>
        <p></p>
        <div className='results-container'>
          {/* {searchedSongs.map((song) => (
            <div key={song.id}>{song.title}</div>
          ))} */}
        </div>
      </div>
    </div>
  )
}
