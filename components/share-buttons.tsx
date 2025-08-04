"use client"

import Link from "next/link"
import { Facebook, X, PhoneIcon as Whatsapp, RssIcon as Reddit, Instagram, Share2 } from "lucide-react" // Importar Reddit diretamente
import { useLocale } from "@/context/locale-context"

interface ShareButtonsProps {
  articleTitle: string
  articleExcerpt: string
  articleUrl: string
}

export function ShareButtons({ articleTitle, articleExcerpt, articleUrl }: ShareButtonsProps) {
  const { t } = useLocale()

  // Texto padrão para compartilhamento, sem emojis
  const shareText = t("shareArticleText", { title: articleTitle, excerpt: articleExcerpt })
  const encodedShareText = encodeURIComponent(shareText)
  const encodedArticleUrl = encodeURIComponent(articleUrl)

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedArticleUrl}&quote=${encodedShareText}`,
      tooltip: "Compartilhar no Facebook",
    },
    {
      name: "X (Twitter)",
      icon: X, // Ícone X é o logo atual do Twitter
      href: `https://twitter.com/intent/tweet?url=${encodedArticleUrl}&text=${encodedShareText}`,
      tooltip: "Compartilhar no X (Twitter)",
    },
    {
      name: "WhatsApp",
      icon: Whatsapp,
      href: `https://api.whatsapp.com/send?text=${encodedShareText}%20${encodedArticleUrl}`,
      tooltip: "Compartilhar no WhatsApp",
    },
    {
      name: "Reddit",
      icon: Reddit, // Ícone oficial do Reddit
      href: `https://www.reddit.com/submit?url=${encodedArticleUrl}&title=${encodedShareText}`,
      tooltip: "Compartilhar no Reddit",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/", // Instagram não suporta compartilhamento direto de posts via web.
      tooltip: "Compartilhar no Instagram (requer upload manual)",
    },
    {
      name: "Bluesky",
      icon: Share2, // Ícone genérico para Bluesky, pois não há um ícone específico no Lucide
      href: "https://bsky.app/", // Bluesky não suporta compartilhamento direto de posts via web.
      tooltip: "Compartilhar no Bluesky (requer upload manual)",
    },
  ]

  return (
    <div className="flex space-x-3 mt-4 pt-4 border-t border-white/20 dark:border-white/10">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 hover:animate-float"
          title={social.tooltip}
        >
          <social.icon size={20} />
        </Link>
      ))}
    </div>
  )
}
