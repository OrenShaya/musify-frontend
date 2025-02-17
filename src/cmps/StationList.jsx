import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { StationPreview } from './StationPreview'
import { ScrollBtn } from './ScrollBtn'
import { useNavigate } from 'react-router-dom'

export function StationList({ stations, stationHeader, onMount }) {
  const scrollRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    onMount()
  })

  const onNavigate = (stationId) => {
    navigate('/station/' + stationId)
  }

  return (
    <div>
      <h2>{stationHeader}</h2>

      <ul ref={scrollRef} className='station-list'>
        <ScrollBtn isRight={true} scrollRef={scrollRef} />
        <ScrollBtn scrollRef={scrollRef} />
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
  )
}

StationList.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdBy: PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
      }),
    }).isRequired
  ),
  stationHeader: PropTypes.string,
  onMount: PropTypes.func,
}
