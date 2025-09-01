import React from "react"
import { Box } from "../layout"
import Container from "../ui/container"
import { Button } from "../ui/button"
import * as motion from "motion/react-client"
import { useTranslations } from "next-intl"
import { GetAppModal } from "../common"

const VideoWithTitleAndButton = () => {
  const t = useTranslations("Home")
  return (
    <Box
      title={t("UnlockEndlessPossibilities.title")}
      align="center"
      className="py-12 lg:py-18"
      titleClass="pb-6 lg:pb-8.5 lg:max-w-3xl lg:mx-auto"
    >
      <GetAppModal>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          aria-label="dialog"
          className="mb-8.5 text-center lg:mb-12"
        >
          <Button size={"lg"}>
            {t("UnlockEndlessPossibilities.buttonText")}
          </Button>
        </motion.div>
      </GetAppModal>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="aspect-[49/67] lg:aspect-[2.2/1]"
        >
          <video
            src="/card.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full rounded-4xl object-cover"
          />
        </motion.div>
      </Container>
    </Box>
  )
}

export default VideoWithTitleAndButton
