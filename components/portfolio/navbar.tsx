"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggleTheme() {
    const root = document.documentElement
    const next = !root.classList.contains("dark")
    root.classList.toggle("dark", next)
    root.classList.toggle("light", !next)
    setIsDark(next)
  }

  return (
    <header className="sticky top-0 z-50 animate-nav-in border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a
          href="#top"
          className="font-brand text-3xl font-semibold text-foreground md:text-4xl"
        >
          Fradyva
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark and light mode"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}
