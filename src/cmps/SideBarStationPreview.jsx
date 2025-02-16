export function SideBarStationPreview({ station }) {
  console.log(station)

  return (
    // <div>Hello</div>
    <div
      className={`side-bar-station-preview ${
        station.createdBy.fullname === 'Artist' ? 'artist' : 'playlist'
      }`}
    >
      <img src={station.createdBy.imgUrl} alt='img' />

      <div className='side-bar-station-preview-info'>
        <h3>{station.name}</h3>
        <h4>{station.createdBy.fullname}</h4>
      </div>
    </div>
  )
}
