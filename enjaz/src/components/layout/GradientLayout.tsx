import React, { FC } from "react"
import Container from "../ui/container"
import GradientOverlay from "../common/GradientOverlay"
import Typography from "../ui/typography"
import { StrapiImage } from "../StrapiImage"

interface GradientLayoutProps {
  title: string
  description?: string
  imageSrc: string
}

const GradientLayout: FC<GradientLayoutProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <section className="relative min-h-svh">
      <StrapiImage
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      <GradientOverlay className="flex flex-col justify-end pb-10">
        <Container>
          <div className="flex max-w-4xl flex-col gap-4">
            <Typography
              variant="h1"
              component="h1"
              color="white"
              leading="tight"
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              leading="relaxed"
              color="white"
              weight="light"
              className="tracking-wide"
            >
              {description}
            </Typography>
          </div>
        </Container>
      </GradientOverlay>
    </section>
  )
}

export default GradientLayout
