"use client"

import { Button } from "@/components/ui/button"
import { Play, Download } from "lucide-react"
import Image from "next/image"
import { useLocale } from "@/context/locale-context"

export function PodcastHero() {
  const { t } = useLocale()
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="backdrop-blur-md bg-white/10 dark:bg-[var(--header-bg-dark)] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/plenario-logo.png"
                alt="Plenário Podcast"
                width={700}
                height={200}
                className="mb-6 hover:animate-float" // Já está aqui
              />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {t("podcastDebatesPower")}
              </h1>
              <p className="text-xl text-gray-700 dark:text-emerald-100 mb-8 leading-relaxed">{t("deepAnalysis")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  {t("listenLatestEpisode")}
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-emerald-900 px-8 py-3 text-lg bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t("subscribePodcast")}
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Estúdio do Plenário"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
