// components/language-selector.tsx
"use client"

import { useLocale } from "@/context/locale-context"
import { Button } from "@/components/ui/button"

export function LanguageSelector() {
  const { locale, setLocale } = useLocale()

  const languages = [
    { code: "pt-BR", name: "PT-BR" },
    { code: "en", name: "EN" },
    { code: "es", name: "ES" },
    { code: "it", name: "IT" },
    { code: "fr", name: "FR" },
  ]

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-1 backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-1 shadow-lg">
      {" "}
      {/* p-2 para p-1, space-y-2 para space-y-1 */}
      {languages
        .filter((lang) => lang.code !== locale) // Adiciona esta linha para filtrar o idioma ativo
        .map((lang) => (
          <Button
            key={lang.code}
            variant={locale === lang.code ? "default" : "ghost"}
            size="sm"
            onClick={() => setLocale(lang.code)}
            className={`${locale === lang.code ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "text-gray-700 dark:text-gray-300 hover:bg-emerald-600/20 dark:hover:bg-emerald-600/20"} rounded-md px-2 py-1 text-xs font-medium transition-colors duration-200`}
          >
            {lang.name}
          </Button>
        ))}
    </div>
  )
}
