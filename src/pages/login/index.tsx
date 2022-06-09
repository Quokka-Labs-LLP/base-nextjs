import React from 'react'

import { authApi } from '../../redux/auth'

export default function Login(): JSX.Element {
  const [login] = authApi.useLoginMutation()

  async function tryLogin() {
    const response = await login({
      username: '',
      password: '',
    })
  }

  return (
    <div>
      <input type='text' placeholder='Email Id' aria-placeholder='Email Id' />
      <br />
      <input type='password' placeholder='Password' aria-placeholder='Password' />
      <br />

      <button onClick={tryLogin}>Login</button>
    </div>
  )
}
