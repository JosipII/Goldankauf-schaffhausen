'use client'
import { createContext, useContext, useState } from 'react'
import { T, Lang, Translations } from './translations'

type LangContextType = {
  lang: Lang
  t: Translations
  toggle: (l: Lang) => void
}

const LangContext = createContext<LangContextType>({
  lang: 'de',
  t: T.de,
  toggle: () => {},
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('de')
  return (
    <LangContext.Provider value={{ lang, t: T[lang] as Translations, toggle: setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
