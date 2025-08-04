"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import { useLocale } from "@/context/locale-context"

export function Footer() {
  const { t } = useLocale()
  return (
    <footer className="backdrop-blur-md bg-white/10 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-block hover:scale-110 transition-transform duration-300 hover:animate-pulse"
            >
              <Image
                src="/images/voz-da-terra-logo.png"
                alt="Voz da Terra"
                width={200}
                height={40}
                className="h-8 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">{t("nonProfitVehicle")}</p>
            <p className="text-gray-400 text-sm">Porto Velho, Rondônia - Região Norte do Brasil</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t("navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  {t("videos")}
                </Link>
              </li>
              <li>
                <Link href="/plenario" className="flex items-center">
                  <Image
                    src="/images/plenario-logo.png"
                    alt="Plenário"
                    width={150} // Reduzido para ser mais discreto no footer
                    height={45} // Reduzido para ser mais discreto no footer
                    className="hover:animate-float"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t("contact")}</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                contato@vozdaterra.com.br
              </p>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  )
}
