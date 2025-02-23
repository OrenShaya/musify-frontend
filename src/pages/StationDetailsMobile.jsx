import { useSelector } from 'react-redux'

import { StationDetailsHeaderMobile } from '../cmps/StationDetailsHeaderMobile'
import { StationDetailsListMobile } from '../cmps/StationDetailsListMobile'

export function StationDetailsMobile() {
  const station = useSelector((s) => s.stationModule.station)

  return (
    <div className='station-details-mobile'>
      <StationDetailsHeaderMobile station={station} />
      <StationDetailsListMobile station={station} />
    </div>
  )
}
