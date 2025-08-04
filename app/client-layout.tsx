"use client" // Este layout precisa ser um Client Component para usar useState

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { LocaleProvider } from "@/context/locale-context"
import { Suspense, useState } from "react"
import { Header } from "@/components/header" // Importar Header
import { SearchOverlay } from "@/components/search-overlay" // Importar SearchOverlay
import { LanguageSelector } from "@/components/language-selector" // Importar LanguageSelector
import { NewsTicker } from "@/components/news-ticker" // Importar NewsTicker
import { DonateButton } from "@/components/donate-button" // Importar DonateButton
import { DonateOverlay } from "@/components/donate-overlay" // Importar DonateOverlay
import { NewsletterButton } from "@/components/newsletter-button" // Novo: Importar NewsletterButton
import { NewsletterOverlay } from "@/components/newsletter-overlay" // Novo: Importar NewsletterOverlay
import { CopyCreditPopup } from "@/components/copy-credit-popup" // Novo: Importar CopyCreditPopup

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isDonateOpen, setIsDonateOpen] = useState(false)
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false) // Novo estado para o popup da newsletter

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.error('Theme initialization error:', e);
              }
            })();
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <LocaleProvider>
          <Suspense fallback={null}>
            <NewsTicker /> {/* Movido para antes do Header */}
            <Header setIsSearchOpen={setIsSearchOpen} /> {/* Passa a função para o Header */}
            {children}
            <SearchOverlay isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} /> {/* Renderiza o overlay de pesquisa */}
            <LanguageSelector /> {/* Seletor de idioma flutuante */}
            <DonateButton setIsOpen={setIsDonateOpen} /> {/* Botão de doação flutuante */}
            <DonateOverlay isOpen={isDonateOpen} setIsOpen={setIsDonateOpen} /> {/* Renderiza o overlay de doação */}
            <NewsletterButton setIsOpen={setIsNewsletterOpen} /> {/* Novo: Botão de newsletter flutuante */}
            <NewsletterOverlay isOpen={isNewsletterOpen} setIsOpen={setIsNewsletterOpen} />{" "}
            {/* Novo: Renderiza o overlay da newsletter */}
            <CopyCreditPopup /> {/* Novo: Renderiza o popup de crédito de cópia */}
          </Suspense>
        </LocaleProvider>
      </body>
    </html>
  )
}
