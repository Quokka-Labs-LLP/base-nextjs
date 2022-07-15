import React, { createContext, SetStateAction, useContext, useEffect, useState } from 'react'
import { initializeApp, FirebaseApp } from 'firebase/app'
import {
  getAuth,
  UserCredential,
  signInWithEmailAndPassword,
  useDeviceLanguage,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from 'firebase/auth'

export interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  databaseURL?: string
  meassuringId?: string
}

export interface Context {
  app: SetStateAction<FirebaseApp> | undefined
  loginWithEmailAndPassword?: (email: string, password: string) => Promise<UserCredential | undefined>
  loginWithPhoneNumber?: (phone: string) => void
  logout?: () => Promise<void>
  submitPhoneNumberAuthCode?: (code: string) => void
}

export interface FirebaseProviderProps extends JSX.IntrinsicAttributes {
  children: JSX.Element
  config: FirebaseConfig
}

export const FirebaseContext = createContext({} as Context)

export default function FirebaseProvider(props: FirebaseProviderProps): JSX.Element {
  const [app, setApp] = useState<SetStateAction<FirebaseApp>>()

  const { config } = props

  useEffect(() => {
    if (config) {
      const __app = initializeApp(config, 'CreactReactApp')
      setApp(__app)
    }
  }, [])

  function loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential | undefined> {
    // eslint-disable-next-line
    // @ts-ignore
    return signInWithEmailAndPassword(getAuth(app), email, password)
      .then((res) => {
        console.log(res)
        return {
          // eslint-disable-next-line
          // @ts-ignore
          accessToken: res.user.accessToken,
          displayName: res.user.displayName,
          email: res.user.email,
          phoneNumber: res.user.phoneNumber,
          photoUrl: res.user.photoURL,
          uid: res.user.uid,
          // eslint-disable-next-line
          // @ts-ignore
          ...res.user.stsTokenManager,
        }
      })
      .catch((err) => {
        const { code } = err
        if (code === 'auth/user-not-found') return 'User not found.'
        else return err.code
      })
  }

  function loginWithPhoneNumber(phone: string) {
    // eslint-disable-next-line
    // @ts-ignore
    const auth = getAuth(app)
    useDeviceLanguage(auth)

    // eslint-disable-next-line
    // @ts-ignore
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'normal',
        callback: () => {
          submitPhoneNumberAuth()
          // eslint-disable-next-line
          // @ts-ignore
          signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
        },
      },
      auth,
    )

    // eslint-disable-next-line
    // @ts-ignore
    const appVerifier = window.recaptchVerifier

    function submitPhoneNumberAuth() {
      signInWithPhoneNumber(auth, phone, appVerifier).then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        // eslint-disable-next-line
        // @ts-ignore
        window.confirmationResult = confirmationResult
        // ...
      })
    }
  }

  function submitPhoneNumberAuthCode(code: string) {
    // eslint-disable-next-line
    // @ts-ignore
    return window.confirmationResult.confirm(code)
  }

  function logout(): Promise<void> {
    return signOut(getAuth(app as FirebaseApp | undefined))
  }

  return (
    <FirebaseContext.Provider
      {...props}
      value={{ app, loginWithEmailAndPassword, loginWithPhoneNumber, logout, submitPhoneNumberAuthCode }}
    >
      {props.children}
    </FirebaseContext.Provider>
  )
}

export interface useFirebaseConfig {
  useEmailAndPassword?: boolean
  usePhoneNumber?: boolean
}

export function useFirebase(config: useFirebaseConfig = {}): Context {
  const ctx = useContext(FirebaseContext)
  if ('useEmailAndPassword' in config && config.useEmailAndPassword) {
    delete ctx.loginWithPhoneNumber
    delete ctx.submitPhoneNumberAuthCode
  } else if ('usePhoneNumber' in config && config.usePhoneNumber) {
    delete ctx.loginWithEmailAndPassword
  }

  return ctx
}
