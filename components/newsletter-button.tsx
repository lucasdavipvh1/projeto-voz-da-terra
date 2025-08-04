"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useLocale } from "@/context/locale-context"

interface NewsletterButtonProps {
  setIsOpen: (isOpen: boolean) => void
}

export function NewsletterButton({ setIsOpen }: NewsletterButtonProps) {
  const { t } = useLocale()

  return (
    <Button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-24 right-8 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-pulse"
      size="icon"
      aria-label={t("newsletter")}
    >
      <Mail className="h-5 w-5" />
    </Button>
  )
}
