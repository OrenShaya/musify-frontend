import { useNavigate } from 'react-router'

export function LibraryStationRow({ station }) {
  const navigate = useNavigate()

  const onStationClick = () => {
    navigate(`/station/${station._id}`)
  }
  return (
    <div className='library-station-row-cmp' onClick={onStationClick}>
      <div className='image'>
        <img src={station.createdBy.imgUrl} alt='' />
      </div>

      <div className='spans'>
        {/* Album name  */}
        <span>{station.name}</span>
        {/* Artist Name */}
        <span>Artist</span>
      </div>
    </div>
  )
}
