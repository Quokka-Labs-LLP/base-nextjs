import { useMemo } from 'react'
import { useAppSelector } from './redux'
import { RootState } from '../redux/store'

export default function useAuth() {
  const selectCurrentUser = (state: RootState) => state.auth.user
  const user = useAppSelector(selectCurrentUser)

  return useMemo(() => ({ user }), [user])
}
