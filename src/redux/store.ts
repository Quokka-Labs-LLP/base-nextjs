/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { userApi } from './api/api'
import drawerReducer from './features/drawerSlice'
import snackbarSlice from './features/snackbarSlice'
import userSlice from './features/usersSlice'

export const store = configureStore({
  reducer: {
    drawerReducer,
    snackbarSlice,
    userSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([userApi.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
