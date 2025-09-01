"use client"
import React, { FC } from "react"
import Container from "../ui/container"
import { cn } from "@/lib/utils"
import Typography from "../ui/typography"
import Counter from "../Animations/Counter"
import * as motion from "motion/react-client"
import { useTranslations } from "next-intl"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"

type CardNumberProps = {
  className?: string
  number: number
  keyNumber?: "K" | "B" | "M" | undefined
  subtitle: string
  addPlus?: boolean | null
  places?: number[]
  sign?: string
}

const CardNumber: FC<CardNumberProps> = ({
  number,
  subtitle,
  className,
  keyNumber,
  places,
  addPlus,
  sign,
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)")
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="ms:text-6xl flex items-center text-5xl" dir="ltr">
        {sign && <div className="-mt-4 -mr-2">{sign}</div>}
        <div dir="ltr">
          <Counter
            value={number}
            places={places}
            fontSize={isMobile ? 50 : 60}
            padding={10}
            gap={0}
            textColor="black"
            fontWeight={400}
            bottomGradientStyle={{
              background: "linear-gradient(180deg, #00000000, #000000)",
            }}
            topGradientStyle={{
              background: "linear-gradient(180deg, #000000, #00000000)",
            }}
            counterStyle={{
              padding: 0,
            }}
          />
        </div>
        <div className="-mt-4">{keyNumber}</div>
        <div className="-mt-4">{addPlus && "+"}</div>
      </div>
      <Typography
        variant={"h5"}
        weight={"semibold"}
        color={"gray"}
        align={"center"}
        component={"h4"}
        className="-mt-2"
      >
        {subtitle}
      </Typography>
    </div>
  )
}

const EnjazInNumbers = () => {
  const t = useTranslations("CompanyPage.EnjazNumbers")
  return (
    <section className="pt-10 lg:pt-[52px]">
      <Container className="flex items-center justify-center lg:min-h-auto">
        <div className="w-screen md:px-20">
          {/* description  */}
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            whileInView={{
              opacity: 1,
              clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            }}
            transition={{
              duration: 0.7,
              staggerChildren: 0.5,
              when: "beforeChildren",
              ease: [0.87, 0, 0.13, 1],
            }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-[700px] justify-center text-center"
          >
            <Typography
              variant={"caption"}
              align={"center"}
              color={"gray"}
              className="max-w-[326px] lg:max-w-4xl lg:text-[20px]"
            >
              {t("description")}
            </Typography>
          </motion.div>

          {/* numbers  */}
          <div
            className="flex flex-wrap items-center justify-between gap-8 py-10 md:py-20"
            dir="ltr"
          >
            <CardNumber
              number={18}
              keyNumber="B"
              subtitle={t("transactions")}
              addPlus
              places={[10, 1]}
              sign="$"
            />
            <span className="hidden h-10 w-[0.5px] bg-black/60 md:h-18 lg:block" />
            <CardNumber
              number={290}
              subtitle={t("partnerBanks")}
              addPlus
              places={[100, 10, 1]}
            />

            <span className="hidden h-10 w-[0.5px] bg-black/60 md:h-18 lg:block" />
            <CardNumber
              number={900}
              subtitle={t("teamMembers")}
              addPlus
              places={[100, 10, 1]}
            />
            <span className="hidden h-10 w-[0.5px] bg-black/60 md:h-18 lg:block" />
            <CardNumber
              number={2}
              subtitle={t("appDownloads")}
              addPlus
              keyNumber="M"
              places={[1]}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EnjazInNumbers
