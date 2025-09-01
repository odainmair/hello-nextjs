import React from "react"
import { Box } from "../layout"
import Container from "../ui/container"
import { ChevronRight } from "lucide-react"
import Typography from "../ui/typography"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import Image from "next/image"
import AnimateInView from "../Animations/WhileInVeiw"

interface LinkToPageCardProps {
  icon: string
  title: string
  description: string
  link: string
  buttonText: string
}

const LinkToPageCard = ({
  icon,
  title,
  description,
  link,
  buttonText,
}: LinkToPageCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-8 pe-4 pb-8">
      <div className="grid h-15 w-15 place-items-center rounded-full bg-[#EAEAEA]">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="h-8 w-8 text-[#292D32]"
        />
      </div>
      <div className="flex flex-col gap-4 lg:pe-24">
        <Typography variant={"h3"} component={"h3"}>
          {title}
        </Typography>
        <Typography
          color={"gray"}
          variant={"h6"}
          className="pe-10"
          leading={"tight"}
        >
          {" "}
          {description}
        </Typography>

        <Link
          href={link}
          className="flex items-center text-base font-medium text-[#454545] transition-all duration-300 hover:opacity-90 lg:text-lg"
        >
          {buttonText}
          <ChevronRight className="h-5 w-5 rtl:rotate-180" />
        </Link>
      </div>
    </div>
  )
}

const CuriousForMore = () => {
  const t = useTranslations("CompanyPage.CuriousForMore")
  const list = t.raw("items") as LinkToPageCardProps[]

  return (
    <Box title={t("title")} align="center" className="pt-10 lg:pt-18">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {list.map((item, index) => (
            <AnimateInView
              key={index}
              delay={0.2 * index}
              duration={0.5}
              type="tween"
            >
              <LinkToPageCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                link={item.link}
                buttonText={item.buttonText}
              />
            </AnimateInView>
          ))}
        </div>
      </Container>
    </Box>
  )
}

export default CuriousForMore
