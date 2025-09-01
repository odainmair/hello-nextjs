import { cn } from "@/lib/utils"
import React, { FC } from "react"

type Props = {
  children?: React.ReactNode
  className?: string
}

const GradientOverlay: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "absolute z-5 h-full w-full bg-linear-180 from-black/0 via-black/0 to-black/80 indent-0",
        className,
      )}
    >
      {children}
    </div>
  )
}

export default GradientOverlay
