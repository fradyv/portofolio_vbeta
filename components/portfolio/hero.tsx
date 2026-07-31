import { MapPin, Code2, Boxes, GraduationCap } from "lucide-react"

const EXPLORING = [
  {
    icon: Code2,
    header: "Current Focus",
    subtitle: "Web Development & Cybersecurity",
  },
  {
    icon: Boxes,
    header: "Creative Tech",
    subtitle: "3D Modeling (Blender) & Motion Graphics (After Effects)",
  },
  {
    icon: GraduationCap,
    header: "Education",
    subtitle: "Informatics Student at Amikom University of Yogyakarta",
  },
]

export function Hero() {
  return (
    <section
      id="about"
      className="hero-section relative overflow-hidden px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16"
    >
      {/* Background layers */}
      <div aria-hidden="true" className="hero-radial-glow pointer-events-none absolute inset-0 z-0" />
      <div aria-hidden="true" className="hero-dot-grid pointer-events-none absolute inset-0 z-0" />

      {/* Watermark — upper-center behind portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[28%] z-0 flex -translate-y-1/2 justify-center px-4 md:top-[30%]"
      >
        <span
          className="watermark-outline animate-watermark-in select-none text-center font-display text-[clamp(2.75rem,12vw,9.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.04em]"
          style={{ animationDelay: "200ms" }}
        >
          FRADYVA
        </span>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
        {/* Left column */}
        <div className="order-2 lg:order-1 lg:col-span-4 lg:pb-4">
          <p
            className="animate-hero-in mb-3 font-display text-xl italic text-primary"
            style={{ animationDelay: "100ms" }}
          >
            Hello, I&apos;m
          </p>
          <h1
            className="animate-hero-in font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-foreground text-balance md:text-6xl"
            style={{ animationDelay: "200ms" }}
          >
            Fastu
            <br />
            Nadya
          </h1>
          <p
            className="animate-hero-in mt-4 text-sm font-semibold uppercase tracking-wide text-primary"
            style={{ animationDelay: "300ms" }}
          >
            Web Developer &amp; Cybersecurity Enthusiast
          </p>
          <p
            className="animate-hero-in mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty"
            style={{ animationDelay: "400ms" }}
          >
            An Informatics student with a strong interest in web development and
            cybersecurity. Built on solid programming logic, actively exploring
            new technology including 3D modeling and motion graphics, and driven
            to keep growing on IT projects.
          </p>
          <div
            className="animate-hero-in mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
            style={{ animationDelay: "500ms" }}
          >
            <MapPin size={14} className="text-primary" />
            YOGYAKARTA, INDONESIA
          </div>
        </div>

        {/* Center image */}
        <div
          className="animate-hero-scale-in order-1 flex justify-center self-end lg:order-2 lg:col-span-4"
          style={{ animationDelay: "350ms" }}
        >
          <div className="relative flex items-end justify-center">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[20%] h-32 w-[90%] -translate-x-1/2 rounded-[100%] bg-primary/25 blur-3xl md:top-[18%] md:h-40"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-1/2 h-12 w-[80%] -translate-x-1/2 rounded-[100%] bg-primary/30 blur-2xl md:bottom-12 md:h-16 md:w-[85%]"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-[85%] w-full max-w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl md:max-w-[480px]"
            />
            <img
              src="/images/profile.png"
              alt="Portrait of Fastu Nadya"
              className="relative z-10 h-[520px] w-auto max-w-full object-cover object-top drop-shadow-[0_28px_40px_rgba(107,142,159,0.35)] [mask-image:linear-gradient(to_bottom,black_72%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_72%,transparent_100%)] md:h-[680px]"
              style={{ aspectRatio: "3 / 4", display: "block" }}
            />
          </div>
        </div>

        {/* Right column: currently exploring */}
        <div className="order-3 flex flex-col gap-4 lg:col-span-4 lg:pb-4">
          <p
            className="animate-hero-in text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            style={{ animationDelay: "450ms" }}
          >
            Currently Exploring
          </p>
          {EXPLORING.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.header}
                className="animate-hero-in flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                style={{ animationDelay: `${550 + index * 100}ms` }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
                    {item.header}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground text-pretty">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
