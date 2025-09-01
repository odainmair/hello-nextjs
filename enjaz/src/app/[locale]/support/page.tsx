import { DownloadEnjazApp, Faq } from "@/components/HomePage"
import { MainLayout } from "@/components/layout"
import { ReachUs } from "@/components/SupportPage"
import { EnjazQuestions } from "@/lib/list"
import React from "react"

const SupportPage = () => {
  return (
    <MainLayout>
      <ReachUs />
      <Faq title="Questions? Answers." questions={EnjazQuestions()} />
      <DownloadEnjazApp />
    </MainLayout>
  )
}

export default SupportPage
