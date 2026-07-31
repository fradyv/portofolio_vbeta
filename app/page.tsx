import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { SkillsMarquee } from "@/components/portfolio/skills-marquee"
import { MiddleSection } from "@/components/portfolio/middle-section"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <main id="top" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <Hero />
      <Projects />
      <SkillsMarquee />
      <MiddleSection />
      <Contact />
    </main>
  )
}
