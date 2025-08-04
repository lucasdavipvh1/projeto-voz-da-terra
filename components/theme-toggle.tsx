"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    setIsDark(dark)
  }

  useEffect(() => {
    setMounted(true)

    const savedTheme = localStorage.getItem("theme")
    if (savedTheme !== null) {
      applyTheme(savedTheme === "dark")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      applyTheme(prefersDark)
      localStorage.setItem("theme", prefersDark ? "dark" : "light")
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme") === null) {
        applyTheme(e.matches)
      }
    }
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    applyTheme(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 animate-pulse">
        <span className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg translate-x-1"></span>
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-transparent
        backdrop-blur-md
        ${isDark ? "bg-emerald-600/50 shadow-inner" : "bg-white/30 shadow-inner"}
      `}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      <span
        className={`
          inline-flex h-5 w-5 transform rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out
          items-center justify-center
          ${isDark ? "translate-x-5" : "translate-x-0.5"}
        `}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
        ) : (
          <Sun className="h-3.5 w-3.5 text-yellow-500 flex-shrink-0" strokeWidth={2.5} />
        )}
      </span>
    </button>
  )
}
