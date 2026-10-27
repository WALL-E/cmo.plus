'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { dictionaries, type Locale } from '@/lib/i18n'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof dictionaries)[Locale]
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en'
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
