/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export function StationPreview({ station }) {
  return (
    <article className='preview'>
      <header>
        <Link to={`/station/${station._id}`}>{station.name}</Link>
      </header>

      <pre> {JSON.stringify(station, null, 2)} </pre>
    </article>
  )
}
