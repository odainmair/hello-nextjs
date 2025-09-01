import React from "react"
import Container from "../ui/container"
import Typography from "../ui/typography"
import Image from "next/image"
import { Box } from "../layout"
import { useTranslations } from "next-intl"
import AnimateInView from "../Animations/WhileInVeiw"

interface CardWithOverlayProps {
  imageSrc: string
  title: string
  subtitle: string
}

const CardWithOverlay: React.FC<CardWithOverlayProps> = ({
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <figure className="w-full overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
        <Image
          src={imageSrc}
          alt="card image"
          fill
          className="pointer-events-none object-cover"
        />
      </div>
      <figcaption className="flex max-w-sm flex-col gap-4 py-8 lg:max-w-sm">
        <Typography color="white" variant="h3" component="h3">
          {title}
        </Typography>
        <Typography variant="body1" weight={"light"} color="light-gray">
          {subtitle}
        </Typography>
      </figcaption>
    </figure>
  )
}

// interface TransferPartnersCardProps {
//   title?: string
//   description?: string
//   buttonText?: string
//   imageSrc?: string
// }

// const TransferPartnersCard: React.FC<TransferPartnersCardProps> = ({
//   title = "More Transfer Partners. More flexibility.",
//   description = "Choose the right transfer partner for you to transfer via Enjaz. Every partner has their own rates and fees.",
//   buttonText = "Transfer Now",
//   imageSrc = "/moto.png",
// }) => {
//   return (
//     <div className="grid grid-cols-1 place-items-center gap-8 rounded-4xl bg-black/7 p-10 lg:aspect-[2.2/1] lg:grid-cols-2">
//       <div className="grid h-full w-full place-content-center gap-4">
//         <Typography variant="h1" component="h2" leading="tight">
//           {title}
//         </Typography>
//         <Typography variant="subtitle1" className="lg:pe-6">
//           {description}
//         </Typography>
//         <div>
//           <Button variant="black" size="lg">
//             {buttonText}
//           </Button>
//         </div>
//       </div>

//       <div className="relative flex flex-col items-center justify-center">
//         <Image
//           src={imageSrc}
//           alt="partner image"
//           width={500}
//           height={500}
//           className="object-cover object-center"
//         />
//       </div>
//     </div>
//   )
// }
type servicesListType = {
  title: string
  description: string
  image: string
}

const TransferPartners: React.FC = () => {
  const t = useTranslations("TransfersPage.MoreWayes")
  const list = t.raw("servicesList") as servicesListType[]
  return (
    <section>
      <Box
        title={t("title")}
        color="white"
        align="center"
        className="bg-black py-12 text-white lg:py-[72px]"
        titleClass="lg:w-[38%] sm:w-[50%] w-[250px] mx-auto"
      >
        <Container>
          <div className="mt-4 grid grid-cols-12 gap-4 lg:gap-8">
            {list.map((item, index) => (
              <div className="col-span-12 md:col-span-6" key={index}>
                <AnimateInView duration={0.5} delay={0}>
                  <CardWithOverlay
                    imageSrc={item.image}
                    title={item.title}
                    subtitle={item.description}
                  />
                </AnimateInView>
              </div>
            ))}
          </div>
        </Container>
      </Box>
    </section>
  )
}

export default TransferPartners
