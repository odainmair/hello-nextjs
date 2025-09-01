"use client"
import React, { useRef, useEffect } from "react"
import { motion, useInView } from "motion/react"
import { useTranslations } from "next-intl"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"

const VideoWithTitle = () => {
  const t = useTranslations("Home.globalVideos")
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { amount: 0.1 })
  const isMobile = useMediaQuery("(max-width: 600px)")

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(console.error)
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  return (
    <motion.div ref={ref}>
      <motion.div
        className="relative h-screen w-full"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="absolute inset-0 top-0 left-0 z-1">
          <video
            ref={videoRef}
            src={isMobile ? t("mobileVideo") : t("deskTopVideo")}
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>

        {/* <GradientOverlay className="z-20 flex justify-center from-black/50 from-0% to-black/50 pt-[10%]">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Typography
              variant="h1"
              component={"h2"}
              color={"white"}
              align={"center"}
              weight={"semibold"}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Send Money without Borders.
              </motion.span>
            </Typography>

            <Typography
              variant="h1"
              component={"h2"}
              align={"center"}
              color={"linear-red"}
              weight={"semibold"}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                // animate={
                //   isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                // }
                transition={{ duration: 1, delay: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Instantly.
              </motion.span>
            </Typography>
          </motion.div>
        </GradientOverlay> */}
      </motion.div>
    </motion.div>
  )
}

export default VideoWithTitle
