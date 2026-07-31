import { ArrowRight, ArrowUpRight } from "lucide-react"
import { AnimateOnScroll, AnimateStagger } from "@/components/portfolio/animate-on-scroll"

const PROJECTS = [
  {
    number: "01",
    tag: "Web Development",
    title: "KindlyJAR",
    description: "Designed databases and deployed a Laravel-based monolithic charity platform with integrated payment gateways.",
    image: "/images/project-web.jpg",
  },
  {
    number: "02",
    tag: "Creative Tech",
    title: "3D & Motion Graphics",
    description: "3D modeling in Blender and motion design with Adobe After Effects.",
    video: "/images/project-motion.mp4",
  },
  {
    number: "03",
    tag: "Cybersecurity",
    title: "CTF & Security Write-ups",
    description: "Capture The Flag challenges and security research documentation.",
    image: "/images/project-security.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-border px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
              Selected Projects
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              View All Projects
              <ArrowRight size={16} />
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateStagger
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          baseDelay={500}
          stagger={320}
          childClassName="h-full"
        >
          {PROJECTS.map((project) => (
            <article
              key={project.number}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                {"video" in project && project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold text-primary">
                    {project.number}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {project.tag}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </AnimateStagger>
      </div>
    </section>
  )
}
