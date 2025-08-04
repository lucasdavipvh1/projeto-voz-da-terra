"use client"

import { Footer } from "@/components/footer"
import { Play } from "lucide-react"
import { useLocale } from "@/context/locale-context"

export default function VideosPage() {
  const { t } = useLocale()
  const videos = [
    {
      id: 1,
      title: "Desmatamento na Amazônia: O que está em jogo?",
      description: "Análise sobre os impactos ambientais e políticos do desmatamento",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "15:32",
    },
    {
      id: 2,
      title: "Povos Originários: Luta por Direitos",
      description: "Documentário sobre a resistência dos povos indígenas",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "22:18",
    },
    {
      id: 3,
      title: "Política em Rondônia: Panorama Atual",
      description: "Entrevista com especialistas sobre o cenário político local",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "18:45",
    },
    {
      id: 4,
      title: "Agronegócio vs Meio Ambiente",
      description: "Debate sobre sustentabilidade no setor agrícola",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "25:12",
    },
    {
      id: 5,
      title: "Direitos LGBTQIAPN+ no Norte",
      description: "Reportagem sobre avanços e desafios na região",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "12:30",
    },
    {
      id: 6,
      title: "Porto Velho: Desenvolvimento Urbano",
      description: "Análise do crescimento da capital rondoniense",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "20:15",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="backdrop-blur-xl bg-black/20 min-h-screen">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">{t("videos")}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Play className="text-white" size={48} />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
