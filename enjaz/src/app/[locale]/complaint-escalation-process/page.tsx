import { WhiteLayout } from "@/components/layout"
import Typography from "@/components/ui/typography"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

const ComplaintEscalationProcess = () => {
  const t = useTranslations("ComplaintEscalationPage")
  return (
    <WhiteLayout
      align="center"
      title={t("heroSection.title")}
      description={t("heroSection.description")}
    >
      <div className="flex flex-col gap-4">
        <Typography
          variant={"h6"}
          color={"error"}
          component={"h2"}
          weight={"semibold"}
        >
          {t("content.title")}
        </Typography>
        <Typography variant={"body1"} component={"h3"} weight={"semibold"}>
          {t("content.forYourConvenience")}
        </Typography>
        <ul className="mt-4 flex flex-col gap-4">
          <li className="text-gray flex items-center gap-2 text-sm lg:text-base">
            <span className="h-2 w-2 rounded-full bg-[#A3A3A3]" />
            {t("content.localTollFree")}: 8005000300
          </li>
          <li className="text-gray flex items-center gap-2 text-sm lg:text-base">
            <span className="h-2 w-2 rounded-full bg-[#A3A3A3]" />
            {t("content.internationally")}: 920011541
          </li>{" "}
          <li className="text-gray flex items-center gap-2 text-sm lg:text-base">
            <span className="h-2 w-2 rounded-full bg-[#A3A3A3]" />
            {t("content.orVisitingOneofEnjazBranches")}
          </li>
        </ul>
      </div>

      <div className="my-8 flex flex-col gap-4">
        <Typography variant={"h6"} component={"h3"}>
          {t("content.ifWeCannotResolve")}
        </Typography>
        <div className="flex items-center gap-4">
          <div className="bg-light-gray grid h-11 w-11 place-items-center rounded-full">
            <Image src={"/laptop.svg"} alt="labtop" width={24} height={24} />
          </div>
          <Typography color={"gray"}>{t("content.yourComplaint")}</Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-light-gray grid h-11 w-11 place-items-center rounded-full">
            <Image src={"/mobile.svg"} alt="labtop" width={24} height={24} />
          </div>
          <Typography color={"gray"}>{t("content.complaintNumber")}</Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-light-gray grid h-11 w-11 place-items-center rounded-full">
            <Image
              src={"/24-support.svg"}
              alt="labtop"
              width={24}
              height={24}
            />
          </div>
          <Typography color={"gray"}>{t("content.checkheStatus")}</Typography>
        </div>
      </div>

      <Typography align={"center"} color={"gray"} className="mt-10 px-8">
        {t("content.footer", {
          phoneOne: "8005000300",
          phoneTwo: "920011541",
        })
          .split(/(\{phoneOne\}|\{phoneTwo\})/)
          .map((part, index) => {
            if (part === "{phoneOne}") {
              return (
                <span key={`phoneOne-${index}`} className="text-rose-500">
                  8005000300
                </span>
              )
            }
            if (part === "{phoneTwo}") {
              return (
                <span key={`phoneTwo-${index}`} className="text-rose-500">
                  920011541
                </span>
              )
            }
            return part
          })}
      </Typography>
    </WhiteLayout>
  )
}

export default ComplaintEscalationProcess
