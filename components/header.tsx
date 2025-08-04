"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react" // Importar Search
import { ThemeToggle } from "@/components/theme-toggle"
import { useLocale } from "@/context/locale-context"

interface HeaderProps {
  setIsSearchOpen: (isOpen: boolean) => void
}

export function Header({ setIsSearchOpen }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { t } = useLocale()

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("aboutUs"), href: "/our-story" }, // Alterado para usar t("aboutUs") e apontar para /our-story
    { name: t("contact"), href: "/contact" },
    { name: t("videos"), href: "/videos" },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <header
      className={`backdrop-blur-md bg-white/90 dark:bg-[var(--header-bg-dark)] sticky top-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Voz da Terra */}
          <Link href="/" className="flex items-center space-x-4 hover:scale-110 transition-transform duration-300">
            <Image
              src="/images/voz-da-terra-logo.png"
              alt="Voz da Terra"
              width={200}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navegação Desktop (visível no desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            {/* Aplicado hover:animate-float diretamente na Image */}
            <Link href="/plenario" className="flex items-center">
              <Image
                src="/images/plenario-logo.png"
                alt="Plenário"
                width={150}
                height={45}
                className="hover:animate-float" // Movido para cá
              />
            </Link>
          </nav>

          {/* Botão do Hambúrguer (visível apenas em mobile) e Theme Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              onClick={() => setIsSearchOpen(true)} // Abre o overlay de pesquisa
              aria-label={t("search")}
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Search Button e Theme Toggle (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              onClick={() => setIsSearchOpen(true)} // Abre o overlay de pesquisa
              aria-label={t("search")}
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Menu Hambúrguer Mobile */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4 border-t border-gray-200 dark:border-white/20
                     backdrop-blur-md bg-[var(--menu-glass-bg-light)] dark:bg-[var(--menu-glass-bg-dark)]"
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--menu-glass-text-light)] dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/plenario" className="px-4 py-2" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/plenario-logo.png"
                  alt="Plenário"
                  width={150}
                  height={45}
                  className="hover:animate-float" // Movido para cá
                />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
