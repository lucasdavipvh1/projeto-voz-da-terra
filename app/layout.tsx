import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client-layout" // Corrigido para importação padrão
import "./globals.css" // Importação do globals.css

export const metadata: Metadata = {
  title: "Voz da Terra - Jornalismo Independente da Região Norte",
  description:
    "O único veículo jornalístico sem fins lucrativos da região Norte do Brasil, situado em Porto Velho, Rondônia.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
