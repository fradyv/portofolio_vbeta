import { Mail, ArrowUpRight } from "lucide-react"
import { AnimateOnScroll, AnimateStagger } from "@/components/portfolio/animate-on-scroll"

const SOCIAL_LINKS = [
  {
    label: "Email",
    href: "mailto:fastunadya@gmail.com",
    icon: (
      <Mail size={22} strokeWidth={1.75} />
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/fradyv",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fastu-nadya-p/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.062 2.062 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nndyva_?igsh=ZnZpOGs3c2tjOHpp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
]

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <AnimateStagger
        className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 px-4 py-16 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20"
        baseDelay={350}
        stagger={350}
      >
        {/* Column 1 — Get in Touch */}
        <div className="min-w-0">
          <h2 className="font-display text-[clamp(2rem,9vw,3rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            Let&apos;s Work
            <br />
            Together
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty md:mt-8 md:text-base">
            Currently open to new projects and collaborations. Let&apos;s create
            something meaningful that drives results.
          </p>
          <a
            href="mailto:fastunadya@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover md:mt-8"
          >
            Available for Projects
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Column 2 — Connect with Us */}
        <div className="min-w-0 lg:text-right">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Connect with Me
          </p>
          <div className="flex items-center gap-5 lg:justify-end">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={link.label}
                className="text-foreground transition-colors hover:text-primary"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </AnimateStagger>

      {/* Copyright bar */}
      <AnimateOnScroll fade delay={600}>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-8">
            <a
              href="#top"
              className="font-brand text-2xl font-semibold text-foreground"
            >
              Fradyva
            </a>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Fradyva. All Rights Reserved.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  )
}
