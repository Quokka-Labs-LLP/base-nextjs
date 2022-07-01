import React, { lazy, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Loader } from '../components'
import useAuth from '../hooks/useAuth'

export interface ProtectedRoutesProps {
  children: JSX.IntrinsicAttributes
}

export default function ProtectedRoutes(props: ProtectedRoutesProps): JSX.Element {
  const { user } = useAuth()

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user && location.pathname !== '/') {
      navigate('/', { replace: true, state: { from: location } })
    }
  }, [])

  if (!user && location.pathname !== '/') {
    return <React.Fragment />
  } else {
    return (
      <Loader>
        <>{props.children}</>
      </Loader>
    )
  }
}

export const LoadProtectedRoute =
  (path: string) =>
  // eslint-disable-next-line react/display-name
  (): JSX.Element =>
    <ProtectedRoutes>{lazy(() => import(path))}</ProtectedRoutes>
