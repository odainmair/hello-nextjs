import React from "react"
import Container from "../ui/container"
import GradientOverlay from "../common/GradientOverlay"
import Image from "next/image"
import Typography from "../ui/typography"
import * as motion from "motion/react-client"
import { useTranslations } from "next-intl"

const CompanyHeroSection = () => {
  const t = useTranslations("CompanyPage")
  return (
    <section className="relative min-h-svh overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, y: -10 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 min-h-svh w-full"
      >
        <Image
          src="/company-bg.png"
          alt="header"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-top"
        />
      </motion.div>

      <GradientOverlay className="flex flex-col justify-end bg-black/10 pb-18 lg:justify-center lg:pb-0">
        <Container className="">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, staggerChildren: 1, delay: 1 }}
            className="mx-auto mt-10 flex max-w-[375px] flex-col px-[2%] md:max-w-2xl lg:gap-4 lg:px-4"
          >
            <Typography
              variant={"h1"}
              component={"h1"}
              color={"white"}
              align={"center"}
              weight={"semibold"}
              tracking={"enjaz"}
              className="rtl:lg:px-20"
            >
              {t("heroSection.title")
                .split(" ")
                .map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 1.5 }}
                    className="mx-1 inline-block"
                  >
                    {item}{" "}
                  </motion.span>
                ))}
            </Typography>

            <Typography
              variant={"big-caption"}
              align={"center"}
              className="text-secound-gray word-spacing-wide px-[15%] lg:px-4 lg:text-white"
            >
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 2.5,
                  },
                }}
              >
                {t("heroSection.description")}
              </motion.span>
            </Typography>
          </motion.div>
        </Container>
      </GradientOverlay>
    </section>
  )
}

export default CompanyHeroSection
