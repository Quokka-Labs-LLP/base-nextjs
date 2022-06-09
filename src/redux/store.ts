import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'

import reducer from './reducers'
import middleware from './middleware'

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
): any => configureStore({
  reducer,
  ...middleware,
  ...options,
})

export const store: any = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
