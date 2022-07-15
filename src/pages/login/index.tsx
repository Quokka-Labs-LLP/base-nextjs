import React, { useState } from 'react'

import styles from './style'
import { useFirebase } from '../../context'

export interface InputProps {
  // eslint-disable-next-line
  [key: string]: any
}

function Input(props: InputProps): JSX.Element {
  return (
    <>
      <input {...props} />
      {props.error && <label>{props.message}</label>}
    </>
  )
}

export default function LoginPage(): JSX.Element {
  const initialState = {
    email: '',
    password: '',
    // eslint-disable-next-line
    response: {} as any,
  }
  const [formData, setFormData] = useState(initialState)
  const { loginWithEmailAndPassword, logout } = useFirebase({ useEmailAndPassword: true })

  function handleFormData(key: string, value: string) {
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  async function tryLogin() {
    const res = await loginWithEmailAndPassword?.(formData.email, formData.password)
    setFormData({
      ...formData,
      response: res,
    })
  }

  async function tryLogout() {
    await logout?.()
    setFormData(initialState)
  }

  return (
    <div className={styles}>
      <div className='box__container'>
        <div className='inner__box'>
          {!('displayName' in formData.response) ? (
            <>
              <h1>Sign In</h1>
              {/* eslint-disable-next-line */}
              <Input
                type='email'
                placeholder='Email ID'
                // eslint-disable-next-line
                onChange={(e: any) => handleFormData('email', e.target.value)}
              />
              <Input
                type='password'
                placeholder='Password'
                // eslint-disable-next-line
                onChange={(e: any) => handleFormData('password', e.target.value)}
              />

              <div className='bottom__sheet'>
                <div className='material-symbols-outlined' onClick={tryLogin}>
                  <svg xmlns='http://www.w3.org/2000/svg' height='32' width='32' viewBox='0 0 48 48' fill='#fff'>
                    <path d='m30 38-2.1-2.1 10.4-10.4H4v-3h34.3L27.9 12.1 30 10l14 14Z' />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <div>
              <h4>User logged in as:</h4>
              <p>
                <b>Display Name:</b> {formData.response.displayName || '-'}
              </p>
              <p>
                <b>Email:</b> {formData.response.email || '-'}
              </p>

              <button className='btn__logout' onClick={tryLogout}>
                Log Out
              </button>
            </div>
          )}
        </div>
        <p className='version'>v1.0</p>
      </div>
    </div>
  )
}
