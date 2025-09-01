import React, { FC, ReactNode } from "react"
import Container from "../ui/container"
import Typography from "../ui/typography"

type Props = {
  children?: ReactNode
  title?: string
  description?: string
  align?: "left" | "center" | "right" | "justify"
  removeLine?: boolean
}

const WhiteLayout: FC<Props> = ({
  children,
  description,
  title,
  align,
  removeLine,
}) => {
  return (
    <header className="mt-20 lg:mt-40">
      <Container>
        <div className="flex flex-col gap-4 pb-16">
          <Typography
            variant={"h2"}
            component={"h1"}
            align={align}
            weight={"semibold"}
          >
            {title}
          </Typography>
          {description && (
            <Typography color={"gray"} align={align} variant={"subtitle"}>
              <span className="inline-block max-w-xl">{description}</span>
            </Typography>
          )}
        </div>
        {!removeLine && (
          <div className="mx-auto mb-16 h-px w-3/4 bg-gray-200" />
        )}

        {children}
      </Container>
    </header>
  )
}

export default WhiteLayout
