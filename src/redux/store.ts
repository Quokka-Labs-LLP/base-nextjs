import { configureStore, ConfigureStoreOptions, EnhancedStore } from '@reduxjs/toolkit'

import reducer from './reducers'
import middleware from './middleware'

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined): EnhancedStore =>
  configureStore({
    reducer,
    ...middleware,
    ...options,
  })

export const store: EnhancedStore = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
