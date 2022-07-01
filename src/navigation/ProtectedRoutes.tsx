import React, { lazy, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Loader } from '../components'
import useAuth from '../hooks/useAuth'

export interface ProtectedRoutesProps {
  children: JSX.IntrinsicAttributes
}

/**
 *
 * ProtectedRoutes is a component for defining authenticated routes,
 * if any protected route is being requested then navigate it to
 * `/login` route for sign-in.
 *
 * @param props
 * @returns
 */
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

/**
 * A function to load component which will be defined as protected route.
 *
 * @param path The path to the component to load.
 * @returns JSX.Element wrapped in ProtectedRoute component.
 */
export const LoadProtectedRoute =
  (path: string) =>
  // eslint-disable-next-line react/display-name
  (): JSX.Element =>
    <ProtectedRoutes>{lazy(() => import(path))}</ProtectedRoutes>
