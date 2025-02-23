import PropTypes from 'prop-types'

import { MobileNavigator } from './MobileNavigator'
import { MobilePlayer } from './MobilePlayer'

export function AppFooterMobile({ playerRef }) {
  return (
    <div className='app-footer-mobile'>
      <MobilePlayer playerRef={playerRef} />

      <MobileNavigator />
    </div>
  )
}

AppFooterMobile.propTypes = {
  playerRef: PropTypes.object,
}
