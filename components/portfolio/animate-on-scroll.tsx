"use client"

import { Children, isValidElement, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setVisible(true))
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 20% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
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
