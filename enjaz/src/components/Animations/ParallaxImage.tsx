"use client"

import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import React, { FC, useRef } from "react"

type Props = {
  image: string
  alt: string
}

const ParallaxImage: FC<Props> = ({ alt, image }) => {
  // Create ref for the container element
  const containerRef = useRef(null)

  // Track scroll progress relative to viewport rather than container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Transform scroll progress (0-1) to scale values (1-1.15)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <motion.div
      ref={containerRef}
      className="absolute z-0 h-full w-full overflow-hidden"
      style={{
        scale: scale,
      }}
    >
      <Image
        fill
        src={image}
        alt={alt}
        priority
        sizes="103.15vw"
        className="object-cover"
        quality={100}
      />
    </motion.div>
  )
}

export default ParallaxImage
