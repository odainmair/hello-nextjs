"use client"

import React, { useRef, useState, useEffect } from "react"
import Typography from "../ui/typography"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel"
import GradientOverlay from "../common/GradientOverlay"
import Image from "next/image"
import { Box } from "../layout"
import { useLocale, useTranslations } from "next-intl"
import { useInView, motion } from "motion/react"
import { ArrrowLeftIcon, ArrrowRightIcon } from "../Icons"

export type CarouselNavigationProps = {
  onPrev: () => void
  onNext: () => void
  slideLength: number
  currentSlide: number
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  onPrev,
  onNext,
  slideLength,
  currentSlide,
}) => (
  <div className="flex justify-end gap-6">
    <button
      className="bg-light grid h-9 w-9 cursor-pointer place-items-center overflow-hidden rounded-full disabled:opacity-50 lg:h-10 lg:w-10 rtl:rotate-180"
      onClick={onPrev}
      aria-label="Scroll to previous item"
      disabled={currentSlide === 0 || slideLength <= 1}
    >
      <ArrrowLeftIcon />
    </button>
    <button
      className="bg-light grid h-9 w-9 cursor-pointer place-items-center overflow-hidden rounded-full disabled:opacity-50 lg:h-10 lg:w-10 rtl:rotate-180"
      onClick={onNext}
      aria-label="Scroll to next item"
      disabled={currentSlide === slideLength - 1}
    >
      <ArrrowRightIcon />
    </button>
  </div>
)

const SliderWIthCards = () => {
  const ref = useRef(null)
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const locale = useLocale()
  const isEng = locale === "en"
  const t = useTranslations("Home") // Use the "Home" namespace

  const listItems = t.raw("stepIntoOurWorld.listItems")

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
      ref={ref}
      title={t("stepIntoOurWorld.title")}
      className="grid py-12 lg:py-18"
      titleClass="lg:pb-12"
    >
      {/* SLIDER */}
      <Carousel
        className="w-full overflow-hidden"
        setApi={setCarouselApi}
        opts={{
          slidesToScroll: "auto",
          dragFree: true,
          direction: isEng ? "ltr" : "rtl",
        }}
      >
        <CarouselContent className="ml-0 gap-3 ps-(--gallery-side-padding)">
          {listItems.map(
            (
              item: { title: string; description: string[]; image: string },
              i: number,
            ) => (
              <CarouselItem
                key={i}
                className="slide-up max-h-fit basis-3/4 p-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:basis-1/5"
              >
                <SliderCard
                  index={i}
                  description={item.description}
                  title={item.title}
                  image={item.image}
                />
              </CarouselItem>
            ),
          )}
        </CarouselContent>
      </Carousel>
      <div className="mt-8.5 flex flex-row-reverse justify-between pe-(--gallery-side-padding)">
        <CarouselNavigation
          onPrev={() => carouselApi?.scrollPrev()}
          onNext={() => carouselApi?.scrollNext()}
          slideLength={Number(listItems.length)}
          currentSlide={currentSlide}
        />
      </div>{" "}
    </Box>
  )
}

export default SliderWIthCards

const SliderCard = ({
  index,
  image,
  title,
  description,
}: {
  index: number
  image: string
  title: string
  description: string[]
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, {
    once: true,
  })

  const cardVariants = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: index * 0.1, // Stagger effect
      },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <figure className="group relative aspect-[44/67] h-full w-full overflow-hidden rounded-4xl lg:aspect-[1/2]">
        <Image
          src={image}
          alt={title || ""}
          fill
          sizes="(min-width: 2200px) calc(11vw + 181px), (min-width: 1040px) calc(18.25vw + 23px), (min-width: 780px) 23.33vw, (min-width: 640px) 30.83vw, 70.31vw"
          className="trnsition-all object-cover duration-500 ease-in-out group-hover:scale-110"
        />

        <GradientOverlay className="grid">
          <figcaption className="w-full place-self-end ps-8 pb-9 text-white">
            <Typography
              component={"h3"}
              weight={"normal"}
              className="mb-2.5 text-base"
            >
              {title}
            </Typography>
            {description.map((item, index) => (
              <Typography variant={"h5"} weight={"medium"} key={index}>
                {item}
              </Typography>
            ))}
          </figcaption>
        </GradientOverlay>
      </figure>
    </motion.div>
  )
}
