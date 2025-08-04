"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/context/locale-context"

export function HeroSection() {
  const { t } = useLocale()
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="backdrop-blur-md bg-white/80 dark:bg-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {t("independentJournalism")}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">{t("nonProfitVehicle")}</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg shadow-lg">
                {t("readOurReports")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Jornalismo na Amazônia"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
