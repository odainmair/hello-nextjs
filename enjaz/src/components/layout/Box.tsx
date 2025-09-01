import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"
import Typography from "../ui/typography"
import Container from "../ui/container"
import * as motion from "motion/react-client"

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  align?: "left" | "center" | "right" | "justify"
  description?: string
  descriptionClass?: string
  titleClass?: string
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      className,
      title,
      align,
      description,
      descriptionClass,
      titleClass,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {title && (
          <Container>
            <motion.div
              initial={{
                opacity: 0,
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
              whileInView={{
                opacity: 1,
                clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
              }}
              transition={{
                duration: 0.7,
                staggerChildren: 0.5,
                when: "beforeChildren",
                ease: [0.87, 0, 0.13, 1],
              }}
              viewport={{
                once: true,
              }}
            >
              <Typography
                variant={"h2"}
                component={"h2"}
                align={align}
                weight={"semibold"}
                leading={"normal"}
                className={cn(`pb-8.5`, titleClass)}
              >
                <span className="inline-block md:max-w-4xl">{title}</span>
              </Typography>
            </motion.div>
          </Container>
        )}
        {description && (
          <Container>
            <motion.div
              initial={{ opacity: 0.05, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant={"subtitle"}
                align={"center"}
                color={"gray"}
                className={cn("mx-auto pb-10 md:max-w-1/2", descriptionClass)}
              >
                {description}
              </Typography>
            </motion.div>
          </Container>
        )}
        {children}
      </div>
    )
  },
)

Box.displayName = "Box"

export default Box
