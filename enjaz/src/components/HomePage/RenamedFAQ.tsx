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

type FAQItemProps = {
  question: string
  answer?: string
}

type RenamedFAQProps = {
  title: string
  questions: FAQItemProps[]
}

const RenamedFAQ: FC<RenamedFAQProps> = ({ questions, title }) => {
  return (
    <Box title={title} align="center">
      <Container className="lg:px-32">
        <Accordion type="single" collapsible>
          {questions.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className="py-6">
                <Typography variant={"h4"} component={"h4"}>
                  {item.question}
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant={"h6"}>{item.answer}</Typography>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  )
}

export default RenamedFAQ
