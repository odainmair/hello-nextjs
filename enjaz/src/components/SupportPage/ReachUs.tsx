import React from "react"
import Container from "../ui/container"
import Typography from "../ui/typography"
import Image from "next/image"
import { solcialMedia } from "../common/Footer"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"

type ContactInfoProps = {
  title: string
  description: string
  icon: React.ReactNode
}

const ContactInfo = ({ description, icon, title }: ContactInfoProps) => {
  return (
    <div className="flex flex-1 items-center gap-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white">
        {icon}
      </div>

      <div className="flex shrink-0 flex-col gap-2">
        <Typography variant={"caption"} color={"gray"} weight={"light"}>
          {title}
        </Typography>
        <Typography weight={"medium"}>{description}</Typography>
      </div>
    </div>
  )
}

const ReachUs = () => {
  const t = useTranslations("SupportPage.heroSection")
  return (
    <section className="mt-40 w-full">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          {/* contact info */}
          <div className="bg-light-gray col-span-12 flex flex-col gap-14 rounded-4xl px-10 py-12 lg:col-span-8">
            <Typography variant={"h2"} component={"h1"} weight={"medium"}>
              {t("reachUs")}
            </Typography>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <ContactInfo
                title={t("insideKSA")}
                description={"8005000300"}
                icon={
                  <Image src={"/call.svg"} alt="call" width={24} height={24} />
                }
              />
              <ContactInfo
                title={t("outsideKSA")}
                description={"+966 920011541"}
                icon={
                  <Image src={"/call.svg"} alt="call" width={24} height={24} />
                }
              />
              <ContactInfo
                title={t("email")}
                description={"EnjazCustomerCare@enjaz.com"}
                icon={
                  <Image src={"/mail.svg"} alt="call" width={24} height={24} />
                }
              />
            </div>
          </div>

          {/*flow us  */}
          <div className="col-span-12 flex flex-col justify-between gap-14 rounded-4xl bg-black px-10 py-12 lg:col-span-4">
            <Typography
              variant={"h2"}
              component={"h2"}
              color={"white"}
              weight={"medium"}
            >
              {t("flowUs")}
            </Typography>

            {/* icons  */}
            <ul className="flex items-center gap-4">
              {solcialMedia.map((item) => (
                <li
                  key={item.id}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white"
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    className="transition-all duration-500 hover:text-amber-500"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ReachUs
