// To quickly create an admin user, uncomment the next line
// _createAdmin()
// async function _createAdmin() {
//   const user = {
//     username: 'admin',
//     password: 'admin',
//     fullname: 'admin adminov',
//     imgUrl:
//       'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
//     isAdmin: true,
//     likedStationIds: [],
//     likedSongIds: [],
//   }

//   const newUser = await storageService.post(STORAGE_KEY_USERS, user)
//   console.log('newUser: ', newUser)
// }

/****************************************************************************** */

// async function unitTestUserService() {
//   try {
//     console.log('**** Starting User Service UT ****')

//     //  Get initial users
//     let users = await userService.getUsers()
//     console.log('initial users:', users)
//     console.log('Expected: demo users array (should contain demo users)')

//     // Signup new user
//     const newUserCred = {
//       username: 'testuser',
//       password: 'testuser',
//       fullname: 'Test User',
//     }
//     const signedUpUser = await userService.signup(newUserCred)
//     console.log('signed up user:', signedUpUser)
//     console.log(
//       'Expected: new user object with username "testuser" and no password'
//     )

//     // Get users again to verify new user
//     users = await userService.getUsers()
//     console.log('users after signup:', users)
//     console.log('Expected: demo users array include new "testuser"')

//     //  Log in loggedInUser with the new user cred
//     const loggedInUser = await userService.login({
//       username: 'testuser',
//       password: 'testuser',
//     })
//     console.log('logged in user:', loggedInUser)
//     console.log('Expected: minimal user object "testuser" from session storage')

//     // Update new user's fullname
//     const updatedUser = await userService.update({
//       _id: signedUpUser._id,
//       fullname: 'User Updated',
//     })
//     console.log('updated user:', updatedUser)
//     console.log(
//       'Expected: user object with fullname changed to "Test User Updated"'
//     )

//     // Retrieve user by ID
//     const userById = await userService.getById(signedUpUser._id)
//     console.log('User fetched by ID:', userById)
//     console.log('Expected: user object matching the updated user details')

//     // Remove user
//     await userService.remove(signedUpUser._id)
//     console.log('removed user id:', signedUpUser._id)
//     console.log(
//       'Expected: user with the provided _id should be removed from storage'
//     )

//     // Get users again to confirm removal
//     users = await userService.getUsers()
//     console.log('Users after removal:', users)
//     console.log('Expected: demo users array that does not include "testuser"')

//     // Logout
//     await userService.logout()
//     const currentUser = userService.getLoggedinUser()
//     console.log('current logged in user after logout:', currentUser)
//     console.log('Expected: null (session storage cleared)')

//     console.log('**** user service unit test completed ****')
//   } catch (err) {
//     console.error('Error user service unit test:', err)
//   }
// }

// unitTestUserService()

/****************************************************************************** */
// async function unitTestUserLikes() {
//   try {
//     console.log('****** Start User Likes UT ******')

//     // login as admin
//     const loggedInUser = await login({ username: 'admin', password: 'admin' })
//     console.log('logged in user:', loggedInUser)

//     // add  songid
//     let updatedUser = await addLikedSongId(loggedInUser._id, 'song_test_1')
//     console.log('after add id "song_test_1":', updatedUser.likedSongIds)
//     console.log('Expected: likedSongIds includes "song_test_1"')

//     // add songid again
//     updatedUser = await addLikedSongId(loggedInUser._id, 'song_test_2')
//     console.log('after add songid "song_test_2":', updatedUser.likedSongIds)
//     console.log(
//       'Expected: likedSongIds includes "song_test_1" and "song_test_2"'
//     )

//     // remove songid
//     updatedUser = await removeLikedSongId(loggedInUser._id, 'song_test_1')
//     console.log(
//       'after removing song id "song_test_1":',
//       updatedUser.likedSongIds
//     )
//     console.log('Expected: likedSongIds only includes "song_test_2"')

//     // remove songid
//     updatedUser = await removeLikedSongId(loggedInUser._id, 'song_test_2')
//     console.log(
//       'after removing song id "song_test_2":',
//       updatedUser.likedSongIds
//     )
//     console.log('Expected: likedSongIds be empty')

//     // add  stationid
//     updatedUser = await addLikedStationId(loggedInUser._id, 'station_test_1')
//     console.log(
//       'After adding station id "station_test_1":',
//       updatedUser.likedStationIds
//     )
//     console.log('Expected: likedStationIds includes "station_test_1"')

//     // temove stationid
//     updatedUser = await removeLikedStationId(loggedInUser._id, 'station_test_1')
//     console.log(
//       'After removing station id "station_test_1":',
//       updatedUser.likedStationIds
//     )
//     console.log('Expected: likedStationIds is empty')

//     await logout()
//     console.log('****** User Likes UT Completed ******')
//   } catch (err) {
//     console.error('Error during User Likes Unit Test:', err)
//   }
// }

// unitTestUserLikes()
