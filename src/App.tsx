import React from 'react'

import { IntlProvider } from './intl'
import { useApp } from './context'
import Home from './pages/home'

export default function App(): JSX.Element {
  const { lang, translation } = useApp()

  return (
    <IntlProvider locale={lang} messages={translation}>
      <Home />
    </IntlProvider>
  )
}
