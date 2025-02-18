import { useState, useEffect, useRef } from 'react'
// ... existing code ...

export function SideBar() {
  const [stations, setStations] = useState([])
  const playlistContainerRef = useRef(null) // Create a ref for the playlist container

  useEffect(() => {
    stationService.query().then(setStations)

    playlistContainerRef.current = document.querySelector(
      '.side-bar-new-playlist-container'
    )

    document.addEventListener('click', (ev) => {
      if (ev.target.classList.contains('side-bar-new-playlist-container'))
        return
      if (ev.target.classList.contains('plus-btn')) {
        console.log('plus btn clicked')
        return toggleHiddenClass()
      }
      if (ev.target.classList.contains('e-9541-icon')) {
        console.log('svg btn clicked')
        return toggleHiddenClass()
      }
      if (!playlistContainerRef.current.classList.contains('hidden'))
        return toggleHiddenClass()
      return
    })

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  function toggleHiddenClass() {
    playlistContainerRef.current.classList.toggle('hidden') // Use the ref to access the container
    // console.log('new station clicked')
  }

  // ... existing code ...
}
