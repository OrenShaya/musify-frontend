import PropTypes from 'prop-types'

// {
//     username: 'admin',
//     password: 'admin',
//     fullname: 'admin',
//     isAdmin: true,
//     likedStationIds: [],
//     likedSongIds: [],
//     imgUrl:
//       'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
//     _id: '3S4c4',
//   },
export const userType = PropTypes.shape({
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  likedStationIds: PropTypes.arrayOf(PropTypes.string),
  likedSongIds: PropTypes.arrayOf(PropTypes.string),
  imgUrl: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
})
