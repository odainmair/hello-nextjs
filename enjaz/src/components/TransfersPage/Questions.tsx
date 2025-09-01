import React from "react"
import { Faq } from "../HomePage"
import { TransfersQuestions } from "@/lib/list"

const Questions = () => {
  return <Faq questions={TransfersQuestions()} />
}

export default Questions
