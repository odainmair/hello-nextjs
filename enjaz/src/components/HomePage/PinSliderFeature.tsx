"use client"

import React, { useRef, useState } from "react"
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Typography from "../ui/typography"
import {
  AppleIcon,
  CartIcon,
  DiagramIcon,
  SamsungIcon,
  SendIcon,
  WorldIcon,
} from "../Icons"
import { useTranslations } from "next-intl"
import AnimateInView from "../Animations/WhileInVeiw"
import Container from "../ui/container"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"

const list = (t: any) => {
  return [
    {
      id: 1,
      image: t("globalImage"),
      buttonText: t("InternationalTransfers"),
      icon: <WorldIcon />,
    },
    {
      id: 2,
      image: t("localImage"),
      buttonText: t("LocalTransfers"),
      icon: <SendIcon />,
    },
    {
      id: 3,
      image: t("cardImage"),
      buttonText: t("Card Management"),
      icon: <CartIcon />,
    },
    {
      id: 4,
      image: t("insightsImage"),
      buttonText: t("SpendingInsights"),
      icon: <DiagramIcon />,
    },
    {
      id: 5,
      image: t("applePayImage"),
      buttonText: t("ApplePay"),
      icon: <AppleIcon />,
    },
    {
      id: 6,
      image: t("samsungPayImage"),
      buttonText: t("SamsungPay"),
      icon: <SamsungIcon />,
    },
  ]
}

const PinSliderFeature = () => {
  const t = useTranslations("Home.PinSLider")
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const activeButtonIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, list(t).length - 1],
  )

  activeButtonIndex.on("change", (value) => {
    setCurrentIndex(Math.round(value))
  })

  return isMobile ? (
    <div className="w-full text-red-50">
      <div className="h-lvh max-w-screen overflow-hidden bg-black">
        <Container>
          <div className="mb-4 flex flex-col gap-4 pt-14">
            <AnimateInView delay={0.75}>
              <Typography
                color={"white"}
                align={"center"}
                variant={"h2"}
                component={"h2"}
                weight={"semibold"}
                className="overflow-hidden"
              >
                {t("title")}
              </Typography>
            </AnimateInView>

            <AnimateInView delay={0.75}>
              <Typography
                color={"light-gray"}
                align={"center"}
                className="overflow-hidden px-2"
              >
                <motion.span className="inline-block">
                  {t("description")}
                </motion.span>
              </Typography>
            </AnimateInView>
          </div>

          {/* ------------start contant------------  */}
          <div className="flex max-h-max w-full flex-col items-end gap-4 overflow-hidden overflow-x-auto lg:flex-row lg:justify-center">
            {/* ----the buttons------  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              className="w-full overflow-x-scroll p-4 lg:w-auto lg:overflow-hidden lg:pb-12"
            >
              <div className="items-left grid auto-cols-max grid-flow-col gap-4 lg:flex lg:max-w-max lg:flex-col lg:pb-16">
                <AnimatePresence>
                  {list(t).map((item, index) => (
                    <motion.button
                      key={item.id}
                      className={cn(
                        "flex h-10 w-fit cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300", // Reduced min-w and px
                      )}
                      onClick={() => setCurrentIndex(index)}
                      animate={{
                        scale: currentIndex === index ? 1.1 : 1,
                        backgroundColor:
                          currentIndex === index ? "#ffffff" : "transparent",
                        color: currentIndex === index ? "#000000" : "#ffffff",
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      {item.icon}
                      {item.buttonText}
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ------the images----  */}
            <div className="relative aspect-[1.5/2] h-[80lvh] w-full overflow-hidden lg:h-[85lvh] lg:w-auto">
              <AnimatePresence>
                <motion.div
                  key={list(t)[currentIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }} // تخرج للشمال
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={list(t)[currentIndex].image}
                    alt="Screen"
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>
    </div>
  ) : (
    <motion.div ref={sectionRef} className="h-[350vh] w-full text-red-50">
      <div className="sticky top-0 left-0 h-lvh max-w-screen overflow-hidden bg-black">
        <Container>
          <div className="mb-4 flex flex-col gap-4 pt-14">
            <AnimateInView delay={0.75}>
              <Typography
                color={"white"}
                align={"center"}
                variant={"h2"}
                component={"h2"}
                weight={"semibold"}
                className="overflow-hidden"
              >
                {t("title")}
              </Typography>
            </AnimateInView>

            <AnimateInView delay={0.75}>
              <Typography
                color={"light-gray"}
                align={"center"}
                tracking={"wider"}
                className="overflow-hidden px-2"
              >
                <motion.span className="inline-block">
                  {t("description")}
                </motion.span>
              </Typography>
            </AnimateInView>
          </div>

          {/* ------------start contant------------  */}
          <div className="flex max-h-max w-full flex-col items-end gap-4 overflow-hidden overflow-x-auto lg:flex-row lg:justify-center">
            {/* ----the buttons------  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              className="w-full overflow-x-scroll p-4 lg:w-auto lg:overflow-hidden lg:pb-12"
            >
              <div className="items-left grid auto-cols-max grid-flow-col gap-4 lg:flex lg:max-w-max lg:flex-col lg:pb-16">
                <AnimatePresence>
                  {list(t).map((item, index) => (
                    <motion.button
                      key={item.id}
                      className={cn(
                        "flex h-10 w-fit cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300", // Reduced min-w and px
                      )}
                      onClick={() => setCurrentIndex(index)}
                      animate={{
                        scale: currentIndex === index ? 1.1 : 1,
                        backgroundColor:
                          currentIndex === index ? "#ffffff" : "transparent",
                        color: currentIndex === index ? "#000000" : "#ffffff",
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <span
                        className={cn(
                          "inline-block transition-all duration-300",
                          currentIndex === 5 && "text-white",
                        )}
                      >
                        {item.icon}
                      </span>
                      {item.buttonText}
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ------the images----  */}
            <div className="relative aspect-[1.5/2] h-[80lvh] w-full overflow-hidden lg:h-[85lvh] lg:w-auto">
              <AnimatePresence>
                <motion.div
                  key={list(t)[currentIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }} // تخرج للشمال
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={list(t)[currentIndex].image}
                    alt="Screen"
                    fill
                    sizes="87.5vw"
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>
    </motion.div>
  )
}

export default PinSliderFeature
