import { StationList } from '../cmps/StationList'

import corpoMenteUrl from '../assets/img/station-corpo-mente.jpeg'
import ddtUrl from '../assets/img/station-ddt.jpeg'
import rubyMyDearUrl from '../assets/img/station-ruby-my-dear.jpeg'

export function StationIndex() {
  const stations = [
    {
      id: '1',
      name: 'ДДТ', // Optional
      artists: ['Artist'],
      imgUrl: ddtUrl,
    },
    {
      id: '2',
      name: 'Brame', // Optional
      artists: ['Ruby My Dear'],
      imgUrl: rubyMyDearUrl,
      //   style: 'square',
    },
    {
      id: '3',
      name: 'Corpo-Mente', // Optional
      artists: ['Artist', 'French'],
      imgUrl: corpoMenteUrl,
    },
  ]

  return (
    <div className='station-index'>
      <StationList stations={stations} />
    </div>
  )
}
