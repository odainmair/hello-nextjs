"use client"

import GradientOverlay from "../common/GradientOverlay"
import { Button } from "../ui/button"
import Typography from "../ui/typography"
import ParallaxImage from "../Animations/ParallaxImage"
import * as motion from "motion/react-client"
import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"
import { Hidden } from "../common"

const GetAppModal = dynamic(() => import("../common/GetAppModal"), {
  ssr: false,
})

const HeroSection = () => {
  const t = useTranslations()

  const heading = t("Home.heroTitle")
  return (
    <section className="relative grid h-svh place-items-center overflow-hidden pt-20">
      <ParallaxImage image="/home.webp" alt="hero-bg" />
      {/* overlay */}
      <GradientOverlay className="grid">
        {/* contant  */}
        <div className="mx-auto max-w-xl place-self-end pb-24 text-center">
          <Typography
            variant={"h1"}
            component={"h1"}
            align={"center"}
            color={"white"}
          >
            {heading.split(" ").map((item, idx) => (
              <motion.strong
                className="inline-block px-1 ltr:mb-2 rtl:mb-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.05,
                  duration: 0.5,
                  type: "tween",
                  stiffness: 200,
                  damping: 10,
                }}
                key={idx}
              >
                {item}
              </motion.strong>
            ))}
          </Typography>

          <Typography
            align={"center"}
            color={"light-gray"}
            variant={"big-caption"}
            component={"div"}
            className="flex w-full justify-center"
          >
            <Hidden>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                }}
                className="inline-block w-[283px] text-center sm:w-auto"
              >
                {t("Home.heroDescription")}
              </motion.span>
            </Hidden>
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.5,
              type: "tween",
              stiffness: 200,
              damping: 30,
            }}
          >
            <GetAppModal>
              <Button variant={"white"} size={"lg"} className="mt-8">
                {t("NavBar.getApp")}
              </Button>
            </GetAppModal>
          </motion.div>
        </div>
      </GradientOverlay>
    </section>
  )
}

export default HeroSection
