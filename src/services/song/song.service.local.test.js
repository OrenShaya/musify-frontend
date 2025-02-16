// eslint-disable-next-line no-unused-vars
// async function unitTestSongService() {
//   try {
//     console.log('**** Start song service unit test ****')

//     // Query initial songs
//     let songs = await songService.query()
//     console.log('initial songs:', songs, 'songs count:', songs.length)
//     console.log('Expected: an array of songs from demo data')

//     // Add a new song
//     // song object (without _id)
//     const newSong = {
//       title: 'Test Song',
//       url: 'https://youtu.be/testsong',
//       imgUrl: 'https://via.placeholder.com/300',
//       lengthInSeconds: 240,
//       likedBy: [],
//     }

//     // Note: The service uses the active user (via userService.getLoggedinUser()) for addedBy.
//     await userService.login({
//       username: 'admin',
//       password: 'admin',
//     })

//     const addedSong = await songService.save(newSong)
//     console.log('Added song:', addedSong)
//     console.log(
//       'Expected: A new song object with a generated _id, timestamps, and an addedBy field from the active user'
//     )

//     // Update new song (change title)
//     const updatedSongData = { ...addedSong, title: 'Test Song Updated' }
//     const updatedSong = await songService.save(updatedSongData)
//     console.log('updated song:', updatedSong)
//     console.log(
//       'Expected: song object with title "Test Song Updated" and updated updatedAt'
//     )

//     // Retrieve the song by its ID
//     const fetchedSong = await songService.getById(updatedSong._id)
//     console.log('Fetched song by ID:', fetchedSong)
//     console.log(
//       'Expected: same as the updated song object with matching _id and updated title'
//     )

//     // Remove the song
//     await songService.remove(updatedSong._id)
//     console.log('Removed song with _id:', updatedSong._id)
//     console.log('Expected: The song with the _id is removed from storage')

//     // Query songs again to confirm removal
//     songs = await songService.query()
//     console.log('Songs after removal:', songs, 'songs count:', songs.length)
//     console.log(
//       'Expected: the array of songs no longer contains the removed song'
//     )

//     await userService.logout()
//     console.log('**** Song Service Unit Test Completed ****')
//   } catch (err) {
//     console.error('Error during Song Service Unit Test:', err)
//   }
// }

//unitTestSongService()
