import React, { useState } from 'react'
import './login.style.css'
import logo from '../../assets/clevver-logo.png'
import FormInput from '../form-input/form-input'

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  let { email, password } = state
  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    setState((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div className={'login-wrapper'}>
      <div className={'header text-center'}>
        <div className={'logo-wrapper'}>
          <img alt={'logo'} src={logo} />
        </div>
        <div className={'text-wrapper'}>
          <h3 className={'welcome-heading'}>Welcome</h3>
          <h4 className={'login-heading'}>PLEASE LOG IN</h4>
        </div>
      </div>
      <form className={'login-form'} onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          value={email}
          label={'Email'}
          type={'email'}
          className={'form-control'}
          id={'login-username'}
          aria-describedby="emailHelp"
          placeholder="Enter email"
          name={'email'}
          required={true}
          onChange={(e) => handleChange(e)}
        />
        <FormInput
          value={password}
          label={'Password'}
          type={'password'}
          className={'form-control'}
          id={'login-password'}
          placeholder="Enter Password"
          name={'password'}
          required={true}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="btn btn-primary w-100 text-center button"
        >
          Log In
        </button>
      </form>
      <a
        href={'https://eu.clevver.io/admin/forgot_password'}
        className={'nav-link'}
      >
        I forgot my Password
      </a>
      <div className={'additional-options text-center'}>
        <p>You can also use our Facebook or Google account to login</p>
        <a href={'https://fb.com'} className={'facebook-link nav-link'}>
          facebook link
        </a>
        <a href={'https://google.com'} className={'google-plus-link nav-link'}>
          google link
        </a>
      </div>
    </div>
  )
}
export default Login
