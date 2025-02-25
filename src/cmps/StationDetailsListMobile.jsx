import { useEffect } from 'react'
import { StationDetailsRowMobile } from './StationDetailsRowMobile'
import {
  SOCKET_EVENT_UPDATE_STATION,
  socketService,
} from '../services/socket.service'
import { updateStation } from '../store/actions/station.actions'

export function StationDetailsListMobile({ station }) {
  useEffect(() => {
    const _updateStation = (updatedStation) => {
      updateStation(updatedStation)
    }
    socketService.on(SOCKET_EVENT_UPDATE_STATION, _updateStation)

    return () => {
      socketService.off(SOCKET_EVENT_UPDATE_STATION, _updateStation)
    }
  }, [])

  return (
    <div className='station-details-list-mobile'>
      <ul>
        {station?.songs &&
          station.songs.map((song, idx) => (
            <li key={idx}>
              <StationDetailsRowMobile song={song} />
            </li>
          ))}
      </ul>
    </div>
  )
}
