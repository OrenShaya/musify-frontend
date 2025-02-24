import { useSelector } from 'react-redux'
import { BallAtomSpinner } from './BallAtomSpinner'

// eslint-disable-next-line react/prop-types
export function LoadingWrapper({ children }) {
  const isLoading = useSelector(
    (storeState) => storeState.systemModule.isLoading
  )

  return !isLoading ? (
    children
  ) : (
    <section className='loading-wrapper'>
      <div>Loading...</div>
      <BallAtomSpinner />{' '}
    </section>
  )
}
