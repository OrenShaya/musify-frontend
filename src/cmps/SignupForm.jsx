import { useRef } from 'react'
import { signup } from '../store/actions/user.actions'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router'
import errorUrl from '../assets/img/error.svg'
import showPasswordUrl from '../assets/img/show-password.svg'
import { login } from '../store/actions/user.actions'

const TextField = (props) => {
  return <input {...props} ref={props.myref} type='text' spellCheck='false' />
}

const PasswordField = (props) => {
  return <input {...props} ref={props.myref} type='password' />
}

export function SignupForm() {
  const emailFieldRef = useRef()
  const usernameFieldRef = useRef()
  const navigate = useNavigate()

  return (
    <div>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email =
              'Please choose a valid Musify email address.'
            emailFieldRef.current.classList.add('error')
          } else {
            emailFieldRef.current.classList.remove('error')
          }
          if (!values.username) {
            errors.username =
              'Please choose a valid Musify username.'
            usernameFieldRef.current.classList.add('error')
          } else {
            usernameFieldRef.current.classList.remove('error')
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
            setSubmitting(false)        
            signup(values)
                .then((user) => {
                    navigate('/')
                })
                .catch((err) => {
                    setErrors({ email: 'Invalid email address', password: 'Invalid password' })
                    console.log(err)                    
                })
        }}
      >
        {({ isSubmitting }) => (
          <Form className='login-form'>
            <label>Username</label>
            <Field
              myref={usernameFieldRef}
              as={TextField}
              type='text'
              name='username'
              placeholder='username'
              className='login-input'
            />
            <ErrorMessage
              name='username'
              render={(msg) => (
                <div className='error-message'>
                  <img src={errorUrl} alt='' className='error-icon' />
                  <span>{msg}</span>
                </div>
              )}
            />
            <label>Email</label>
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
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
