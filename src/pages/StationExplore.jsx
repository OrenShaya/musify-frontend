/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { StationExploreGrid } from '../cmps/StationExploreGrid'
import { useNavigate } from 'react-router'
import { StationPreviewFiltered } from '../cmps/StationPreviewFiltered'
import { stationService, tagsObj } from '../services/station'
import { useSelector } from 'react-redux'
import { debounce } from '../services/util.service'

// eslint-disable-next-line react/prop-types
export function StationExplore({ searchBarInput }) {
  const [filteredStations, setFilteredStations] = useState(null)
  const [filteredTerm, setFilteredTerm] = useState(null)
  const navigate = useNavigate()
  const searchTerm = useSelector(
    (storeState) => storeState.systemModule.searchTerm
  )

  useEffect(() => {
    document.title = 'Musify - Explore'
  }, [])

  useEffect(() => {
    if (!searchTerm && !filteredTerm) return
    // mini debounce
    const timer = setTimeout(() => {
      getFilteredStations()
    }, 300)
    return () => clearTimeout(timer)
  }, [searchTerm, filteredTerm])

  async function getFilteredStations() {
    try {
      const query = {}
      if (searchTerm) query.name = searchTerm
      if (filteredTerm) query.tags = [filteredTerm]

      const stations = await stationService.query(query)

      setFilteredStations(stations)
    } catch (err) {
      console.error('Cannot get filtered stations', err)
    }
  }

  const onNavigate = (stationId) => {
    navigate('/station/' + stationId)
  }

  let heading = ''
  if (searchTerm && filteredTerm) {
    heading = `Playlists for "${searchTerm}" in Genre "${filteredTerm}"`
  } else if (searchTerm) {
    heading = `Playlists for "${searchTerm}"`
  } else if (filteredTerm) {
    heading = `Playlists for Genre "${filteredTerm}"`
  }

  return (
    <section className='station-explore'>
      {filteredStations && (
        <div className='filtered-stations-section'>
          <h2>{heading}</h2>
          <ul className='station-list-grid'>
            {filteredStations.map((station) => (
              <li
                key={station._id}
                onClick={() => onNavigate(station._id)}
                className='station-item'
              >
                <StationPreviewFiltered station={station} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <StationExploreGrid tagsObj={tagsObj} setFilteredTerm={setFilteredTerm} />
    </section>
  )
}
