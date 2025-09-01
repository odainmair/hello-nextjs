"use client"
import React, { useEffect, useState } from "react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { CarouselNavigation } from "../HomePage/SliderWIthCards"
import { motion } from "motion/react"
import { Box } from "../layout"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"

type ListItem = {
  title: string
  image: string
  mobileImage: string
}

const CardWithLotteFile = ({ alt, image }: { image: string; alt: string }) => {
  return (
    <div className="relative aspect-[1/1.5] h-full w-full overflow-hidden rounded-4xl lg:aspect-[7/4]">
      <Image
        src={image}
        alt={alt}
        fill
        className="pointer-events-none object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
        {/* <EgyptLottie /> */}
      </div>
    </div>
  )
}

const OneImageSlider = () => {
  const t = useTranslations("TransfersPage.MltipleTransfers")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const locale = useLocale()
  const isEng = locale === "en"

  const list = t.raw("listItems") as ListItem[]

  // Update current slide index when carousel changes
  useEffect(() => {
    if (!carouselApi) return

    const updateSlide = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }

    updateSlide() // Initial slide
    carouselApi.on("select", updateSlide)

    return () => {
      carouselApi.off("select", updateSlide)
    }
  }, [carouselApi])

  return (
    <Box
      align={"center"}
      title={t("title")}
      description={t("description")}
      descriptionClass="md:max-w-[630px] w-[90%]"
      titleClass="pb-2.5"
      className="my-12 lg:my-[72px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            type: "tween",
            stiffness: 200,
            damping: 30,
            delay: 0.2,
          },
        }}
        viewport={{ once: true }}
      >
        <Carousel
          setApi={setCarouselApi}
          opts={{
            direction: isEng ? "ltr" : "rtl",
          }}
        >
          <CarouselContent className="ps-(--gallery-side-padding)">
            {list.map((item, index) => (
              <CarouselItem key={index} className="basis-3/4 lg:basis-4/5">
                <CardWithLotteFile
                  alt={item.title}
                  image={isMobile ? item.mobileImage : item.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex flex-row-reverse justify-between pe-(--gallery-side-padding)">
          <CarouselNavigation
            onPrev={() => carouselApi?.scrollPrev()}
            onNext={() => carouselApi?.scrollNext()}
            slideLength={Number(list.length)}
            currentSlide={currentSlide}
          />
        </div>{" "}
      </motion.div>
    </Box>
  )
}

export default OneImageSlider
