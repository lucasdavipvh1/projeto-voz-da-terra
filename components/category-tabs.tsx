"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/context/locale-context"

export function CategoryTabs() {
  const { t } = useLocale()
  const [activeCategory, setActiveCategory] = useState(t("all"))

  const categories = [
    t("all"),
    t("politics"),
    t("environment"),
    t("lgbtqiapnPlus"),
    t("indigenousPeoples"),
    t("power"),
    t("agribusiness"),
  ]

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">{t("categories")}</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
