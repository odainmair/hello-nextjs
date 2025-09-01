import { QuestionsProps } from "@/components/HomePage/FAQ"
import { useTranslations } from "next-intl"

// Array of quiz questions and answers
export const EnjazQuestions = () => {
  const t = useTranslations("FAQS")
  const questions = t.raw("questionsAndAnswes")

  return questions as QuestionsProps[]
}

export const TransfersQuestions = () => {
  const t = useTranslations("FAQS")
  const questions = t.raw("TransfersQuestions")

  return questions as QuestionsProps[]
}
