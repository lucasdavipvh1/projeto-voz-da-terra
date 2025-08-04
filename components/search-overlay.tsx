"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Calendar, User } from "lucide-react"
import { useLocale } from "@/context/locale-context"
import { Badge } from "@/components/ui/badge"

interface SearchOverlayProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

// Mock de artigos para demonstração da busca
// Em um cenário real, você buscaria isso de uma API ou de um contexto global de dados
const mockArticles = [
  {
    id: 1,
    title: "Desmatamento na Amazônia atinge novo recorde em Rondônia",
    excerpt: "Dados do INPE mostram aumento de 15% no desmatamento da região nos últimos 6 meses...",
    category: "Meio Ambiente",
    author: "Maria Silva",
    date: "2 de Fevereiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 2,
    title: "Povos indígenas de RO lutam por demarcação de terras",
    excerpt: "Comunidades tradicionais enfrentam invasões e ameaças em territórios ancestrais...",
    category: "Povos Originários",
    author: "João Santos",
    date: "1 de Fevereiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 3,
    title: "Eleições municipais: candidatos apresentam propostas para LGBTQIAPN+",
    excerpt: "Políticas públicas para a comunidade LGBTQIAPN+ ganham destaque no debate eleitoral...",
    category: "Direitos Humanos",
    author: "Ana Costa",
    date: "31 de Janeiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 4,
    title: "Agronegócio vs Sustentabilidade: o debate em Porto Velho",
    excerpt: "Produtores rurais e ambientalistas discutem práticas sustentáveis na agricultura...",
    category: "Agronegócio",
    author: "Carlos Oliveira",
    date: "30 de Janeiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 5,
    title: "Corrupção na Câmara Municipal: investigação revela esquema",
    excerpt: "Operação do Ministério Público apura desvio de recursos públicos...",
    category: "Política",
    author: "Fernanda Lima",
    date: "29 de Janeiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 6,
    title: "Concentração de poder: análise do cenário político regional",
    excerpt: "Especialistas analisam a influência de grupos econômicos na política local...",
    category: "Poder",
    author: "Roberto Mendes",
    date: "28 de Janeiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 7,
    title: "Nova lei de incentivo fiscal aprovada em RO",
    excerpt: "Medida visa atrair investimentos e gerar empregos na região...",
    category: "Política",
    author: "Mariana Economia",
    date: "24 de Janeiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 8,
    title: "Incêndios florestais: alerta máximo em Rondônia",
    excerpt: "Focos de queimadas aumentam com a seca, ameaçando a biodiversidade...",
    category: "Meio Ambiente",
    author: "Ricardo Fogo",
    date: "28 de Janeiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 9,
    title: "Demarcação de terras: avanço em pauta no Congresso",
    excerpt: "Debate sobre direitos territoriais indígenas ganha força...",
    category: "Povos Originários",
    author: "Davi Kopenawa",
    date: "27 de Janeiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 10,
    title: "Escândalo de corrupção abala cúpula do governo estadual",
    excerpt: "Novas revelações sobre desvio de verbas públicas...",
    category: "Poder",
    author: "Jornalista Investigativo",
    date: "23 de Janeiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 11,
    title: "Crise hídrica ameaça produção agrícola no interior",
    excerpt: "Falta de chuvas impacta lavouras e pecuária na região...",
    category: "Agronegócio",
    author: "Clima Rural",
    date: "25 de Janeiro, 2025",
    image: "/placeholder.svg?height=250&width=400",
  },
]

export function SearchOverlay({ isOpen, setIsOpen }: SearchOverlayProps) {
  const { t } = useLocale()
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredArticles, setFilteredArticles] = useState<typeof mockArticles>([])

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (query.length > 0) {
      const results = mockArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.author.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query),
      )
      setFilteredArticles(results)
    } else {
      setFilteredArticles([]) // Limpa os resultados se a busca estiver vazia
    }
  }, [])

  const closeSearch = useCallback(() => {
    setIsOpen(false)
    setSearchQuery("") // Limpa a busca ao fechar
    setFilteredArticles([]) // Limpa os resultados
  }, [setIsOpen])

  useEffect(() => {
    // Previne o scroll do body quando o overlay está aberto
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Fecha o overlay ao pressionar ESC
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSearch()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, closeSearch])

  if (!isOpen) return null // Não renderiza o overlay se não estiver aberto

  return (
    <div className="fixed inset-0 z-[100] backdrop-blur-md bg-black/70 flex flex-col items-center pt-20 px-4 overflow-y-auto">
      <Button
        onClick={closeSearch}
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10"
        aria-label={t("close")}
      >
        <X className="h-6 w-6" />
      </Button>

      <div className="w-full max-w-2xl mb-8">
        <Input
          type="text"
          placeholder={t("search")}
          value={searchQuery}
          onChange={handleSearch}
          className="w-full bg-white/20 text-white placeholder:text-gray-300 text-lg p-3 rounded-lg border-none focus:ring-2 focus:ring-emerald-400"
          autoFocus
        />
      </div>

      <div className="w-full max-w-2xl grid gap-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div
              key={article.id}
              className="backdrop-blur-sm bg-white/10 rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center transition-all duration-300" // Removido blur-sm e hover:blur-none
            >
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full md:w-32 h-24 object-cover rounded-md flex-shrink-0"
              />
              <div className="flex-1">
                <Badge
                  className={
                    article.category === t("lgbtqiapnPlus") ? "badge-lgbtqiapn-plus" : "bg-emerald-600 text-white mb-2"
                  }
                >
                  {article.category}
                </Badge>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{article.title}</h3>{" "}
                {/* Ajustado para melhor contraste */}
                <p className="text-gray-700 dark:text-gray-200 text-sm line-clamp-2 mb-2">{article.excerpt}</p>{" "}
                {/* Ajustado para melhor contraste */}
                <div className="flex items-center space-x-4 text-xs text-gray-600 dark:text-gray-300">
                  {" "}
                  {/* Ajustado para melhor contraste */}
                  <div className="flex items-center space-x-1">
                    <User size={12} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : searchQuery.length > 0 ? (
          <p className="text-white text-center text-lg mt-8">{t("noResults")}</p>
        ) : (
          <p className="text-white text-center text-lg mt-8">{t("startTypingToSearch")}</p>
        )}
      </div>
    </div>
  )
}
