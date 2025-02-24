import { useSelector } from 'react-redux'
import { LibraryStationList } from '../cmps/LibraryStationList'

export function Library() {
  const stationList = useSelector((s) => s.stationModule.stations)
  return (
    <div className='library-cmp'>
      <LibraryStationList stations={stationList} />
    </div>
  )
}
