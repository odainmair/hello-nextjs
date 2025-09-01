import { Box } from "../layout"
import Container from "../ui/container"
import { Button } from "../ui/button"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import * as motion from "motion/react-client"
import { useTranslations } from "next-intl"
import { Routes } from "@/routes"

const LatestOffrs = () => {
  const t = useTranslations("Home.discoverOurLatestOffers")
  return (
    <Box
      title={t("title")}
      align="center"
      className="bg-[#EEEEEE] py-12 lg:py-18"
    >
      <Container>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            ease: "easeInOut",
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-8.5 text-center lg:mb-12"
        >
          <Link href={Routes.Offers}>
            <Button variant={"black"} size={"lg"}>
              {t("buttonText")}
            </Button>
          </Link>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className="relative aspect-[49/67] overflow-hidden rounded-4xl lg:aspect-[2.5/1]"
        >
          <Image
            src="/home-offer.webp"
            alt="image"
            fill
            sizes="(min-width: 2040px) 1680px, (min-width: 1040px) calc(78.57vw + 93px), 219.58vw"
            className="object-cover"
          />
        </motion.div>
      </Container>
    </Box>
  )
}

export default LatestOffrs
