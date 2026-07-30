"use client"

import { Send, Shield, Clapperboard, Search } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { FormEvent, useState } from "react"
import type { IconType } from "react-icons"
import {
  SiBlender,
  SiCplusplus,
  SiFigma,
  SiGithub,
  SiLaravel,
  SiPhp,
} from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb"
import { AnimateOnScroll, AnimateStagger } from "@/components/portfolio/animate-on-scroll"

type HardSkill = {
  name: string
  icon: IconType | LucideIcon
  color: string
  invertOnDark?: boolean
}

const HARD_SKILLS: HardSkill[] = [
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "C#", icon: TbBrandCSharp, color: "#68217A" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Git & GitHub", icon: SiGithub, color: "#181717", invertOnDark: true },
  { name: "CTF Basics", icon: Shield, color: "var(--primary)" },
  { name: "Blender", icon: SiBlender, color: "#F5792A" },
  { name: "Adobe After Effects", icon: Clapperboard, color: "#9999FF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Research & Analysis", icon: Search, color: "var(--primary)" },
]

const SOFT_SKILLS = [
  "Leadership",
  "Problem Solving",
  "Teamwork and Collaboration",
  "Adaptability",
  "Communication",
]

const INPUT_CLASS =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"

function SkillPill({ label }: { label: string }) {
  return (
    <span className="cursor-default rounded-full border border-primary/30 bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
      {label}
    </span>
  )
}

function SkillLogo({ skill }: { skill: HardSkill }) {
  const Icon = skill.icon

  return (
    <div
      title={skill.name}
      className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-3 transition-colors duration-300 hover:border-primary"
    >
      <Icon
        size={28}
        style={{ color: skill.color }}
        className={skill.invertOnDark ? "dark:invert" : undefined}
      />
      <span className="text-center text-[10px] font-medium leading-tight text-muted-foreground group-hover:text-foreground">
        {skill.name}
      </span>
    </div>
  )
}

export function MiddleSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFeedback(null)

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setFeedback({
        type: "error",
        message: "Form belum dikonfigurasi. Tambahkan NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY di .env.local",
      })
      return
    }

    setIsSubmitting(true)
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", accessKey)
    formData.append("from_name", "Portfolio — Fradyva")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const result = await response.json()

      if (result.success) {
        setFeedback({
          type: "success",
          message: "Pesan berhasil dikirim! Saya akan membalas segera.",
        })
        form.reset()
      } else {
        setFeedback({
          type: "error",
          message: result.message || "Gagal mengirim pesan. Coba lagi.",
        })
      }
    } catch {
      setFeedback({
        type: "error",
        message: "Terjadi kesalahan. Coba lagi nanti.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Skills & Competencies */}
      <section
        id="skills"
        className="border-t border-border px-4 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
              Skills &amp; Competencies
            </h2>
          </AnimateOnScroll>

          <AnimateStagger
            className="mt-10 flex flex-col items-start gap-6 lg:flex-row"
            baseDelay={450}
            stagger={300}
            childClassName="w-full"
          >
            {/* Hard Skills */}
            <div className="w-full flex-1 rounded-2xl border border-primary/25 bg-card p-6 transition-colors hover:border-primary md:p-8">
              <h3 className="font-display text-xl font-bold text-foreground">
                Hard Skills &amp; Tools
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Technical
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {HARD_SKILLS.map((skill) => (
                  <SkillLogo key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="h-fit w-full rounded-2xl border border-primary/25 bg-card p-6 transition-colors hover:border-primary md:w-auto md:p-8 lg:flex-none">
              <h3 className="font-display text-xl font-bold text-foreground">
                Soft Skills &amp; Strengths
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Personal
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {SOFT_SKILLS.map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </div>
          </AnimateStagger>
        </div>
      </section>

      {/* Contact Me */}
      <section
        id="contact"
        className="border-t border-border px-4 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll delay={200}>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
              Have a project in mind, a question, or just want to connect? Send me
              a message!
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={550}>
            <div className="mt-10 rounded-2xl border border-primary/25 bg-card p-6 transition-colors hover:border-primary md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className={INPUT_CLASS}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className={INPUT_CLASS}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+62 812 3456 7890"
                    className={INPUT_CLASS}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry / Collaboration / Greeting"
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Type your message here..."
                  className={`${INPUT_CLASS} resize-y`}
                />
              </div>

              {feedback && (
                <p
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    feedback.type === "success"
                      ? "border-primary/30 bg-primary/10 text-foreground"
                      : "border-destructive/30 bg-destructive/10 text-foreground"
                  }`}
                  role="status"
                >
                  {feedback.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:scale-[1.01] hover:opacity-90 disabled:pointer-events-none disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
