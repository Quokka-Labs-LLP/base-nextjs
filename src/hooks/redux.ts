import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'

/**
 * Dispatch any action in order to mutate the redux store.
 * 
 * import { useAppDispatch } from './hooks/redux'
 * 
 * function Dashboard() {
 *   const dispatch = useAppDispatch()
 *   // ...
 *   dispatch(increment(state))
 * }
 * @returns 
 */
export const useAppDispatch: AppDispatch = () => useDispatch<AppDispatch>()

/**
 * Redux selector to get data from the redux store.
 * 
 * import { useAppSelector } from './hooks/redux'
 * 
 * function Dashboard() {
 *   const auth = useAppSelector((state: RootState) => state.auth)
 *   ...
 * }
 * @returns 
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
