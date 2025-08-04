"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import { useLocale } from "@/context/locale-context"
import Link from "next/link"
import { useState, useRef, useCallback } from "react"
import { ShareButtons } from "./share-buttons" // Importar o novo componente

export function NewsGrid() {
  const { t } = useLocale()
  const articles = [
    {
      id: 1,
      title: "Desmatamento na Amazônia atinge novo recorde em Rondônia",
      excerpt: "Dados do INPE mostram aumento de 15% no desmatamento da região nos últimos 6 meses...",
      category: t("environment"),
      author: "Maria Silva",
      date: "2 de Fevereiro, 2025",
      image: "/images/ACORDO-FAPEMA-TENETEHAR-2024-1200x675.webp", // Imagem de destaque
      featured: true,
    },
    {
      id: 2,
      title: "Povos indígenas de RO lutam por demarcação de terras",
      excerpt: "Comunidades tradicionais enfrentam invasões e ameaças em territórios ancestrais...",
      category: t("indigenousPeoples"),
      author: "João Santos",
      date: "1 de Fevereiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 3,
      title: "Eleições municipais: candidatos apresentam propostas para LGBTQIAPN+",
      excerpt: "Políticas públicas para a comunidade LGBTQIAPN+ ganham destaque no debate eleitoral...",
      category: t("lgbtqiapnPlus"),
      author: "Ana Costa",
      date: "31 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 4,
      title: "Agronegócio vs Sustentabilidade: o debate em Porto Velho",
      excerpt: "Produtores rurais e ambientalistas discutem práticas sustentáveis na agricultura...",
      category: t("agribusiness"),
      author: "Carlos Oliveira",
      date: "30 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 5,
      title: "Corrupção na Câmara Municipal: investigação revela esquema",
      excerpt: "Operação do Ministério Público apura desvio de recursos públicos...",
      category: t("politics"),
      author: "Fernanda Lima",
      date: "29 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 6,
      title: "Concentração de poder: análise do cenário político regional",
      excerpt: "Especialistas analisam a influência de grupos econômicos na política local...",
      category: t("power"),
      author: "Roberto Mendes",
      date: "28 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  const [imageTransform, setImageTransform] = useState({ x: 0, y: 0 })
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (imageContainerRef.current) {
      const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      // Ajuste a sensibilidade do movimento (ex: max 15px)
      const maxMovement = 15
      const transformX = (mouseX / (width / 2)) * maxMovement
      const transformY = (mouseY / (height / 2)) * maxMovement

      setImageTransform({ x: transformX, y: transformY })
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setImageTransform({ x: 0, y: 0 })
  }, [])

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t("latestNews")}</h2>

        {featuredArticle && (
          <Link href={`/news/${featuredArticle.id}`} className="group block cursor-pointer">
            <div className="relative backdrop-blur-md bg-white/10 rounded-3xl p-8 mb-12 transition-colors duration-300 overflow-hidden">
              {/* Imagem de fundo borrada */}
              <div className="absolute inset-0 z-0">
                <img
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover filter blur-lg scale-110"
                />
              </div>

              {/* Conteúdo do artigo em destaque */}
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge
                    className={
                      featuredArticle.category === t("lgbtqiapnPlus")
                        ? "badge-lgbtqiapn-plus"
                        : "bg-emerald-600 text-white mb-4"
                    }
                  >
                    {featuredArticle.category}
                  </Badge>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-2xl text-gray-700 dark:text-gray-400 mb-6 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{featuredArticle.date}</span>
                    </div>
                  </div>
                  {/* Botões de compartilhamento para o artigo em destaque */}
                  <ShareButtons
                    articleTitle={featuredArticle.title}
                    articleExcerpt={featuredArticle.excerpt}
                    articleUrl={`${window.location.origin}/news/${featuredArticle.id}`}
                  />
                </div>
                <div
                  ref={imageContainerRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="relative overflow-hidden rounded-2xl shadow-2xl w-full h-64"
                >
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-75 ease-out animate-float"
                    style={{ transform: `translate(${imageTransform.x}px, ${imageTransform.y}px)` }}
                  />
                </div>
              </div>
            </div>
          </Link>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <article
              key={article.id}
              className="group backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300"
            >
              <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <Badge
                  className={
                    article.category === t("lgbtqiapnPlus") ? "badge-lgbtqiapn-plus" : "bg-emerald-600 text-white mb-3"
                  }
                >
                  {article.category}
                </Badge>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center space-x-2">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>
                {/* Botões de compartilhamento para artigos regulares */}
                <ShareButtons
                  articleTitle={article.title}
                  articleExcerpt={article.excerpt}
                  articleUrl={`${window.location.origin}/news/${article.id}`}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
