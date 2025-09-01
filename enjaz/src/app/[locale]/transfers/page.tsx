import { DownloadEnjazApp } from "@/components/HomePage"
import { MainLayout } from "@/components/layout"
import {
  MoreWayToSendMony,
  OneImageSlider,
  OurPartnerEcosystem,
  Questions,
  TransferHeroSection,
  TransferPartners,
} from "@/components/TransfersPage"
import React from "react"

const Transfers = () => {
  return (
    <MainLayout>
      <TransferHeroSection />
      <OneImageSlider />
      <TransferPartners />
      <MoreWayToSendMony />
      <OurPartnerEcosystem />
      <Questions />
      <DownloadEnjazApp />
    </MainLayout>
  )
}

export default Transfers
