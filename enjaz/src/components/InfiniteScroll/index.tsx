"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react"
import { wrap } from "@motionone/utils"
import { ReactNode } from "react"
import useMeasure from "react-use-measure"

interface ParallaxProps {
  children: ReactNode
  baseVelocity?: number
  maxRepeats?: number
}

function InfiniteScroll({
  children,
  baseVelocity = 100,
  maxRepeats = 10,
}: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  // // Use useMeasure to get the dimensions without useEffect
  // const [containerRef, { width: containerWidth }] = useMeasure();
  // const [contentRef, { width: contentWidth }] = useMeasure();

  // // Calculate repeats and totalWidth once dimensions are available
  // const repeats = contentWidth > 0 ? Math.ceil(containerWidth / contentWidth) + 2 : 4;
  // const totalWidth = contentWidth * repeats;

  // // Adjust the x transform to wrap correctly
  // const x = useTransform(baseX, (v) => `${wrap(-totalWidth, 0, v)}px`);

  const [containerRef, { width: containerWidth }] = useMeasure()
  const [contentRef, { width: contentWidth }] = useMeasure()

  // Calculate the number of repeats needed
  const repeatsNeeded =
    contentWidth > 0 ? Math.ceil(containerWidth / contentWidth) + 2 : 4
  const repeats = Math.min(repeatsNeeded, maxRepeats)

  // const totalWidth = contentWidth * repeats;

  // Adjust the wrap function to loop correctly
  const x = useTransform(baseX, (v) => `${wrap(-contentWidth, 0, v)}px`)

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <motion.div
        className="flex flex-nowrap"
        style={{ x, willChange: "transform" }}
      >
        {Array.from({ length: repeats }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? contentRef : null}
            className="flex flex-nowrap"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteScroll

// import { useRef } from 'react';
// import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';
// import { wrap } from '@motionone/utils';
// import { ReactNode } from 'react';
// import useMeasure from 'react-use-measure';

// interface ParallaxProps {
//   children: ReactNode;
//   baseVelocity?: number;
//   maxRepeats?: number;
// }

// function ParallaxCard({ children, baseVelocity = 100, maxRepeats = 10 }: ParallaxProps) {
//   const baseX = useMotionValue(0);

//   useAnimationFrame((t, delta) => {
//     const moveBy = baseVelocity * (delta / 1000);
//     baseX.set(baseX.get() + moveBy);
//   });

//   const [containerRef, { width: containerWidth }] = useMeasure();
//   const [contentRef, { width: contentWidth }] = useMeasure();

//   // Calculate the number of repeats needed
//   const repeatsNeeded = contentWidth > 0 ? Math.ceil(containerWidth / contentWidth) + 2 : 4;
//   const repeats = Math.min(repeatsNeeded, maxRepeats);

//   const totalWidth = contentWidth * repeats;

//   // Adjust the wrap function to loop correctly
//   const x = useTransform(baseX, (v) => `${wrap(-contentWidth, 0, v)}px`);

//   return (
//     <div className="w-full overflow-hidden" ref={containerRef}>
//       <motion.div className="flex flex-nowrap" style={{ x, willChange: 'transform' }}>
//         {Array.from({ length: repeats }).map((_, i) => (
//           <div key={i} ref={i === 0 ? contentRef : null} className="flex flex-nowrap">
//             {children}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default ParallaxCard;
