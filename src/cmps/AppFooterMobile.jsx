import homeUrl from '../assets/img/home.svg'
import searchUrl from '../assets/img/search.svg'
import libraryUrl from '../assets/img/library.svg'

export function AppFooterMobile() {
  return (
    <div className='app-footer-mobile'>
      <section>Playing</section>

      <MobileNavigator />
    </div>
  )
}

function MobileNavigator() {
  const icons = [
    { name: 'Home', url: homeUrl },
    { name: 'Search', url: searchUrl },
    { name: 'Your Library', url: libraryUrl },
  ]

  return (
    <section>
      <ul className='mobile-navigator-list'>
        {icons.map((icon, i) => (
          <li key={i} className='mobile-navigator-item'>
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
