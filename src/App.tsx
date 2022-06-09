import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ProtectedRoutes from './navigation/PrivateRoutes'
import { Loader } from './components'
import './App.css'

const Login = React.lazy(() => import('./pages/login'))
const Home = React.lazy(() => import('./pages/home'))

export default function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route
          path='/login'
          element={
            <Loader>
              <Login />
            </Loader>
          }
        />

        <Route
          path='/home'
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  )
}
