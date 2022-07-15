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
  submitPhoneNumber?: (phone: string) => void
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

  function submitPhoneNumber(phone: string) {
    const auth = getAuth(app as FirebaseApp | undefined)
    useDeviceLanguage(auth)

    signInWithPhoneNumber(auth, phone, new RecaptchaVerifier('recaptcha-container', {}, auth)).then(
      (confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        // eslint-disable-next-line
        // @ts-ignore
        window.confirmationResult = confirmationResult
      },
    )
  }

  function submitPhoneNumberAuthCode(code: string) {
    try {
      // eslint-disable-next-line
      // @ts-ignore
      return window.confirmationResult.confirm(code)
    } catch (err) {
      console.log(err)
    }
  }

  function logout(): Promise<void> {
    return signOut(getAuth(app as FirebaseApp | undefined))
  }

  return (
    <FirebaseContext.Provider
      {...props}
      value={{ app, loginWithEmailAndPassword, logout, submitPhoneNumber, submitPhoneNumberAuthCode }}
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
    delete ctx.submitPhoneNumber
    delete ctx.submitPhoneNumberAuthCode
  } else if ('usePhoneNumber' in config && config.usePhoneNumber) {
    delete ctx.loginWithEmailAndPassword
  }

  return ctx
}
