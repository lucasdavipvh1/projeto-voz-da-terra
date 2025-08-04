// context/locale-context.tsx
"use client"

import { createContext, useState, useContext, useEffect, type ReactNode } from "react"
import { translations, type Locale, type TranslationKeys, type TranslationParams } from "@/lib/translations"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKeys, params?: TranslationParams) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt-BR")

  useEffect(() => {
    // Tenta carregar o idioma salvo no localStorage
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && translations[savedLocale]) {
      setLocaleState(savedLocale)
    } else {
      // Define um padrão se não houver ou for inválido
      setLocaleState("pt-BR")
      localStorage.setItem("locale", "pt-BR")
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    if (translations[newLocale]) {
      setLocaleState(newLocale)
      localStorage.setItem("locale", newLocale)
    } else {
      console.warn(`Locale "${newLocale}" not supported.`)
    }
  }

  const t = (key: TranslationKeys, params?: TranslationParams): string => {
    let translatedText = translations[locale][key] || key // Retorna a chave se a tradução não for encontrada
    if (params) {
      for (const paramKey in params) {
        translatedText = translatedText.replace(new RegExp(`{${paramKey}}`, "g"), String(params[paramKey]))
      }
    }
    return translatedText
  }

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
