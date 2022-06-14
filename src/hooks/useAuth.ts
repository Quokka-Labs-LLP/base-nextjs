import { useMemo } from 'react'

import { useAppSelector } from './redux'
import { RootState } from '../redux'
import { User } from '../redux/auth'

export interface CurrentUser {
  user: User
}

export default function useAuth(): CurrentUser {
  const selectCurrentUser = (state: RootState) => state.auth.user
  const user = useAppSelector(selectCurrentUser)

  return useMemo(() => ({ user }), [user])
}
