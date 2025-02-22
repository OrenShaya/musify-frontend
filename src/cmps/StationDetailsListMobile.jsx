import { StationDetailsRowMobile } from './StationDetailsRowMobile'

export function StationDetailsListMobile({ station }) {
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
