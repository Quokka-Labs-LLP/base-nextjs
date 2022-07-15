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
  ConfirmationResult,
} from 'firebase/auth'

declare global {
  interface Window {
    confirmationResult: ConfirmationResult
  }
}

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

/**
 * A context api for firebase authentication.
 *
 * @param props Pass the firebase config into the FirebaseProvider's props.
 * @returns
 */
export default function FirebaseProvider(props: FirebaseProviderProps): JSX.Element {
  const [app, setApp] = useState<SetStateAction<FirebaseApp>>()

  const { config } = props

  useEffect(() => {
    if (config) {
      /**
       * Initialize the firebase app.
       */
      const __app = initializeApp(config, 'CreactReactApp')
      setApp(__app)
    }
  }, [])

  /**
   * Signs in using an email and password.
   *
   * @param email Email of the user.
   * @param password Password of the user.
   * @returns Promise<UserCredential>
   */
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

  /**
   * Signs in using a phone number.
   *
   * @param phone String - Phone number of the user.
   */
  function submitPhoneNumber(phone: string) {
    const auth = getAuth(app as FirebaseApp | undefined)
    useDeviceLanguage(auth)

    signInWithPhoneNumber(auth, phone, new RecaptchaVerifier('recaptcha-container', {}, auth)).then(
      (confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult
      },
    )
  }

  /**
   *
   * @param code String - Verification code.
   * @returns
   */
  function submitPhoneNumberAuthCode(code: string): Promise<UserCredential | undefined> {
    try {
      return window.confirmationResult.confirm(code)
    } catch (err) {
      console.log(err)
      return Promise.resolve(undefined)
    }
  }

  /**
   * Signs out the current user.
   * @returns Promise<void>
   */
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

/**
 * A custom hook that returns the FIrebase Context.
 *
 * @param config A config to setup which authentication process should be followed.
 * @returns Firebase Context.
 */
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
