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
    code: '',
    email: '',
    password: '',
    phone: '',
    // eslint-disable-next-line
    response: {} as any,
  }
  const [formData, setFormData] = useState(initialState)
  const { loginWithEmailAndPassword, logout, submitPhoneNumber, submitPhoneNumberAuthCode } = useFirebase({
    useEmailAndPassword: true,
    usePhoneNumber: true,
  })

  function handleFormData(key: string, value: string) {
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  async function tryLoginWithEmailAndPassword() {
    const res = await loginWithEmailAndPassword?.(formData.email, formData.password)
    setFormData({
      ...formData,
      response: res,
    })
  }

  async function trySubmithPhoneNumber() {
    console.log('phone: ', formData.phone, typeof submitPhoneNumber)
    // eslint-disable-next-line
    // @ts-ignore
    submitPhoneNumber(formData.phone)
  }

  async function tryLoginWithPhoneNumber() {
    const res = await submitPhoneNumberAuthCode?.(formData.code)
    setFormData({
      ...formData,
      response: {
        // eslint-disable-next-line
        // @ts-ignore
        accessToken: res.user.accessToken,
        // eslint-disable-next-line
        // @ts-ignore
        displayName: res?.user?.displayName,
        // eslint-disable-next-line
        // @ts-ignore
        email: res?.user?.email,
        // eslint-disable-next-line
        // @ts-ignore
        phoneNumber: res?.user?.phoneNumber,
        // eslint-disable-next-line
        // @ts-ignore
        photoUrl: res?.user?.photoURL,
        // eslint-disable-next-line
        // @ts-ignore
        uid: res?.user?.uid,
        // eslint-disable-next-line
        // @ts-ignore
        ...res.user.stsTokenManager,
      },
    })
  }

  async function tryLogout() {
    await logout?.()
    setFormData(initialState)
  }

  return (
    <div className={styles}>
      <div style={{ display: 'flex' }}>
        <div className='box__container'>
          <div className='inner__box'>
            {!('email' in formData.response && formData.response.email) ? (
              <>
                <h2>Sign In With Email/Password</h2>
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
                  <div className='material-symbols-outlined' onClick={tryLoginWithEmailAndPassword}>
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
        <div className='vertical_line'></div>
        <div className='box__container'>
          <div className='inner__box'>
            {!('phoneNumber' in formData.response && formData.response.phoneNumber) ? (
              <>
                <h2>Sign In With Phone Number</h2>
                {/* eslint-disable-next-line */}
                <Input
                  type='text'
                  placeholder='Phone Number'
                  // eslint-disable-next-line
                  onChange={(e: any) => handleFormData('phone', e.target.value)}
                />
                <div className='btn-submit' onClick={trySubmithPhoneNumber}>
                  Submit
                </div>
                <div id='recaptcha-container'></div>
                <Input
                  type='text'
                  placeholder='Code'
                  // eslint-disable-next-line
                  onChange={(e: any) => handleFormData('code', e.target.value)}
                />

                <div className='bottom__sheet'>
                  <div className='material-symbols-outlined' onClick={tryLoginWithPhoneNumber}>
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
                  <b>Phone Number:</b> {formData.response.phoneNumber || '-'}
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
    </div>
  )
}
