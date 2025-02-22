/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { StationExploreGrid } from '../cmps/StationExploreGrid'
import { useNavigate } from 'react-router'
import { StationPreviewFiltered } from '../cmps/StationPreviewFiltered'
import { stationService, tagsObj } from '../services/station'

// eslint-disable-next-line react/prop-types
export function StationExplore({ searchBarInput }) {
  const [filteredStations, setFilteredStations] = useState(null)
  const [filteredTerm, setFilteredTerm] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Musify - Explore'
  }, [])

  useEffect(() => {
    if (!filteredTerm) return
    ;(async () => {
      await getFilteredStations()
    })()
  }, [filteredTerm])

  async function getFilteredStations() {
    try {
      const query = {
        name: { searchBarInput },
        tags: [`${filteredTerm}`],
      }
      const stations = await stationService.query(query)

      setFilteredStations(stations)
    } catch (err) {
      console.error('Cannot get filtered stations', err)
    }
  }

  const onNavigate = (stationId) => {
    navigate('/station/' + stationId)
  }

  return (
    <section className='station-explore'>
      {filteredStations && (
        <div className='filtered-stations-section'>
          <h2>
            Playlists of <span>{filteredTerm.toString()}</span>
          </h2>
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
