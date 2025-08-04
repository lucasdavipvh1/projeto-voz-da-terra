"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { useLocale } from "@/context/locale-context"

interface DonateOverlayProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function DonateOverlay({ isOpen, setIsOpen }: DonateOverlayProps) {
  const { t, locale } = useLocale()
  const [donationAmount, setDonationAmount] = useState<string>("")
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const isBrazilianLocale = locale === "pt-BR"
  const minAmount = isBrazilianLocale ? 5 : 5 // R$5 ou $5
  const currencySymbol = isBrazilianLocale ? "R$" : "$"
  const currencyCode = isBrazilianLocale ? "BRL" : "USD"

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Permite apenas números e um ponto decimal
    if (/^\d*\.?\d*$/.test(value)) {
      setDonationAmount(value)
      setErrorMessage("")
      setQrCodeUrl("") // Limpa o QR code ao mudar o valor
    }
  }, [])

  const generateQrCode = useCallback(() => {
    const amount = Number.parseFloat(donationAmount)
    if (isNaN(amount) || amount < minAmount) {
      setErrorMessage(t("minimumDonationError", { minAmount: minAmount, currencySymbol: currencySymbol }))
      setQrCodeUrl("")
      return
    }

    // Simulação de geração de QR Code Pix
    // Em um cenário real, você faria uma chamada de API para um gateway de pagamento
    // que geraria o QR Code Pix com base no valor e outras informações.
    // Por exemplo: `fetch('/api/generate-pix-qr', { method: 'POST', body: JSON.stringify({ amount }) })`
    const simulatedQrData = `PixKey: vozdatr@email.com.br | Amount: ${currencySymbol}${amount.toFixed(2)} ${currencyCode}`
    setQrCodeUrl(
      `/placeholder.svg?height=200&width=200&query=QR code for Pix donation of ${currencySymbol}${amount.toFixed(2)}`,
    )
    setErrorMessage("")
  }, [donationAmount, minAmount, currencySymbol, currencyCode, t])

  const closeOverlay = useCallback(() => {
    setIsOpen(false)
    setDonationAmount("")
    setQrCodeUrl("")
    setErrorMessage("")
  }, [setIsOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlay()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, closeOverlay])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] backdrop-blur-md bg-black/70 flex flex-col items-center justify-center px-4 overflow-y-auto">
      <Button
        onClick={closeOverlay}
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10"
        aria-label={t("close")}
      >
        <X className="h-6 w-6" />
      </Button>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">{t("donateTitle")}</h2>

        {isBrazilianLocale ? (
          <>
            <p className="text-gray-200 mb-4">{t("enterAmount")}</p>
            <div className="flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-bold mr-2">{currencySymbol}</span>
              <Input
                type="number"
                step="0.01"
                min={minAmount}
                placeholder={minAmount.toFixed(2)}
                value={donationAmount}
                onChange={handleAmountChange}
                className="w-32 bg-white/20 text-white placeholder:text-gray-300 text-2xl p-2 rounded-lg border-none focus:ring-2 focus:ring-emerald-400 text-center"
                autoFocus
              />
            </div>
            {errorMessage && <p className="text-red-400 text-sm mb-4">{errorMessage}</p>}
            <Button
              onClick={generateQrCode}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-lg mb-6"
            >
              {t("generateQRCode")}
            </Button>

            {qrCodeUrl && (
              <div className="flex flex-col items-center">
                <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code Pix" className="w-48 h-48 rounded-lg mb-4" />
                <p className="text-emerald-200 text-sm">{t("scanToDonate")}</p>
              </div>
            )}
          </>
        ) : (
          <>
            <p className="text-gray-200 mb-6">{t("internationalDonationInfo")}</p>
            <p className="text-gray-300 text-sm mb-4">
              {t("minimumDonation", { minAmount: minAmount, currencySymbol: currencySymbol })}
            </p>
            <Button
              onClick={() => alert(t("contactForInternationalDonation"))}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-lg"
            >
              {t("contactUs")}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
