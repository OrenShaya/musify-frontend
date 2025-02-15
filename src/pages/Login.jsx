import { useEffect } from 'react'
import spotifyLogoUrl from '../assets/img/spotify.svg'
import appleLogoUrl from '../assets/img/apple.svg'
import facebookLogoUrl from '../assets/img/facebook.svg'
import googleLogoUrl from '../assets/img/google.svg'
import { LoginForm } from '../cmps/LoginForm'

export function Login() {
  useEffect(() => {
    document.title = 'Log in - Spotify'
  }, [])

  const services2fa = [
    { name: 'Google', icon: googleLogoUrl },
    { name: 'Facebook', icon: facebookLogoUrl },
    { name: 'Apple', icon: appleLogoUrl },
  ]
  console.log('services2fa:', services2fa)
  return (
    <div className='login-page'>
      {/* Content */}
      <div className='content-container'>
        <img src={spotifyLogoUrl} alt='' className='spotify-logo' />
        <h1>Log in to Spotify</h1>
        {/* 2FA */}
        <ul className='list-2fa'>
          {services2fa.map((service) => (
            <li key={service.name}>
              <button className='btn btn-2fa'>
                {<img src={service.icon} alt='' className='icon' />}
                <span>Continue with {service.name}</span>
              </button>
            </li>
          ))}
        </ul>
        <hr />

        <LoginForm />

        {/* Links - forgot password, sign up */}
        <>
          {/* TODO: change a to Link */}
          <a className='forgot-password-link'>Forgot your password?</a>
          <span className='subdue signup'>
            Don&#39;t have an account?
            <a>Sign up for Spotify</a>
          </span>
        </>
      </div>

      {/* Footer */}
    </div>
  )
}
