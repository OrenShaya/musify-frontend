import PropTypes from 'prop-types'
import { songType } from './song.type'

export const stationType = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string),
  createdBy: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
  }),
  songs: PropTypes.arrayOf(songType),
}).isRequired
