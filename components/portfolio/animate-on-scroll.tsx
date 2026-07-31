"use client"

import { Children, isValidElement, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let done = false

    const reveal = () => {
      if (done) return
      done = true
      requestAnimationFrame(() => setVisible(true))
    }

    const isInView = () => {
      const rect = el.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.95 && rect.bottom > 0
    }

    if (isInView()) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px 80px 0px" }
    )

    observer.observe(el)

    const fallback = window.setTimeout(reveal, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return { ref, visible }
}

type AnimateOnScrollProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  fade?: boolean
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  fade = false,
}: AnimateOnScrollProps) {
  const { ref, visible } = useInView()

  return (
    <div
      ref={ref}
      className={cn("reveal", fade && "reveal-fade", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

type AnimateStaggerProps = {
  children: React.ReactNode
  className?: string
  stagger?: number
  baseDelay?: number
  childClassName?: string
}

export function AnimateStagger({
  children,
  className,
  stagger = 280,
  baseDelay = 320,
  childClassName,
}: AnimateStaggerProps) {
  const { ref, visible } = useInView()

  return (
    <div ref={ref} className={cn("stagger-group", visible && "is-visible", className)}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child

        return (
          <div
            key={child.key ?? index}
            className={cn("reveal-child", childClassName)}
            style={{ transitionDelay: `${baseDelay + index * stagger}ms` }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}
