'use client'

import { auth } from '@/firebaseConfig'
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  RecaptchaVerifier,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
} from 'firebase/auth'
import { useState } from 'react'
import Image from 'next/image'

import 'react-phone-number-input/style.css'

import PhoneInput from 'react-phone-number-input'

import styles from './page.module.css'

export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailSignup, setEmailSignup] = useState<string>('')
  const [passwordSignup, setPasswordSignup] = useState<string>('')
  const [emailReset, setEmailReset] = useState<string>('')
  const [mobileNumber, setMobileNumber] = useState()
  const [verifyOtp, setVerifyOtp] = useState<number>()
  const [mobileToken, setMobileToken] = useState<any>()

  const googleAuthProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  const microsoftProvider = new OAuthProvider('microsoft.com')

  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((result: any) => {
        console.log('result', result)
      })
      .catch((error: any) => {
        console.log('error', error)
      })
  }

  const handleGithubLogin = async () => {
    await signInWithPopup(auth, githubProvider)
      .then(result => {
        console.log('result', result)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const handleFacebookLogin = async () => {
    await signInWithPopup(auth, facebookProvider)
      .then(result => {
        console.log('result', result)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const handleMicrosoftLogin = async () => {
    await signInWithPopup(auth, microsoftProvider)
      .then(result => {
        console.log('result', result)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await signInWithEmailAndPassword(auth, email, password)
    console.log('result', result)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    console.log('result', result)
  }

  const handleForgotPasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await sendPasswordResetEmail(auth, emailReset)
    console.log('result', result)
  }

  const handleMobileAuthentication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const capatcheVerifier: any = new RecaptchaVerifier(auth, 'recaptcha-container', {})
    const result: any = await signInWithPhoneNumber(auth, mobileNumber, capatcheVerifier)
    setMobileToken(result)

    console.log('result', result)
  }

  const handleSubmitOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await mobileToken.confirm(verifyOtp)
    console.log('result', result)
  }

  return (
    <main className={styles.main}>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        onSubmit={handleSubmit}
      >
        <h1>For SignUp</h1>
        <input
          type='text'
          value={emailSignup}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailSignup(e.target.value)}
          placeholder='Enter Email'
        />
        <input
          type='text'
          value={passwordSignup}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordSignup(e.target.value)}
          placeholder='Enter Password'
        />
        <button type='submit'>Submit Signup</button>
      </form>

      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        onSubmit={handleSubmitForm}
      >
        <h1>For SignIn</h1>
        <input
          type='text'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder='Enter Email'
        />
        <input
          type='text'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          placeholder='Enter Password'
        />
        <button type='submit'>Submit</button>
      </form>

      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        onSubmit={handleForgotPasswordSubmit}
      >
        <h1>Forgot Password</h1>
        <input
          type='text'
          value={emailReset}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailReset(e.target.value)}
          placeholder='Enter Email'
        />
        <button type='submit'>Forgot Password</button>
      </form>

      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        onSubmit={handleMobileAuthentication}
      >
        <h1>Mobile Authentication</h1>
        <PhoneInput
          placeholder='Enter phone number'
          value={mobileNumber}
          onChange={setMobileNumber}
        />
        <div id='recaptcha-container' />
        <button type='submit'>Send OTP</button>
      </form>

      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        onSubmit={handleSubmitOTP}
      >
        <h1>Verify OTP</h1>
        <input
          type='number'
          value={verifyOtp}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVerifyOtp(e.target.value)}
          placeholder='Enter Number'
        />
        <button type='submit'>Verify OTP</button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column' }} className={styles.description}>
        Get started by editing &nbsp;
        <code className={styles.code}>src/app/page.tsx</code>
        <div>
          <Image
            onClick={handleGoogleLogin}
            src='/googleImage.svg'
            alt='Google Image Logo'
            width={60}
            height={60}
          />
          <Image
            onClick={handleGithubLogin}
            src='/github.png'
            alt='Github Image Logo'
            width={60}
            height={60}
          />
          <Image
            onClick={handleFacebookLogin}
            src='/facebook.svg'
            alt='Facebook Image Logo'
            width={60}
            height={60}
          />
          <Image
            onClick={handleMicrosoftLogin}
            src='/microsoft.svg'
            alt='Microsoft Image Logo'
            width={60}
            height={60}
          />
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </main>
  )
}
