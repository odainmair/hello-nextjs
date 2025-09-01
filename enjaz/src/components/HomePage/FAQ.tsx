import React, { FC } from "react"
import { Box } from "../layout"
import Container from "../ui/container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import Typography from "../ui/typography"
import * as motion from "motion/react-client"
import { useLocale, useTranslations } from "next-intl"

export type QuestionsProps = {
  question: string
  answer?: string
}

type FAQProps = {
  title?: string
  questions: QuestionsProps[]
}

const Faq: FC<FAQProps> = ({ questions, title }) => {
  const t = useTranslations("FAQS")
  const locale = useLocale()
  const isArabic = locale === "ar"
  return (
    <Box
      title={title ?? t("title")}
      align="center"
      className="bg-white py-12 lg:py-18"
    >
      <Container>
        <Accordion type="single" collapsible>
          {questions.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className="py-5 transition-all duration-500 hover:opacity-80 lg:py-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.5,
                      type: "tween",
                      stiffness: 200,
                      damping: 30,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant={"h6"}
                    component={"h4"}
                    weight={"normal"}
                    align={isArabic ? "right" : "left"}
                  >
                    {item.question}
                  </Typography>
                </motion.div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography
                  variant={"body1"}
                  color={"gray"}
                  align={isArabic ? "right" : "left"}
                >
                  {item.answer}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  )
}

export default Faq
