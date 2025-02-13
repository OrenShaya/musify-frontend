import PropTypes from 'prop-types'

import { StationPreview } from './StationPreview'

export function StationList({ stations }) {
  return (
    <div>
      <h2>Jump back in</h2>
      <ul className='station-list'>
        {stations.map((station) => (
          <li key={station.id}>
            <StationPreview station={station} />
          </li>
        ))}
      </ul>
    </div>
  )
}

StationList.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      artists: PropTypes.arrayOf(PropTypes.string).isRequired,
      imgUrl: PropTypes.string.isRequired,
    }).isRequired
  ),
}
