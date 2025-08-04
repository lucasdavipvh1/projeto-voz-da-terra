"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect, useCallback } from "react"
import { X } from "lucide-react"
import { useLocale } from "@/context/locale-context"

type CopyCreditPopupProps = {}

export function CopyCreditPopup({}: CopyCreditPopupProps) {
  const { t } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const showPopup = useCallback(() => {
    // Verifica se o popup já foi mostrado nesta sessão
    const hasShownThisSession = sessionStorage.getItem("copyCreditShown")

    if (!hasShownThisSession) {
      setIsVisible(true)
      sessionStorage.setItem("copyCreditShown", "true") // Marca como mostrado para esta sessão

      // Limpa qualquer timeout anterior e define um novo para esconder o popup
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      const id = setTimeout(() => {
        setIsVisible(false)
      }, 5000) // O popup desaparece após 5 segundos
      setTimeoutId(id)
    }
  }, [timeoutId])

  useEffect(() => {
    const handleCopy = (event: ClipboardEvent) => {
      // Adiciona o texto de crédito ao conteúdo copiado
      const selectedText = window.getSelection()?.toString() || ""
      const creditText = `\n\n${t("copyCreditMessage")}`
      event.clipboardData?.setData("text/plain", selectedText + creditText)
      event.preventDefault() // Previne a cópia padrão para que possamos adicionar o crédito

      showPopup() // Exibe o popup
    }

    // Adiciona o listener para o evento 'copy'
    document.addEventListener("copy", handleCopy)

    return () => {
      // Remove o listener ao desmontar o componente
      document.removeEventListener("copy", handleCopy)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [showPopup, timeoutId, t])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[101] bg-emerald-800/90 backdrop-blur-md text-white px-6 py-3 rounded-lg shadow-xl flex items-center space-x-4 animate-in fade-in slide-in-from-bottom-full duration-500">
      <p className="text-sm">{t("copyCreditMessage")}</p>
      <Button
        onClick={() => {
          setIsVisible(false)
          if (timeoutId) clearTimeout(timeoutId)
        }}
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/20"
        aria-label={t("close")}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}
