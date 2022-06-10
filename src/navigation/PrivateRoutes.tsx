import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Loader } from '../components'
import useAuth from '../hooks/useAuth'

export interface ProtectedRoutesProps {
  children: Element
}

export default function ProtectedRoutes(props: ProtectedRoutesProps): JSX.Element {
  const { user } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  if (!user && location.pathname !== '/login') {
    navigate('/login', { replace: true, state: { from: location } })
    return <React.Fragment />
  } else {
    return (
      <Loader>
        <>{props.children}</>
      </Loader>
    )
  }
}
