import defaultImg from '../assets/icons/station-default-sidebar-img.svg'
import defaultUserImg from '../assets/img/profile-avatar.svg'
import { setStation } from '../store/actions/station.actions'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { PlayButton } from './PlayButton'
import {
  setCurrentlyPlaying,
  setIsPlaying,
} from '../store/actions/player.actions'

export function StationDetailsHeaderMobile({ station }) {
  const navigate = useNavigate()
  const playingSong = useSelector((s) => s.playerModule.currentlyPlaying)
  const isSelectedStation = () => {
    return station?.songs?.map((s) => s.yt_id).includes(playingSong?.yt_id)
  }
  const isPlaying = useSelector((s) => s.playerModule.isPlaying)


  const onTogglePlay = () => {
    // debugger
    if (!isSelectedStation()) {
      setStation(station)
      setCurrentlyPlaying(station, station.songs[0].yt_id)

      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className='station-header-mobile'>
      <svg
        onClick={() => navigate('/')}
        data-encore-id='icon'
        width={'24px'}
        height={'24px'}
        role='img'
        aria-hidden='true'
        className='back-arrow'
        viewBox='0 0 24 24'
      >
        <path d='M13.414 3.5a.999.999 0 0 0-1.707-.707l-9.207 9.2 9.207 9.202a1 1 0 1 0 1.414-1.413L6.335 13H20.5a1 1 0 0 0 0-2H6.322l6.799-6.794a.999.999 0 0 0 .293-.707z'></path>
      </svg>
      <div className='station-header-img-mobile'>
        <img src={station?.createdBy.imgUrl || defaultImg} alt='Album image' />
      </div>
      <div className='station-header-name-mobile'>{station?.name}</div>
      <div className='station-header-created-by-mobile'>
        <div className='station-created-by-image-mobile'>
          <img
            src={station?.createdBy.imgUrl || defaultUserImg}
            alt='User image'
          />
        </div>
        <div className='created-by-name-mobile'>
          {station?.createdBy.fullname}
        </div>
      </div>
      <div className='station-detail-buttons-row-mobile'>
        <PlayButton 
        className='station-detail-play-button-mobile'
        togglePlay={onTogglePlay}
        />
        <svg
          data-encore-id='icon'
          fill='white'
          width={'24px'}
          height={'24px'}
          role='img'
          aria-hidden='true'
          className='three-dots-vertical'
          viewBox='0 0 24 24'
        >
          <path d='M10.5 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0 15a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0-7.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z'></path>
        </svg>
      </div>
    </div>
  )
}
