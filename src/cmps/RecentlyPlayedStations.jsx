import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export function RecentlyPlayedStations() {
  const stations = useSelector((s) => s.stationModule.stations)
  const navigate = useNavigate()
  const recentStations = stations?.slice(0, 8)

  const onNav = (sid) => {
    navigate(`/station/${sid}`)
  }

  return (
    <>
      <ul className='recent-stations-list'>
        {!!recentStations.length &&
          recentStations.map((station) => (
            <li
              key={station._id}
              className='recent-station-item'
              onClick={() => onNav(station._id)}
            >
              <img
                className='recent-image'
                src={station.createdBy.imgUrl}
                alt=''
              />
              <span className='recent-station-name'>{station.name}</span>
            </li>
          ))}
      </ul>
    </>
  )
}
