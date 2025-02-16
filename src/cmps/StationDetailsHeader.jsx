import { Logger } from 'sass'
import { formatTimeFromSeconds } from '../services/util.service.js'

export function StationDetailsHeader({station}) {  
  const createdBy = station?.createdBy
  const stationImg = getStationImg(createdBy)

  function songsInfo() {
    let totalSongsLength = station?.songs.reduce((totalSongsLength, song) => {
      return totalSongsLength + song.lengthInSeconds
    }, 0)
    totalSongsLength = formatTimeFromSeconds(totalSongsLength)
    let [minutes, seconds] = totalSongsLength.split(':')   
    let minutesString = `${minutes} min`
    let secondsString = `${seconds} sec`
    let hoursString = ``

    if (+seconds < 10) secondsString = `${seconds.charAt(1)} sec`
    if (minutes == 0) return secondsString
    if (+minutes > 60) {     
      if (+minutes / 60 > 24) return 'over 24 hr' 
      hoursString += `${Math.floor(minutes / 60)} hr`
      minutes = +minutes - 60
      minutesString = `${minutes} min`
    }
    
    return (hoursString) ? `${hoursString} ${minutesString} ${secondsString}` : `${minutesString} ${secondsString}`
  }

  function getStationImg(createdBy) {
    if (createdBy?.imgUrl) return <img src={createdBy.imgUrl} className='station-img' alt='playlist img' />
    return (
      <div className='station-img'>
        <svg xmlns='http://www.w3.org/2000/svg' data-encore-id='icon' role='img' aria-hidden='true' className='station-img-svg' data-testid='playlist' viewBox='0 0 24 24'><path d='M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z'/></svg>
      </div>)
  }

  return (
    <section className='station-details-header'>
      {stationImg}
      <div className='header-container'>
        <div className='station-type'>Playlist</div>
        <div className='station-name'>{station?.name}</div>
        <div className='user-verified'>
          <span className='verified-icon'>❄️</span>
          <h2 className='artist-title'>{createdBy?.fullname} • {station?.songs.length + ' song' + ((station?.songs.length > 1) ? 's' : '') + ','} {songsInfo()}</h2>
          <div className='placeholder'> </div>
        </div>
      </div>
    </section>
  )
}
