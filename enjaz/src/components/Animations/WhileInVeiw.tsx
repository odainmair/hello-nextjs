"use client"
import { FC, ReactNode, useRef } from "react"
import { useInView, Variants, motion } from "motion/react"

type Props = {
  children: ReactNode
  variants?: Variants
  once?: boolean
  amount?: number | "some" | "all"
  margin?: string
  className?: string
  delay?: number
  duration?: number
  type?: "tween" | "spring" | "inertia"
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "none",
    },
  },
}

const AnimateInView: FC<Props> = ({
  children,
  variants = defaultVariants,
  once = true,
  amount = 0.5,
  className = "",
  delay = 0,
  duration = 0.6,
  type,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    amount,
  })

  const customVariants: Variants = {
    hidden: {
      ...variants.hidden,
      transition: {
        delay,
        duration,
        type,
      },
    },
    visible: {
      ...variants.visible,
      transition: {
        delay,
        duration,
        type,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimateInView
