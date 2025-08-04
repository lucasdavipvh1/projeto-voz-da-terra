"use client"

import { useLocale } from "@/context/locale-context"

export function NewsTicker() {
  const { t } = useLocale()
  const breakingNews = [
    "Desmatamento na Amazônia atinge novo recorde em Rondônia",
    "Povos indígenas de RO lutam por demarcação de terras",
    "Eleições municipais: candidatos apresentam propostas para LGBTQIAPN+",
    "Agronegócio vs Sustentabilidade: o debate em Porto Velho",
    "Corrupção na Câmara Municipal: investigação revela esquema",
  ]

  return (
    <div className="bg-red-600 dark:bg-red-600 text-white py-1 news-ticker-container">
      {" "}
      {/* py-2 para py-1 */}
      <div className="flex items-center relative">
        <div className="bg-red-700 dark:bg-red-700 px-3 py-0.5 text-xs font-bold whitespace-nowrap relative z-20 shadow-lg">
          {" "}
          {/* px-4 py-1 para px-3 py-0.5, text-sm para text-xs */}
          {t("breakingNews")}
        </div>

        {/* Gradiente para fazer o texto sumir atrás */}
        <div className="news-ticker-gradient"></div>

        <div className="flex animate-scroll relative z-0 ml-4">
          {[...breakingNews, ...breakingNews, ...breakingNews].map((news, index) => (
            <span key={index} className="px-4 text-xs whitespace-nowrap">
              {" "}
              {/* px-6 para px-4, text-sm para text-xs */}• {news}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
