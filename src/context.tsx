import React, { createContext, useContext, useEffect, useState } from 'react'

// eslint-disable-next-line
export const AppContext = createContext({} as any)

// eslint-disable-next-line
export function AppProvider(props: any): JSX.Element {
  const [lang, setLang] = useState('en')
  const [translation, setTranslation] = useState()

  function changeLang(lang: string) {
    setLang(lang)
  }

  useEffect(() => {
    if (lang) {
      ;(async function () {
        const tr = await import(`./translations/${lang}.json`)
        setTranslation(tr)
      })()
    }
  }, [lang])

  return <AppContext.Provider value={{ changeLang, lang, translation }} {...props} />
}

// eslint-disable-next-line
export function useApp(): any {
  return useContext(AppContext)
}
