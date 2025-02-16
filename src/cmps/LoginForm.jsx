import { useRef } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'

import errorUrl from '../assets/img/error.svg'
import showPasswordUrl from '../assets/img/show-password.svg'

const TextField = (props) => {
  return <input {...props} ref={props.myref} type='text' spellCheck='false' />
}

const PasswordField = (props) => {
  return <input {...props} ref={props.myref} type='text' />
}

export function LoginForm() {
  const emailFieldRef = useRef()

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email =
              'Please enter your Spotify username or email address.'
            emailFieldRef.current.classList.add('error')
          } else {
            emailFieldRef.current.classList.remove('error')
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className='login-form'>
            <label>Email or Username</label>
            <Field
              myref={emailFieldRef}
              as={TextField}
              type='email'
              name='email'
              placeholder='Email or username'
              className='login-input'
            />
            <ErrorMessage
              name='email'
              render={(msg) => (
                <div className='error-message'>
                  <img src={errorUrl} alt='' className='error-icon' />
                  <span>{msg}</span>
                </div>
              )}
            />
            <div></div>

            <label>Password</label>
            <div className='password-input-container'>
              <Field
                as={PasswordField}
                type='password'
                name='password'
                placeholder='Password'
                className='login-input password-input'
              />
              <button className='btn-show-password'>
                <img src={showPasswordUrl} alt='' />
              </button>
            </div>
            <ErrorMessage name='password' component='div' />
            <div></div>

            <button className='btn-login' type='submit' disabled={isSubmitting}>
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
