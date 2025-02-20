/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { StationExploreGrid } from '../cmps/StationExploreGrid'
import { loadStations } from '../store/actions/station.actions'
import { useNavigate } from 'react-router'
import { StationPreviewFiltered } from '../cmps/StationPreviewFiltered'
import { stationService } from '../services/station'

const tagsObj = [
  {
    _id: 't001',
    tagName: 'music',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb',
    bgColor: '#DC148C',
  },
  {
    _id: 't002',
    tagName: 'podcasts',
    imgUrl: 'https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa',
    bgColor: '#006450',
  },
  {
    _id: 't003',
    tagName: 'live events',
    imgUrl:
      'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
    bgColor: '#8400E7',
  },
  {
    _id: 't004',
    tagName: 'made for you',
    imgUrl: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    bgColor: '#1E3264',
  },
  {
    _id: 't005',
    tagName: 'new releases',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf194fec0fdc197fb9e4fe8e64',
    bgColor: '#608108',
  },
  {
    _id: 't006',
    tagName: 'pop',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf66d545e6a69d0bfe8bd1e825',
    bgColor: '#477D95',
  },
  {
    _id: 't007',
    tagName: 'hip-hop',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf5f3752b3234e724f9cd6056f',
    bgColor: '#477D95',
  },
  {
    _id: 't008',
    tagName: 'rock',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafda4c849095796a9e5d2c4ddb',
    bgColor: '#006450',
  },
  {
    _id: 't009',
    tagName: 'latin',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf3a44e7ae3d808c220898185c',
    bgColor: '#0D73EC',
  },
  {
    _id: 't010',
    tagName: 'comedy',
    imgUrl: 'https://i.scdn.co/image/ab6765630000ba8a77d267a5accb8911a92668e1',
    bgColor: '#608108',
  },
  {
    _id: 't011',
    tagName: 'charts',
    imgUrl:
      'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
    bgColor: '#8D67AB',
  },
  {
    _id: 't012',
    tagName: 'dance/electronic',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf26ada793217994216c79dad8',
    bgColor: '#477D95',
  },
  {
    _id: 't013',
    tagName: 'mood',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafe542e9b59b1d2ae04b46b91c',
    bgColor: '#E1118C',
  },
  {
    _id: 't014',
    tagName: 'indie',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa',
    bgColor: '#E91429',
  },
  {
    _id: 't015',
    tagName: 'workout',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf6af6d83c78493644c9b0627b',
    bgColor: '#777777',
  },
  {
    _id: 't016',
    tagName: 'discover',
    imgUrl: 'https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg',
    bgColor: '#8D67AB',
  },
  {
    _id: 't017',
    tagName: 'country',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafd10a5fb6da973e53e9d17ab9',
    bgColor: '#D84000',
  },
  {
    _id: 't018',
    tagName: 'r&b',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caff4e38be86ca48a3b10884ae3',
    bgColor: '#BA5D07',
  },
  {
    _id: 't019',
    tagName: 'k-pop',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf4b42030ee01cf793663dbb73',
    bgColor: '#E61E32',
  },
  {
    _id: 't020',
    tagName: 'chill',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf330ca3a3bfaf8b18407fb33e',
    bgColor: '#B06239',
  },
  {
    _id: 't021',
    tagName: 'sleep',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf1cef0cee1e498abb8e74955f',
    bgColor: '#1E3264',
  },
  {
    _id: 't022',
    tagName: 'party',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf0b0d0bfac454671832311615',
    bgColor: '#8D67AB',
  },
  {
    _id: 't023',
    tagName: 'love',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf21c9a95a2702ce535fb07915',
    bgColor: '#DC148C',
  },
  {
    _id: 't024',
    tagName: 'metal',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafefa737b67ec51ec989f5a51d',
    bgColor: '#8D67AB',
  },
  {
    _id: 't025',
    tagName: 'jazz',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafa1bb187ec2f4606aa7101bad',
    bgColor: '#8D67AB',
  },
  {
    _id: 't026',
    tagName: 'trending',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf8e97784ff1e12e67ae922715',
    bgColor: '#B02897',
  },
  {
    _id: 't027',
    tagName: 'wellness',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafd4a8da930bccd56ebd7e48b0',
    bgColor: '#148A08',
  },
  {
    _id: 't028',
    tagName: 'anime',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafef78c123c1bf7d58c6708e89',
    bgColor: '#0D73EC',
  },
  {
    _id: 't029',
    tagName: 'gaming',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf26dd3719e8824756914ae61f',
    bgColor: '#8D67AB',
  },
  {
    _id: 't030',
    tagName: 'folk & acoustic',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafcc70a3c2e4c71398708bdc4a',
    bgColor: '#BC5900',
  },
  {
    _id: 't031',
    tagName: 'focus',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf9a27506d5dde68b9da373196',
    bgColor: '#A56752',
  },
  {
    _id: 't032',
    tagName: 'soul',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafd82e2c83fe100a89e9cbb2a2',
    bgColor: '#E91429',
  },
  {
    _id: 't033',
    tagName: 'Kids & Family',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafe72590f91baff169b1595ab4',
    bgColor: '#0D73EC',
  },
  {
    _id: 't034',
    tagName: 'classical',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf4597370d1058e1ec3c1a56fa',
    bgColor: '#7D4B32',
  },
  {
    _id: 't035',
    tagName: 'instrumental',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf44774504bdbe31a7bc45598c',
    bgColor: '#0D73EC',
  },
  {
    _id: 't036',
    tagName: 'punk',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf8eebb3e6aa18829dc60f4bc0',
    bgColor: '#E61E32',
  },
  {
    _id: 't037',
    tagName: 'Ambient',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf7d7f89ad0744c51c0f895340',
    bgColor: '#148A08',
  },
  {
    _id: 't038',
    tagName: 'blues',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf53eb5d52ae9152ce8461b387',
    bgColor: '#E61E32',
  },
  {
    _id: 't039',
    tagName: 'cooking & dinning',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafacbcb985978c387411d69e4f',
    bgColor: '#BA5D07',
  },
  {
    _id: 't040',
    tagName: 'alternative',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf106e29a9f294cb4265da6af9',
    bgColor: '#E13300',
  },
  {
    _id: 't041',
    tagName: 'travel',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf879a886d22672d9b5b987746',
    bgColor: '#0D72ED',
  },
  {
    _id: 't042',
    tagName: 'afro',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf73b2872e5a04da17bee68535',
    bgColor: '#8C1932',
  },
  {
    _id: 't043',
    tagName: 'glow',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf50cfe3fbd3a9fb8810da45ea',
    bgColor: '#0D73EC',
  },
  {
    _id: 't044',
    tagName: 'funk & disco',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf3b7919a2cffd1e36647d1c80',
    bgColor: '#BA5D07',
  },
  {
    _id: 't045',
    tagName: 'summer',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf097a46192e6bb67e52cdff60',
    bgColor: '#27856A',
  },
  {
    _id: 't046',
    tagName: 'equal',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf2354ff5d02a9a0935beb94af',
    bgColor: '#148A08',
  },
  {
    _id: 't047',
    tagName: 'radar',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf5b340bd0664da28003741733',
    bgColor: '#A56752',
  },
  {
    _id: 't048',
    tagName: 'fresh finds',
    imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafcc1499bbb8565f490858c2bc',
    bgColor: '#FF0090',
  },
  // {
  //   _id:'t049',
  //   tagName: 'tastemakers',
  //   imgUrl: 'https://t.scdn.co/images/37732285a0ff4e24987cdf5c45bdf31f.png',
  //   bgColor: '#0D73EC',
  // },
]

export function StationExplore() {
  const [filteredStations, setFilteredStations] = useState(null)
  const [filteredTerm, setFilteredTerm] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Musify - Search'
  }, [])

  useEffect(() => {
    if (!filteredTerm) return
    ;(async () => {
      await getFilteredStations()
    })()
  }, [filteredTerm])

  async function getFilteredStations() {
    try {
      const query = {
        name: '',
        tags: [`${filteredTerm}`],
      }
      const stations = await stationService.query(query)

      setFilteredStations(stations)
    } catch (err) {
      console.error('Cannot get filtered stations', err)
    }
  }

  const onNavigate = (stationId) => {
    navigate('/station/' + stationId)
  }

  return (
    <section className='station-explore'>
      {filteredStations && (
        <div className='filtered-stations-section'>
          <h2>
            Playlists of <span>{filteredTerm.toString()}</span>
          </h2>
          <ul className='station-list-grid'>
            {filteredStations.map((station) => (
              <li
                key={station._id}
                onClick={() => onNavigate(station._id)}
                className='station-item'
              >
                <StationPreviewFiltered station={station} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <StationExploreGrid tagsObj={tagsObj} setFilteredTerm={setFilteredTerm} />
    </section>
  )
}
