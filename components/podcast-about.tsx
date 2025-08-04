"use client"

import { useLocale } from "@/context/locale-context"

export function PodcastAbout() {
  const { t } = useLocale()
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="backdrop-blur-md bg-emerald-900/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">{t("aboutPlenario")}</h2>
          <div className="prose prose-lg prose-invert max-w-none text-center">
            <p className="text-emerald-100 leading-relaxed mb-6">
              O <strong>Plenário</strong> {t("aboutPlenario")} {t("deepAnalysis")}
            </p>
            <p className="text-emerald-100 leading-relaxed">{t("deepAnalysis")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
