import React from "react"
import Container from "../ui/container"
import Typography from "../ui/typography"
import Image from "next/image"
import AnimateInView from "../Animations/WhileInVeiw"
import { useTranslations } from "next-intl"

const WhatWeDo = () => {
  const t = useTranslations("CompanyPage.WhatWeDo")
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="grid grid-cols-12 justify-between gap-8">
          {/* content */}
          <div className="col-span-12 grid place-content-center justify-between gap-3 md:col-span-6 lg:gap-8 lg:pe-24">
            <AnimateInView duration={1} delay={0.2}>
              <Typography
                variant={"h2"}
                component={"h2"}
                className="max-w-[254px] md:max-w-md"
              >
                {t("title")}
              </Typography>
            </AnimateInView>
            <AnimateInView duration={1} delay={0.2}>
              <Typography
                color={"gray"}
                variant={"subtitle"}
                leading={"normal"}
              >
                {t("description")}
              </Typography>
            </AnimateInView>
          </div>

          {/* image */}
          <div className="relative col-span-12 md:col-span-6">
            <AnimateInView duration={1}>
              <div className="flex lg:justify-end">
                <div className="relative aspect-[1/1.1] h-full w-full overflow-hidden rounded-3xl lg:h-[600px] lg:w-[550px]">
                  <Image
                    src={"/Card.png"}
                    alt="card"
                    fill
                    sizes="100vw"
                    quality={100}
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhatWeDo
