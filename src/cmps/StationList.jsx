import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { StationPreview } from './StationPreview'
import { ScrollBtn } from './ScrollBtn'

export function StationList({ stations, stationHeader, onMount }) {
  const scrollRef = useRef()

  useEffect(() => {
    onMount()
  })

  return (
    <div>
      <h2>{stationHeader}</h2>

      <ul ref={scrollRef} className='station-list'>
        <ScrollBtn isRight={true} scrollRef={scrollRef} />
        <ScrollBtn scrollRef={scrollRef} />
        {stations.map((station) => (
          // TODO: remove Math.random when using real data
          <li
            className='station-item'
            key={station._id + Math.random() * 11000}
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
