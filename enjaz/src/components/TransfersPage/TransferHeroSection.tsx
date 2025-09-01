import Image from "next/image"
import React from "react"
import Typography from "../ui/typography"
import { Button } from "../ui/button"
import * as motion from "motion/react-client"
import {
  FadeIn,
  FadeUp,
  PopUp,
  TransferHeroSectionVariants,
} from "../Animations/MotionVariants"
import { GetAppModal, Hidden } from "../common"
import { useLocale, useTranslations } from "next-intl"
import Container from "../ui/container"

// Separate component for country flags with props
interface CountryFlagProps {
  src?: string
  countryCode?: string
}

const list = [
  {
    src: "/Egypt.png",
    countryCode: "EGY",
    position: "top-[20%] lg:left-[5%] left-5",
    arName: "مصر",
  },
  {
    src: "/pkr.svg",
    countryCode: "PKR",
    position: "top-[30%] right-[5%]",
    arName: "باكستان",
  },
  {
    src: "/php.svg",
    countryCode: "PHP",
    position: "bottom-[10%] left-0",
    arName: "الفليبين",
  },
  {
    src: "/ind.svg",
    countryCode: "IND",
    position: "right-5 bottom-[20%]",
    arName: "الهند",
  },
]

const CountryFlag = ({
  src = "/Egypt.png",
  countryCode = "EGY",
}: CountryFlagProps) => {
  return (
    <div className="flex w-fit items-center gap-4 overflow-hidden rounded-full border border-white/60 px-3 py-2 text-white">
      <div className="relative h-6 w-6 overflow-hidden rounded-b-full">
        <Image src={src} alt={countryCode} fill className="object-cover" />
      </div>
      <Typography color="white">{countryCode}</Typography>
    </div>
  )
}

// Component for flag positions
const FlagPositions = () => {
  const locale = useLocale()
  const isArabic = locale === "ar"
  return (
    <div className="pointer-events-none absolute bottom-0 left-1/2 z-2 h-1/2 w-5/6 -translate-x-1/2 lg:w-1/3">
      {list.map((item, index) => (
        <motion.div
          key={index}
          variants={PopUp}
          className={`absolute ${item.position} z-3 flex scale-90 items-center justify-center overflow-hidden rounded-full lg:scale-100`}
        >
          <CountryFlag
            src={item.src}
            countryCode={isArabic ? item.arName : item.countryCode}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Component for hero content
const HeroContent = () => {
  const t = useTranslations("TransfersPage.heroSection")
  return (
    <Container>
      <div className="relative z-4 -mt-50 flex flex-col items-center gap-1">
        <Hidden>
          <Typography
            variant="h1"
            component="h1"
            color="white"
            align={"center"}
          >
            <motion.span variants={FadeUp} className="inline-block">
              {t("title")}
            </motion.span>
          </Typography>
        </Hidden>
        <Hidden>
          <Typography color="light-gray" variant={"big-caption"}>
            <motion.span variants={FadeIn} className="inline-block">
              {t("description")}
            </motion.span>
          </Typography>
        </Hidden>
        <GetAppModal>
          <Hidden>
            <motion.div variants={FadeIn} className="inline-block lg:mt-8">
              <Button variant="gradient"> {t("buttonText")} </Button>
            </motion.div>
          </Hidden>
        </GetAppModal>
      </div>
    </Container>
  )
}

const TransferHeroSection = () => {
  return (
    <section className="relative grid h-lvh w-full place-items-center overflow-hidden bg-black">
      <div className="absolute -bottom-[60%] h-full w-full scale-190 overflow-hidden lg:scale-170">
        <video
          src="/transfers.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-none absolute z-1 h-full w-full object-cover object-bottom md:object-contain"
        />
      </div>
      <motion.div
        variants={TransferHeroSectionVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <HeroContent />
        <FlagPositions />
      </motion.div>
    </section>
  )
}

export default TransferHeroSection
