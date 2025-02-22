import homeUrl from '../assets/img/home.svg'
import homeFilledUrl from '../assets/img/home-filled.svg'
import searchUrl from '../assets/img/search.svg'
import searchFilledUrl from '../assets/img/search-filled.svg'
import libraryUrl from '../assets/img/library.svg'
import libraryFilledUrl from '../assets/img/library-filled.svg'
import { useNavigate } from 'react-router'
import { useState } from 'react'

export function AppFooterMobile() {
  return (
    <div className='app-footer-mobile'>
      <section>Playing</section>

      <MobileNavigator />
    </div>
  )
}

function MobileNavigator() {
  const navigate = useNavigate()
  const [page, setPage] = useState('/')

  const icons = [
    { name: 'Home', url: page === '/' ? homeFilledUrl : homeUrl, page: '/' },
    {
      name: 'Search',
      url: page === '/search' ? searchFilledUrl : searchUrl,
      page: '/search',
    },
    {
      name: 'Your Library',
      url: page === '/library' ? libraryFilledUrl : libraryUrl,
      page: '/library',
    },
  ]

  const onNavigate = (icon) => {
    setPage(icon.page)
    navigate(icon.page)
  }

  return (
    <section>
      <ul className='mobile-navigator-list'>
        {icons.map((icon, i) => (
          <li
            key={i}
            className='mobile-navigator-item'
            onClick={() => onNavigate(icon)}
          >
            <div className='icon'>
              <img src={icon.url} alt='' />
            </div>
            <span className='mobile-navigator-item-span'>{icon.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
