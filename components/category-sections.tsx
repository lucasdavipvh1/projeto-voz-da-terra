"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/context/locale-context"
import { ShareButtons } from "./share-buttons" // Importar o novo componente

interface Article {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  image: string
}

interface CategorySectionProps {
  title: string
  articles: Article[]
  bgColor: string
  badgeColor: string
}

export function CategorySection({ title, articles, bgColor, badgeColor }: CategorySectionProps) {
  const { t } = useLocale()

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`backdrop-blur-md ${bgColor} rounded-3xl p-8`}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
            <Button variant="outline" className="text-white hover:bg-white/10 bg-transparent">
              {t("viewAll")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 6).map((article) => (
              <article
                key={article.id}
                className="group backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Badge
                    className={
                      article.category === t("lgbtqiapnPlus") ? "badge-lgbtqiapn-plus" : `${badgeColor} text-white mb-3`
                    }
                  >
                    {article.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 leading-tight line-clamp-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-2 text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    <div className="flex items-center space-x-2">
                      <User size={12} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={12} />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  {/* Botões de compartilhamento */}
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
      </div>
    </section>
  )
}

export function AllCategorySections() {
  const { t } = useLocale()

  const politicaArticles = [
    {
      id: 1,
      title: "Corrupção na Câmara Municipal: investigação revela esquema",
      excerpt: "Operação do Ministério Público apura desvio de recursos públicos...",
      category: t("politics"),
      author: "Fernanda Lima",
      date: "29 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 2,
      title: "Eleições 2024: Análise dos resultados em Rondônia",
      excerpt: "Cientistas políticos analisam os resultados eleitorais...",
      category: t("politics"),
      author: "Carlos Política",
      date: "28 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 3,
      title: "Reforma administrativa divide opiniões no Congresso",
      excerpt: "Deputados debatem mudanças na estrutura do governo...",
      category: t("politics"),
      author: "João Santos",
      date: "27 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 4,
      title: "Orçamento 2025: prioridades do governo estadual",
      excerpt: "Governador apresenta principais investimentos previstos...",
      category: t("politics"),
      author: "Ana Costa",
      date: "26 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 5,
      title: "Partidos se organizam para eleições de 2026",
      excerpt: "Movimentação política já começa para próximo pleito...",
      category: t("politics"),
      author: "Roberto Mendes",
      date: "25 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 6,
      title: "Nova lei de incentivo fiscal aprovada em RO",
      excerpt: "Medida visa atrair investimentos e gerar empregos na região...",
      category: t("politics"),
      author: "Mariana Economia",
      date: "24 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  const ambienteArticles = [
    {
      id: 7,
      title: "Desmatamento na Amazônia atinge novo recorde em Rondônia",
      excerpt: "Dados do INPE mostram aumento de 15% no desmatamento da região nos últimos 6 meses...",
      category: t("environment"),
      author: "Maria Silva",
      date: "2 de Fevereiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 8,
      title: "Projeto de reflorestamento ganha apoio internacional",
      excerpt: "ONG recebe recursos para plantar 1 milhão de árvores...",
      category: t("environment"),
      author: "Pedro Verde",
      date: "1 de Fevereiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 9,
      title: "Poluição do Rio Madeira preocupa especialistas",
      excerpt: "Níveis de contaminação aumentaram nos últimos meses...",
      category: t("environment"),
      author: "Carla Água",
      date: "31 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 10,
      title: "Reserva ambiental é criada em área de conflito",
      excerpt: "Governo federal estabelece nova unidade de conservação...",
      category: t("environment"),
      author: "José Floresta",
      date: "30 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 11,
      title: "Mudanças climáticas afetam agricultura local",
      excerpt: "Produtores relatam impactos das alterações no clima...",
      category: t("environment"),
      author: "Lucia Campo",
      date: "29 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 12,
      title: "Incêndios florestais: alerta máximo em Rondônia",
      excerpt: "Focos de queimadas aumentam com a seca, ameaçando a biodiversidade...",
      category: t("environment"),
      author: "Ricardo Fogo",
      date: "28 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  const humanRightsArticles = [
    {
      id: 13,
      title: "Defensores de Direitos Humanos sofrem ameaças na região",
      excerpt: "Relatório aponta aumento de casos de intimidação contra ativistas...",
      category: t("humanRights"),
      author: "Equipe Voz da Terra",
      date: "24 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 14,
      title: "Eleições municipais: candidatos apresentam propostas para LGBTQIAPN+",
      excerpt: "Políticas públicas para a comunidade LGBTQIAPN+ ganham destaque no debate eleitoral...",
      category: t("lgbtqiapnPlus"),
      author: "Ana Costa",
      date: "31 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 15,
      title: "Casa de acolhimento para jovens LGBTQIAPN+ é inaugurada",
      excerpt: "Espaço oferece apoio e moradia temporária para jovens...",
      category: t("lgbtqiapnPlus"),
      author: "Rafael Diversidade",
      date: "30 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 16,
      title: "Parada do Orgulho LGBTQIAPN+ bate recorde de público",
      excerpt: "Evento reuniu mais de 50 mil pessoas em Porto Velho...",
      category: t("lgbtqiapnPlus"),
      author: "Mariana Pride",
      date: "29 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 17,
      title: "Lei anti-discriminação é aprovada na Câmara Municipal",
      excerpt: "Projeto criminaliza discriminação por orientação sexual...",
      category: t("lgbtqiapnPlus"),
      author: "Carlos Direitos",
      date: "28 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 18,
      title: "Programa de capacitação profissional para trans é lançado",
      excerpt: "Iniciativa visa inserção no mercado de trabalho...",
      category: t("lgbtqiapnPlus"),
      author: "Fernanda Inclusão",
      date: "27 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  const povosOriginarios = [
    {
      id: 19,
      title: "Povos indígenas de RO lutam por demarcação de terras",
      excerpt: "Comunidades tradicionais enfrentam invasões e ameaças...",
      category: t("indigenousPeoples"),
      author: "João Santos",
      date: "1 de Fevereiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 20,
      title: "Festival de cultura indígena celebra tradições ancestrais",
      excerpt: "Evento reúne diferentes etnias da região Norte...",
      category: t("indigenousPeoples"),
      author: "Txai Suruí",
      date: "31 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 21,
      title: "Educação indígena ganha novo centro de ensino",
      excerpt: "Escola bilíngue preserva línguas nativas...",
      category: t("indigenousPeoples"),
      author: "Raoni Metuktire",
      date: "30 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 22,
      title: "Medicina tradicional indígena é reconhecida pelo SUS",
      excerpt: "Práticas ancestrais integram sistema de saúde...",
      category: t("indigenousPeoples"),
      author: "Ailton Krenak",
      date: "29 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 23,
      title: "Conflito por terra deixa indígenas em situação vulnerável",
      excerpt: "Invasores ameaçam comunidade tradicional...",
      category: t("indigenousPeoples"),
      author: "Sonia Guajajara",
      date: "28 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 24,
      title: "Demarcação de terras: avanço em pauta no Congresso",
      excerpt: "Debate sobre direitos territoriais indígenas ganha força...",
      category: t("indigenousPeoples"),
      author: "Davi Kopenawa",
      date: "27 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  const poderArticles = [
    {
      id: 25,
      title: "Concentração de poder: análise do cenário político regional",
      excerpt: "Especialistas analisam a influência de grupos econômicos...",
      category: t("power"),
      author: "Roberto Mendes",
      date: "28 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 26,
      title: "Lobby do agronegócio influencia decisões no Congresso",
      excerpt: "Bancada ruralista articula aprovação de projetos...",
      category: t("power"),
      author: "Patricia Investigação",
      date: "27 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 27,
      title: "Empresários financiam campanhas eleitorais em RO",
      excerpt: "Doações milionárias movimentam eleições locais...",
      category: t("power"),
      author: "Marcos Transparência",
      date: "26 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 28,
      title: "Mídia local concentrada nas mãos de poucos grupos",
      excerpt: "Oligopólio da comunicação preocupa especialistas...",
      category: t("power"),
      author: "Julia Comunicação",
      date: "25 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 29,
      title: "Contratos públicos beneficiam sempre as mesmas empresas",
      excerpt: "Licitações questionáveis chamam atenção do MP...",
      category: t("power"),
      author: "Diego Fiscalização",
      date: "24 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 30,
      title: "Escândalo de corrupção abala cúpula do governo estadual",
      excerpt: "Novas revelações sobre desvio de verbas públicas...",
      category: t("power"),
      author: "Jornalista Investigativo",
      date: "23 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  const agroArticles = [
    {
      id: 31,
      title: "Agronegócio vs Sustentabilidade: o debate em Porto Velho",
      excerpt: "Produtores rurais e ambientalistas discutem práticas sustentáveis...",
      category: t("agribusiness"),
      author: "Carlos Oliveira",
      date: "30 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 32,
      title: "Soja transgênica divide opiniões entre produtores",
      excerpt: "Tecnologia promete maior produtividade, mas gera controvérsia...",
      category: t("agribusiness"),
      author: "Fazendeiro João",
      date: "29 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 33,
      title: "Pecuária sustentável ganha espaço em Rondônia",
      excerpt: "Criadores adotam práticas mais ecológicas...",
      category: t("agribusiness"),
      author: "Maria Pecuária",
      date: "28 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 34,
      title: "Exportação de commodities bate recorde no estado",
      excerpt: "Rondônia se consolida como grande exportador...",
      category: t("agribusiness"),
      author: "Pedro Exportação",
      date: "27 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 35,
      title: "Tecnologia no campo: drones revolucionam agricultura",
      excerpt: "Inovação aumenta eficiência e reduz custos...",
      category: t("agribusiness"),
      author: "Tech Rural",
      date: "26 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 36,
      title: "Crise hídrica ameaça produção agrícola no interior",
      excerpt: "Falta de chuvas impacta lavouras e pecuária na região...",
      category: t("agribusiness"),
      author: "Clima Rural",
      date: "25 de Janeiro, 2025",
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  return (
    <div className="space-y-8">
      <CategorySection
        title={t("politics")}
        articles={politicaArticles}
        bgColor="bg-blue-900/20"
        badgeColor="bg-blue-600"
      />
      <CategorySection
        title={t("environment")}
        articles={ambienteArticles}
        bgColor="bg-green-900/20"
        badgeColor="bg-green-600"
      />
      <CategorySection
        title={t("indigenousPeoples")}
        articles={povosOriginarios}
        bgColor="bg-orange-900/20"
        badgeColor="bg-orange-600"
      />
      <CategorySection
        title={t("power")}
        articles={poderArticles}
        bgColor="bg-category-power" // Usando a nova variável CSS
        badgeColor="bg-badge-power" // Usando a nova variável CSS
      />
      <CategorySection
        title={t("agribusiness")}
        articles={agroArticles}
        bgColor="bg-yellow-900/20"
        badgeColor="bg-yellow-600"
      />
      {/* Seção de Direitos Humanos (anteriormente LGBTQIAPN+) movida para o final */}
      <CategorySection
        title={t("humanRights")} // Título da seção agora é "Direitos Humanos"
        articles={humanRightsArticles} // Continua usando os artigos LGBTQIAPN+
        bgColor="bg-[var(--category-human-rights-bg)]" // Nova cor de fundo
        badgeColor="bg-[var(--badge-human-rights-bg)]" // Nova cor de badge padrão (não afeta o badge LGBTQIAPN+)
      />
    </div>
  )
}
