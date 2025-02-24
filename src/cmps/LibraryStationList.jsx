import { LibraryStationRow } from './LibraryStationRow'

export function LibraryStationList({ stations }) {
  return (
    <div className='library-station-list-cmp'>
      <ul>
        {stations.map((station) => (
          <li>
            <LibraryStationRow station={station} />
          </li>
        ))}
      </ul>
    </div>
  )
}
