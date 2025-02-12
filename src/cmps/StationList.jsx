/* eslint-disable react/prop-types */
import { userService } from '../services/user'
import { StationPreview } from './StationPreview'

export function StationList({ stations, onRemoveStation, onUpdateStation }) {
  function shouldShowActionBtns(station) {
    const user = userService.getLoggedinUser()

    if (!user) return false
    if (user.isAdmin) return true
    return station.owner?._id === user._id
  }

  return (
    <section>
      <ul className='list'>
        {stations.map((station) => (
          <li key={station._id}>
            <StationPreview station={station} />
            {shouldShowActionBtns(station) && (
              <div className='actions'>
                <button onClick={() => onUpdateStation(station)}>Edit</button>
                <button onClick={() => onRemoveStation(station._id)}>x</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
