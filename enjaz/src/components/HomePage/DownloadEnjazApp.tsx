import React from "react"
import { Box } from "../layout"
import Container from "../ui/container"
import Typography from "../ui/typography"
import { FaApple, FaGooglePlay } from "react-icons/fa6"
import Image from "next/image"
import * as motion from "motion/react-client"
import { useTranslations } from "next-intl"
import { GetAppModal } from "../common"

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const DownloadEnjazApp = () => {
  const t = useTranslations("Home.DownloadEnjazApp")
  return (
    <Box className="pb-18 lg:min-h-auto">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative grid w-full grid-cols-1 overflow-hidden rounded-4xl bg-black pt-10 lg:aspect-[2.35/1] lg:grid-cols-2 lg:pt-0"
        >
          <motion.div
            variants={childVariants}
            className="flex w-full flex-col items-center justify-center gap-4 text-center lg:items-start lg:gap-8 lg:px-28 lg:text-start"
          >
            <motion.div variants={childVariants}>
              <Typography
                variant={"h1"}
                component={"h3"}
                color={"white"}
                weight={"normal"}
                className="flex flex-col"
              >
                {t.raw("title").map((item: string, index: any) => (
                  <span key={index}>{item}</span>
                ))}
              </Typography>
            </motion.div>

            <motion.div variants={childVariants}>
              <Typography
                variant={"h5"}
                weight={"medium"}
                color={"light-gray"}
                className="flex flex-col"
              >
                {t.raw("description").map((item: string, index: any) => (
                  <span key={index}>{item}</span>
                ))}
              </Typography>
            </motion.div>

            <GetAppModal>
              <div className="w-fit">
                <button className="bg flex w-max shrink-0 cursor-pointer items-center rounded-full bg-white px-8 py-3 text-4xl transition-all duration-300 hover:bg-white/90">
                  <FaApple size={26} />
                  <FaGooglePlay size={22} />
                  <Typography
                    component={"span"}
                    weight={"semibold"}
                    className="mx-2 mt-1"
                    variant={"h6"}
                  >
                    {t("buttonText")}
                  </Typography>
                </button>
              </div>
            </GetAppModal>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="relative h-[40vh] w-full px-10 lg:h-full"
          >
            <div className="absolute inset-0 mx-auto aspect-[1.2/2] h-full w-3/4 lg:mx-0">
              <Image
                src={"/05.webp"}
                alt="iphone"
                fill
                sizes="(min-width: 2040px) 630px, (min-width: 1040px) calc(29.49vw + 34px), 65.56vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}

export default DownloadEnjazApp
