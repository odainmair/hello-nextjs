import React, { FC } from "react"
import Container from "../ui/container"
import { Box } from "../layout"
import Typography from "../ui/typography"
import Image from "next/image"
import AnimateInView from "../Animations/WhileInVeiw"
import { useTranslations } from "next-intl"

type TeamMemberProps = {
  image: string
  name: string
  role: string
}

const TeamMemberCard: FC<TeamMemberProps> = ({ image, name, role }) => {
  return (
    <figure className="relative aspect-[2/3] h-full w-full flex-col overflow-hidden rounded-4xl bg-[#EFEFEF] pt-10 lg:aspect-square">
      <figcaption className="px-4">
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6" color="gray" className="">
          {role}
        </Typography>
      </figcaption>
      <div className="absolute bottom-0 h-[75%] w-full lg:h-[400px]">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          className="object-cover object-bottom lg:object-contain"
        />
      </div>
    </figure>
  )
}

const teamMembers: TeamMemberProps[] = [
  {
    image: "/team-1.png",
    name: "Muhamed",
    role: "Chairman",
  },
  {
    image: "/team-1.png",
    name: "Muhamed",
    role: "Chairman",
  },
  {
    image: "/team-1.png",
    name: "Muhamed",
    role: "Chairman",
  },
  {
    image: "/team-1.png",
    name: "Muhamed",
    role: "Chairman",
  },
  {
    image: "/team-1.png",
    name: "Muhamed",
    role: "Chairman",
  },
]

const OurTeam: FC = () => {
  const t = useTranslations("CompanyPage.OurTeam")
  return (
    <Box
      align="center"
      title={t("title")}
      description={t("description")}
      className="py-10 lg:py-20"
      titleClass="pb-2"
      descriptionClass="max-w-[280px] md:max-w-[55%]"
    >
      <Container>
        <div className="grid grid-cols-12 gap-6 lg:mt-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`col-span-12 ${
                index < 2
                  ? "md:col-span-6 md:aspect-[11/10]"
                  : "md:col-span-4 md:aspect-[6/7]"
              }`}
            >
              <AnimateInView delay={0.2 * index} duration={0.6}>
                <TeamMemberCard {...member} />
              </AnimateInView>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  )
}

export default OurTeam
