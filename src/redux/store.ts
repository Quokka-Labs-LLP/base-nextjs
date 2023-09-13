;
/* eslint-disable */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { createWrapper } from 'next-redux-wrapper';
import { FLUSH, getStoredState, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';



// import storage from 'redux-persist/lib/storage'

import { userApi } from './api/api';
import userAuth from './features/auth';
import drawerReducer from './features/drawerSlice';
import snackbarSlice from './features/snackbarSlice';
import userSlice from './features/usersSlice';


const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: any) {
      return Promise.resolve()
    },
  }
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export default storage

const combineReducer = combineReducers({
  drawerReducer,
  userAuth,
  snackbarSlice,
  userSlice,
  [userApi.reducerPath]: userApi.reducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducer)

const makeStore = () => {
  const store: any = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([userApi.middleware]),
  })
  store.__persistor = persistStore(store)
  return store
}
export const newStore = makeStore()
setupListeners(newStore.dispatch)
export type RootState = ReturnType<typeof newStore.getState>
export type AppDispatch = typeof newStore.dispatch
export const wrapper = createWrapper(makeStore)