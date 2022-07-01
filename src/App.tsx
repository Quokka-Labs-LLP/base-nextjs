import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LoadProtectedRoute } from './navigation/ProtectedRoutes'
import { Loader } from './components'

const Login = React.lazy(() => import('./pages/login'))
const Home = LoadProtectedRoute('./pages/home')

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/app" element={<Home />} />
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
