import {
  CompanyHeroSection,
  EnjazInNumbers,
  WhatWeDo,
} from "@/components/CompanyPage"
import { DownloadEnjazApp, Faq } from "@/components/HomePage"
import { EnjazQuestions } from "@/lib/list"
import React from "react"

const Company = () => {
  return (
    <main>
      <CompanyHeroSection />
      <EnjazInNumbers />
      <WhatWeDo />
      {/* <OurTeam /> */}
      {/* <CuriousForMore /> */}
      <Faq title="Questions? Answers." questions={EnjazQuestions()} />
      <DownloadEnjazApp />
    </main>
  )
}

export default Company
