import { configureStore, ConfigureStoreOptions, EnhancedStore } from '@reduxjs/toolkit'

import reducers from './reducers'
import middleware from './middleware'

/**
 * A function used to configure the redux store.
 *
 * @param options Contains the preloaded state.
 * @returns A configured Redux store.
 */
function createStore(options?: ConfigureStoreOptions['preloadedState'] | undefined): EnhancedStore {
  return configureStore({
    reducer: reducers,
    ...middleware,
    ...options,
  })
}

const store: EnhancedStore = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
