import type { IconType } from "react-icons"
import {
  SiBlender,
  SiFigma,
  SiGit,
  SiGithub,
  SiKalilinux,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPostman,
  SiPython,
} from "react-icons/si"
import { TbBrandAdobeAfterEffect } from "react-icons/tb"
import { AnimateOnScroll } from "@/components/portfolio/animate-on-scroll"

type TechStackItem = {
  name: string
  icon: IconType
  color: string
  invertOnDark?: boolean
}

const TECH_STACK: TechStackItem[] = [
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Kali Linux", icon: SiKalilinux, color: "#557C94" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717", invertOnDark: true },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Blender", icon: SiBlender, color: "#F5792A" },
  { name: "Adobe After Effects", icon: TbBrandAdobeAfterEffect, color: "#9999FF" },
]

function SkillCard({ item }: { item: TechStackItem }) {
  const Icon = item.icon

  return (
    <div
      className="group/icon relative flex shrink-0 items-center justify-center px-3 py-2"
      aria-label={item.name}
    >
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-11 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-md border border-primary/30 bg-white px-3 py-1 text-xs font-medium text-[#587B8C] opacity-0 shadow-lg transition-all duration-300 group-active/icon:-translate-y-1 group-active/icon:opacity-100 group-hover/icon:-translate-y-1 group-hover/icon:opacity-100 md:-top-12 dark:border-[#6B8E9F]/30 dark:bg-[#161C18] dark:text-[#6B8E9F]"
      >
        {item.name}
      </span>

      <div className="relative flex h-[3.75rem] w-[3.75rem] items-center justify-center md:h-16 md:w-16">
        <span
          aria-hidden="true"
          className="absolute inset-0 m-auto -z-10 h-14 w-14 scale-75 rounded-full bg-[#6B8E9F]/25 opacity-0 blur-xl transition-all duration-300 group-active/icon:scale-125 group-active/icon:opacity-100 group-hover/icon:scale-125 group-hover/icon:opacity-100 md:h-16 md:w-16"
        />
        <Icon
          size={48}
          style={{ color: item.color }}
          className={`relative z-10 h-12 w-12 transition-transform duration-300 group-active/icon:scale-110 group-hover/icon:scale-110 md:h-14 md:w-14 md:group-active/icon:scale-125 md:group-hover/icon:scale-125 ${
            item.invertOnDark ? "dark:invert" : ""
          }`}
        />
      </div>
    </div>
  )
}

function LogoMarquee() {
  return (
    <div className="relative w-full select-none pb-6 md:pb-8">
      <div className="relative overflow-hidden px-2 pb-6 pt-[4.25rem] md:px-0 md:pb-4 md:pt-[4.5rem]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-16 md:w-32"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-16 md:w-32"
        />

        <div className="flex w-max animate-marquee">
          <div className="flex shrink-0 items-center gap-6 pr-6 md:gap-8 md:pr-8">
            {TECH_STACK.map((item, idx) => (
              <SkillCard key={`set1-${idx}`} item={item} />
            ))}
          </div>
          <div
            className="flex shrink-0 items-center gap-6 pr-6 md:gap-8 md:pr-8"
            aria-hidden="true"
          >
            {TECH_STACK.map((item, idx) => (
              <SkillCard key={`set2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkillsMarquee() {
  return (
    <section
      id="skills"
      className="border-t border-border px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
            Skills &amp; Tools
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Tech Stack
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} fade>
          <div className="mt-10 -mx-4 md:mx-0">
            <LogoMarquee />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
