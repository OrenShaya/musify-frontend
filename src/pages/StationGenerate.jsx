import { useRef } from 'react'
import { stationService } from '../services/station'
import { loadStation } from '../store/actions/station.actions'
import { useSelector } from 'react-redux'

export function StationGenerate() {
  const promptRef = useRef()
  const stationId = useSelector((s) => s.stationModule.station?._id)

  const onGenerateStation = async (ev) => {
    ev.preventDefault()
    if (!promptRef.current) return

    const prompt = promptRef.current.value
    if (prompt.length > 126) {
      alert('prompt too long! (max 126 characters)')
      return
    }
    await stationService.generateStation(prompt) // get all songs
    loadStation(stationId)
  }

  return (
    <form action=''>
      <label htmlFor=''>Enter prompt:</label>
      <input ref={promptRef} type='text' />
      <button onClick={onGenerateStation}>Generate Station</button>
    </form>
  )
}
