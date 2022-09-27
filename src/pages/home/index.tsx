import React, { useState } from 'react'

import { FormattedMessage, injectIntl } from '../../intl'
import { useApp } from '../../context'
// eslint-disable-next-line
// @ts-ignore
import styles from './style.module.css'
// eslint-disable-next-line
// @ts-ignore
import PersonIcon from './person.svg'
// eslint-disable-next-line
// @ts-ignore
import PasswordIcon from './password.svg'

// eslint-disable-next-line
function Login(props: any): JSX.Element {
  return (
    <>
      <h1 className={styles.heading}>
        <FormattedMessage
          id='AuthenticationPage.schemaTitleLogin'
          values={{
            siteTitle: 'Quokka Labs',
          }}
        />
      </h1>

      <div className={styles.form_control}>
        <div className={styles.form_control_icon}>
          <img src={PersonIcon} alt='person_icon' />
        </div>
        <input type='email' placeholder={props.intl.formatMessage({ id: 'LoginForm.emailPlaceholder' })} />
      </div>

      <div className={styles.form_control}>
        <div className={styles.form_control_icon}>
          <img src={PasswordIcon} alt='person_icon' />
        </div>
        <input type='password' placeholder={props.intl.formatMessage({ id: 'LoginForm.passwordPlaceholder' })} />
      </div>

      <button className={styles.login_btn}>{props.intl.formatMessage({ id: 'LoginForm.logIn' })}</button>

      <p className={styles.label}>
        {/* Forgot password? */}
        <FormattedMessage
          id='LoginForm.forgotPasswordInfo'
          values={{
            passwordRecoveryLink: (
              <div>
                <FormattedMessage id='LoginForm.forgotPassword' />
              </div>
            ),
          }}
        />
      </p>
    </>
  )
}

// eslint-disable-next-line
function Signup(props: any): JSX.Element {
  return (
    <>
      <h1 className={styles.heading}>
        <FormattedMessage
          id='AuthenticationPage.schemaTitleSignup'
          values={{
            siteTitle: 'Quokka Labs',
          }}
        />
      </h1>

      <div className={styles.form_control}>
        <div className={styles.form_control_icon}>
          <img src={PersonIcon} alt='person_icon' />
        </div>
        <input
          type='email'
          placeholder={`${props.intl.formatMessage({
            id: 'SignupForm.firstNamePlaceholder',
          })} ${props.intl.formatMessage({
            id: 'SignupForm.lastNamePlaceholder',
          })}`}
        />
      </div>

      <div className={styles.form_control}>
        <div className={styles.form_control_icon}>
          <img src={PersonIcon} alt='person_icon' />
        </div>
        <input type='email' placeholder={props.intl.formatMessage({ id: 'LoginForm.emailPlaceholder' })} />
      </div>

      <div className={styles.form_control}>
        <div className={styles.form_control_icon}>
          <img src={PasswordIcon} alt='person_icon' />
        </div>
        <input type='password' placeholder={props.intl.formatMessage({ id: 'SignupForm.passwordPlaceholder' })} />
      </div>

      <button className={styles.login_btn}>{props.intl.formatMessage({ id: 'SignupForm.signUp' })}</button>
    </>
  )
}

// eslint-disable-next-line
function home(props: any): JSX.Element {
  const [type, setType] = useState('signup')
  const { changeLang } = useApp()

  return (
    <div className={styles.container}>
      <div className={styles.panels}>
        <div className={styles.left_panel}>
          <div className={styles.left_container}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
            <div className={styles.line4}></div>
          </div>
        </div>
        <div className={styles.right_panel}>
          <div className={styles.login_context}>
            <div className={styles.login_container}>
              {type === 'login' && <Login intl={props.intl} signupLink={setType} />}
              {type === 'signup' && <Signup intl={props.intl} loginLink={setType} />}

              <div className={styles.right_bottom_panel}>
                {type === 'login' ? (
                  <p className={styles.label2} onClick={() => setType('signup')}>
                    {props.intl.formatMessage({ id: 'SignupForm.signUp' })}
                  </p>
                ) : (
                  <p className={styles.label2} onClick={() => setType('login')}>
                    {props.intl.formatMessage({ id: 'SignupForm.backToLoginPage' })}
                  </p>
                )}

                <p className={styles.label3}>
                  <span>{props.intl.formatMessage({ id: 'Footer.privacy' })}</span> |{' '}
                  <span>{props.intl.formatMessage({ id: 'Footer.terms' })}</span> |{' '}
                  <span>{props.intl.formatMessage({ id: 'Footer.toAboutPage' })}</span> |{' '}
                  <span>{props.intl.formatMessage({ id: 'Footer.toContactPage' })}</span> |{' '}
                  <span>{props.intl.formatMessage({ id: 'Footer.toFAQPage' })}</span> |{' '}
                  <span>{props.intl.formatMessage({ id: 'Footer.toHelpPage' })}</span>
                </p>

                <p className={styles.label4}>
                  <span onClick={() => changeLang('en')}>English</span> |{' '}
                  <span onClick={() => changeLang('fr')}>French</span> |{' '}
                  <span onClick={() => changeLang('de')}>Germany</span> |{' '}
                  <span onClick={() => changeLang('es')}>Spanish</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(home)
