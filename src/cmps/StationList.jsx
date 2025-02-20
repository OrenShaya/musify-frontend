import { useRef } from 'react'
import PropTypes from 'prop-types'

import { StationPreview } from './StationPreview'
import { ScrollBtn } from './ScrollBtn'
import { useNavigate } from 'react-router-dom'

export function StationList({ stations, stationHeader }) {
  const scrollRef = useRef()
  const containerRef = useRef()

  const navigate = useNavigate()

  const onNavigate = (stationId) => {
    navigate('/station/' + stationId)
  }

  return (
    <div style={{ position: 'relative' }}>
      <h2>{stationHeader}</h2>
      <div
        ref={containerRef}
        className='station-list-container'
        style={{ position: 'relative' }}
      >
        <ScrollBtn
          isRight={true}
          scrollRef={scrollRef}
          containerRef={containerRef}
        />
        <ScrollBtn scrollRef={scrollRef} containerRef={containerRef} />
        <ul ref={scrollRef} className='station-list'>
          {stations.map((station) => (
            <li
              key={station._id}
              onClick={() => onNavigate(station._id)}
              className='station-item'
            >
              <StationPreview station={station} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

StationList.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdBy: PropTypes.shape({
        imgUrl: PropTypes.string,
      }),
    }).isRequired
  ),
  stationHeader: PropTypes.string,
  onMount: PropTypes.func,
}
