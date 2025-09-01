"use client"

import React from "react"
import { Box } from "../layout"
import InfiniteScroll from "../InfiniteScroll"
import Container from "../ui/container"
import Image from "next/image"
import { useTranslations } from "next-intl"

// const list = ["/p-1.png", "/p-2.png", "/p-3.png", "/p-4.png", "/p-5.png"]

const OurPartnerEcosystem = () => {
  const t = useTranslations("TransfersPage")
  const list = t.raw("PartnersLogs") as string[]
  return (
    <Box
      title={t("OurPartnerEcosystem")}
      align="center"
      className="py-20"
      dir="ltr"
    >
      <Container>
        <InfiniteScroll baseVelocity={80}>
          {list.map((item, index) => (
            <div
              className="relative mx-12 aspect-[1/2] h-14 w-48 px-5"
              key={index}
            >
              <Image src={item} alt="logo" fill className="object-contain" />
            </div>
          ))}
        </InfiniteScroll>
      </Container>
    </Box>
  )
}

export default OurPartnerEcosystem
