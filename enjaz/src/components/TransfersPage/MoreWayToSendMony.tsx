import React from "react"
import { Box } from "../layout"
import Container from "../ui/container"
import Image from "next/image"
import Typography from "../ui/typography"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import AnimateInView from "../Animations/WhileInVeiw"

const IconWithTitleAndImageCard = ({
  description,
  icon,
  title,
  isActive,
}: {
  icon: string
  title: string
  description: string
  isActive?: boolean
}) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-center gap-4 rounded-4xl bg-[#EDEDED] px-4 pt-8 pb-8 lg:px-10 lg:pb-24",
        isActive && "bg-black",
      )}
    >
      <Image src={icon} alt={title} width={80} height={80} />
      <Typography
        variant={"h4"}
        weight={"semibold"}
        color={isActive ? "white" : "black"}
      >
        {title}
      </Typography>

      <Typography
        className={cn("mt-4 w-4/5 lg:mt-7")}
        variant={"body1"}
        color={isActive ? "light-gray" : "gray"}
      >
        {description}
      </Typography>
    </div>
  )
}

const MoreWayToSendMony = () => {
  const t = useTranslations("TransfersPage.MoreWayToSendMony")
  return (
    <Box
      title={t("title")}
      align="center"
      className="h-auto py-12 lg:min-h-auto lg:pt-[72px]"
    >
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-3">
          <AnimateInView delay={0.3}>
            <IconWithTitleAndImageCard
              icon="/Send_Cash.webp"
              title={t("cashPickup")}
              description={t("cashPickupDescription")}
            />
          </AnimateInView>
          <AnimateInView>
            <IconWithTitleAndImageCard
              isActive
              icon="/Send_Bank.webp"
              title={t("bankAccount")}
              description={t("bankAccountDescription")}
            />
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <IconWithTitleAndImageCard
              icon="/Send_Wallet.webp"
              title={t("digitalWallet")}
              description={t("digitalWalletDescription")}
            />
          </AnimateInView>
        </div>
      </Container>
    </Box>
  )
}

export default MoreWayToSendMony
