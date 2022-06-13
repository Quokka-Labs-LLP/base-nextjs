import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ProtectedRoutes from './navigation/ProtectedRoutes'
import { Loader } from './components'

const Login = React.lazy(() => import('./pages/login'))
const Home = React.lazy(() => import('./pages/home'))

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/app"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/"
        element={
          <Loader>
            <Login />
          </Loader>
        }
      />
    </Routes>
  )
}
