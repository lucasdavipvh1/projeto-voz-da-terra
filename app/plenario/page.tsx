"use client"

import { PodcastHero } from "@/components/podcast-hero"
import { EpisodesList } from "@/components/episodes-list"
import { PodcastAbout } from "@/components/podcast-about"
import { Footer } from "@/components/footer"
import { useLocale } from "@/context/locale-context"

export default function PlenarioPage() {
  const { t } = useLocale()
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000]">
      <div className="backdrop-blur-xl bg-black/20 min-h-screen">
        <main>
          <PodcastHero />
          <PodcastAbout />
          <EpisodesList />
        </main>
        <Footer />
      </div>
    </div>
  )
}
