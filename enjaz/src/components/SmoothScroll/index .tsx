"use client"
import { ReactNode } from "react"
import { ReactLenis } from "lenis/react"

interface SmoothScrollProps {
  children: ReactNode
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.075 }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
