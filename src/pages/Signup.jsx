import { useEffect } from 'react'
import spotifyLogoUrl from '../assets/img/spotify.svg'
import { SignupForm } from '../cmps/SignupForm'
import { useNavigate } from 'react-router'

export function Signup() {
//   const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Sign up - Musify'

    document.querySelector('main').classList.add('full-page')

    return () => {
      document.querySelector('main').classList.remove('full-page')
    }
  }, [])

  return (
    <div className='login-page'>
      {/* Content */}
      <div className='content-container'>
        <img src={spotifyLogoUrl} alt='' className='spotify-logo' />
        <h1>Sign up to Musify</h1>
        <hr />
        <SignupForm />
      </div>

    </div>
  )
}
