import PropTypes from 'prop-types'

export const stationType = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string),
  createdBy: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
  }),
}).isRequired
