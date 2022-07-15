import React, { StrictMode } from 'react'
import { render } from 'react-dom'

import './index.css'
import App from './App'
import { FirebaseProvider } from './context'
import reportWebVitals from './reportWebVitals'

const config = {
  apiKey: process.env.REACT_APP_API_KEY as string,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN as string,
  projectId: process.env.REACT_APP_PROJECT_ID as string,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET as string,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID as string,
  appId: process.env.REACT_APP_APP_ID as string,
}

render(
  <StrictMode>
    <FirebaseProvider config={config}>
      <App />
    </FirebaseProvider>
  </StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
