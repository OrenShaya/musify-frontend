import { useSelector } from 'react-redux'

import { StationDetailsListMobile } from '../cmps/StationDetailsListMobile'

export function StationDetailsMobile() {
  const station = useSelector((s) => s.stationModule.station)

  return (
    <div className='station-details-mobile'>
      <StationDetailsListMobile station={station} />
    </div>
  )
}
