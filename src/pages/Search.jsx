import { useSelector } from 'react-redux'
import { StationExplore } from './StationExplore'
import { setSearchTerm, clearSearchTerm } from '../store/actions/system.actions'
import resetUrl from '../assets/img/x-gray.svg'

export function Search() {
  const searchTerm = useSelector(
    (storeState) => storeState.systemModule.searchTerm
  )

  async function resetSearchBar() {
    clearSearchTerm()
  }

  const handleSearchChange = (e) => {
    const newTerm = e.target.value
    setSearchTerm(newTerm)
  }
  return (
    <section className='search-page-cmp'>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <input
          className='search-input'
          type='search'
          placeholder='What do you want to listen to?'
          autoComplete='off'
          value={searchTerm}
          onChange={(e) => handleSearchChange(e)}
        />
        <button
          type='reset'
          className='search-reset-btn'
          onClick={resetSearchBar}
        >
          <img className='search-reset-icon' src={resetUrl} alt='reset' />
        </button>
      </form>
      <StationExplore />
    </section>
  )
}
