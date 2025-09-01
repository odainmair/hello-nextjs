import React, { FC } from "react"
import Container from "../ui/container"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import {
  FaTiktok,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa6"
import { Routes } from "@/routes"
import Typography from "../ui/typography"
import { useTranslations } from "next-intl"

export const solcialMedia = [
  {
    id: 1,
    icon: <FaTiktok className="text-lg lg:text-xl" />,
    link: "https://www.tiktok.com/@enjaz",
    name: "tiktok",
  },
  {
    id: 2,
    icon: <FaXTwitter className="text-lg lg:text-xl" />,
    link: "https://x.com/enjaz",
    name: "twitter",
  },
  {
    id: 3,
    icon: <FaInstagram className="text-lg lg:text-xl" />,
    link: "https://www.instagram.com/enjazsa",
    name: "instagram",
  },
  {
    id: 4,
    icon: <FaLinkedinIn className="text-lg lg:text-xl" />,
    link: "https://www.linkedin.com/company/enjazsa/",
    name: "Linkedin",
  },
  {
    id: 5,
    icon: <FaFacebook className="text-lg lg:text-xl" />,
    link: "https://www.facebook.com/enjazsa",
    name: "facebook",
  },
  // { id: 6, icon: <FaGoogle className="text-lg lg:text-xl" />, link: "" },
  // { id: 7, icon: <FaYoutube className="text-lg lg:text-xl" />, link: "" },
]

type TFooterLink = {
  id: number
  title: string
  footer_pages: {
    id: number
    title: string
    slug: string
  }[]
}
type TFooterLinks = {
  footerLinks: TFooterLink[]
}

const FooterLinks: FC<TFooterLinks> = ({ footerLinks }) => {
  return (
    <div className="mt-10 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-center lg:px-10">
      {footerLinks.map((section) => (
        <div
          key={section.id}
          className="flex flex-col gap-4 font-light lg:gap-8"
        >
          <Typography component={"h4"} weight={"bold"}>
            {section.title}
          </Typography>
          <ul className="flex flex-col gap-3">
            {section.footer_pages.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.slug}
                  aria-label={link.title || "Link to page"}
                >
                  <Typography
                    variant={"body2"}
                    weight={"semibold"}
                    color={"gray"}
                    className="transition-all duration-300 hover:opacity-80"
                  >
                    {link.title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

const Footer = () => {
  const t = useTranslations("Footer")

  const footerLinks: TFooterLink[] = [
    {
      id: 1,
      title: t("Enjaz"),
      footer_pages: [
        { id: 1, title: t("personal"), slug: Routes.Personal },
        { id: 2, title: t("transfers"), slug: Routes.Transfers },
        { id: 3, title: t("offers"), slug: Routes.Offers },
        { id: 4, title: t("company"), slug: Routes.Company },
        // { id: 5, title: "Blogs", slug: Routes.Blogs },
        // { id: 6, title: "News", slug: Routes.News },
      ],
    },
    {
      id: 2,
      title: t("Support"),
      footer_pages: [
        { id: 1, title: t("CustomerSupport"), slug: Routes.Support },
        // { id: 2, title: "Find Branches", slug: "" },
        {
          id: 3,
          title: t("ComplaintEscalation"),
          slug: Routes.ComplaintEscalationProcess,
        },
      ],
    },
    {
      id: 3,
      title: t("QuickLinks"),
      footer_pages: [
        {
          id: 1,
          title: t("termsAndConditions"),
          slug: Routes.TermsAndConditions,
        },
        { id: 2, title: t("CookiesPolicy"), slug: Routes.CookiesPolicy },
        { id: 3, title: t("privacyPolicy"), slug: Routes.PrivacyPolicy },
        { id: 4, title: t("TermsOfUse"), slug: Routes.TermsOfUse },
        {
          id: 5,
          title: t("FinancialProtectionRules"),
          slug: Routes.SecurityStatement,
        },
      ],
    },
    {
      id: 4,
      title: t("DownloadApp"),
      footer_pages: [
        {
          id: 1,
          title: "iOS",
          slug: "https://apps.apple.com/sa/app/enjaz-app/id1080308156",
        },
        {
          id: 2,
          title: "Android",
          slug: "https://play.google.com/store/apps/details?id=com.BankAlBilad.EnjazApp",
        },
        {
          id: 3,
          title: "App Gallery",
          slug: "https://appgallery.huawei.com/app/C101880939",
        },
      ],
    },
  ]

  return (
    <footer className="bg-light py-10">
      <Container>
        <div className="flex justify-between border-b py-6">
          <Image
            src="/logo-icon.svg"
            alt="logo"
            width={40}
            height={40}
            className="h-auto w-auto"
          />
          {/* social Media  */}

          <ul className="flex items-center gap-4">
            {solcialMedia.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  target="_blank"
                  aria-label={item.name}
                  className="shrink-0 transition-all duration-500 hover:text-amber-500"
                >
                  <span className="sr-only">{item.link}</span>
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* footers links  */}
        <FooterLinks footerLinks={footerLinks} />

        {/* copright */}

        <Typography
          align={"center"}
          variant={"subtitle3"}
          className="mt-10 lg:px-24"
          color={"gray"}
          weight={"light"}
        >
          {t("CopyRight")}
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
