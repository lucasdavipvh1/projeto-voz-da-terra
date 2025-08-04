"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"
import { useLocale } from "@/context/locale-context"

interface NewsletterOverlayProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function NewsletterOverlay({ isOpen, setIsOpen }: NewsletterOverlayProps) {
  const { t } = useLocale()
  const [email, setEmail] = useState<string>("")
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setMessage("")
      setIsSubmitting(true)

      if (!email) {
        setMessage(t("emailRequired"))
        setIsSubmitting(false)
        return
      }
      if (!agreedToTerms) {
        setMessage(t("agreeToTermsRequired"))
        setIsSubmitting(false)
        return
      }

      // Simulação de envio para uma API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Newsletter Subscription:", { email, agreedToTerms })
      setMessage(t("newsletterSuccess"))
      setEmail("")
      setAgreedToTerms(false)
      setIsSubmitting(false)
      // Opcional: fechar o overlay após um tempo
      // setTimeout(() => closeOverlay(), 2000);
    },
    [email, agreedToTerms, t],
  )

  const closeOverlay = useCallback(() => {
    setIsOpen(false)
    setEmail("")
    setAgreedToTerms(false)
    setMessage("")
    setIsSubmitting(false)
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
        <h2 className="text-3xl font-bold text-white mb-6">{t("newsletterTitle")}</h2>
        <p className="text-gray-200 mb-6">{t("newsletterDescription")}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder={t("yourEmail")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/20 text-white placeholder:text-gray-300 text-lg p-3 rounded-lg border-none focus:ring-2 focus:ring-emerald-400 text-center"
              autoFocus
            />
          </div>

          <div className="flex items-center justify-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(!!checked)}
              className="border-gray-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:text-white"
            />
            <label htmlFor="terms" className="text-gray-200 text-sm cursor-pointer">
              {t("newsletterTerms")}
            </label>
          </div>

          {message && (
            <p className={`text-sm ${message.includes(t("newsletterSuccess")) ? "text-emerald-400" : "text-red-400"}`}>
              {message}
            </p>
          )}

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("subscribing") : t("subscribe")}
          </Button>
        </form>
      </div>
    </div>
  )
}
