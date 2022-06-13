import React, { useEffect } from 'react'
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
