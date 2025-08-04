"use client"

import { Button } from "@/components/ui/button"
import { HandCoins } from "lucide-react"
import { useLocale } from "@/context/locale-context"

interface DonateButtonProps {
  setIsOpen: (isOpen: boolean) => void
}

export function DonateButton({ setIsOpen }: DonateButtonProps) {
  const { t } = useLocale()

  return (
    <Button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-8 left-8 z-50 bg-yellow-500 hover:bg-yellow-600 text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 animate-pulse"
      size="icon"
      aria-label={t("donate")}
    >
      <HandCoins className="h-5 w-5" />
    </Button>
  )
}
