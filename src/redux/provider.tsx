'use client';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { newStore, wrapper } from './store'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PersistGate persistor={newStore.__persistor} loading={<div>Loading...</div>}>
      <Provider store={newStore}>{children}</Provider>
    </PersistGate>
  )
}

export default wrapper.withRedux(Providers)