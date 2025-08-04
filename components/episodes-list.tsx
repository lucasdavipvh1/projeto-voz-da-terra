"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, Youtube } from "lucide-react" // Adicionado Youtube icon
import { useLocale } from "@/context/locale-context"
import Link from "next/link" // Importar Link
import Image from "next/image" // Importar Image para as miniaturas

export function EpisodesList() {
  const { t } = useLocale()
  const episodes = [
    {
      id: 1,
      title: "O Futuro da Amazônia: Entre Preservação e Desenvolvimento",
      description: "Debate com ambientalistas e representantes do agronegócio sobre o futuro da floresta amazônica.",
      date: "1 de Fevereiro, 2025",
      duration: "45:32",
      guests: ["Dr. Marina Oliveira", "João Fazendeiro", "Cacique Raoni Jr."],
      category: t("environment"),
      podcastUrl: "https://example.com/podcast/amazonia-futuro", // Exemplo de URL de podcast
      videoUrl: "https://youtu.be/08kd5_qKrQg", // Link do YouTube fornecido
      thumbnail: "/placeholder.svg?height=200&width=350", // Miniatura específica
    },
    {
      id: 2,
      title: "Eleições 2024: Análise dos Resultados em Rondônia",
      description: "Cientistas políticos analisam os resultados eleitorais e suas implicações para o estado.",
      date: "25 de Janeiro, 2025",
      duration: "38:15",
      guests: ["Prof. Carlos Política", "Jornalista Ana Eleições"],
      category: t("politics"),
      podcastUrl: "https://example.com/podcast/eleicoes-rondonia",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      title: "Direitos Indígenas: Conquistas e Desafios",
      description: "Lideranças indígenas discutem a luta por direitos e territórios na região Norte.",
      date: "18 de Janeiro, 2025",
      duration: "52:18",
      guests: ["Líder Indígena Txai", "Advogado Direitos Humanos"],
      category: t("indigenousPeoples"),
      podcastUrl: "https://example.com/podcast/direitos-indigenas",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 4,
      title: "LGBTQIAPN+ na Política: Representatividade e Desafios",
      description: "Ativistas e políticos LGBTQIAPN+ falam sobre representatividade e políticas públicas.",
      date: "11 de Janeiro, 2025",
      duration: "41:27",
      guests: ["Vereadora Trans", "Ativista LGBTQ+"],
      category: t("lgbtqiapnPlus"),
      podcastUrl: "https://example.com/podcast/lgbtqiapn-politica",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-8">{t("recentEpisodes")}</h2>

        <div className="space-y-6">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="backdrop-blur-md bg-emerald-900/20 rounded-2xl p-6 hover:bg-emerald-900/30 transition-all duration-300 flex flex-col md:flex-row gap-6"
            >
              {/* Miniatura do vídeo clicável */}
              <Link href={episode.videoUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <div className="relative w-full md:w-64 h-36 rounded-lg overflow-hidden shadow-lg group">
                  <Image
                    src={episode.thumbnail || "/placeholder.svg"}
                    alt={`Thumbnail do episódio: ${episode.title}`}
                    width={350}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="text-white h-10 w-10" />
                  </div>
                </div>
              </Link>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge
                    className={
                      episode.category === t("lgbtqiapnPlus") ? "badge-lgbtqiapn-plus" : "bg-emerald-600 text-white"
                    }
                  >
                    {episode.category}
                  </Badge>
                  <div className="flex items-center text-emerald-200 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {episode.date}
                  </div>
                  <div className="flex items-center text-emerald-200 text-sm">
                    <Clock size={14} className="mr-1" />
                    {episode.duration}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{episode.title}</h3>

                <p className="text-emerald-100 mb-3 leading-relaxed">{episode.description}</p>

                <div className="text-sm text-emerald-200 mb-4">
                  <strong>{t("guests")}:</strong> {episode.guests.join(", ")}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  {/* Botão "Assistir Vídeo" agora é um link para o vídeo */}
                  <Link href={episode.videoUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Youtube className="mr-2 h-4 w-4" /> {/* Ícone do YouTube */}
                      Assistir Vídeo
                    </Button>
                  </Link>
                  {/* Se ainda houver um link de podcast separado, você pode adicioná-lo aqui */}
                  {episode.podcastUrl && (
                    <Link href={episode.podcastUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-emerald-900 bg-transparent"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        {t("listen")}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
