import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useLoginMutation } from '../../redux/auth'

export default function Login(): JSX.Element {
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  async function tryLogin() {
    const result = await login({
      username: 'eve.holt@reqrs.in',
      password: '',
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result?.data?.token && navigate('/app')
  }

  return (
    <>
      <input type='email' placeholder='Email ID' />
      <input type='password' placeholder='Password' />

      <button onClick={tryLogin}>Login</button>
    </>
  )
}
