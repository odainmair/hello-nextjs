"use client"
import { Link, usePathname } from "@/i18n/navigation"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"
import { Routes } from "@/routes"
import { useTranslations } from "next-intl"
import Image from "next/image"
import MobileNav from "./MobileNav"
import useNavScroll from "@/lib/hooks/useNavScroll"
import DesktopNav from "./DesktopNav"

// white and black nav
const whitePages = [
  Routes.Blogs,
  Routes.Careers,
  Routes.CookiesPolicy,
  Routes.PrivacyPolicy,
  Routes.Offers,
  Routes.Support,
  Routes.TermsOfUse,
  Routes.SecurityStatement,
  Routes.TermsAndConditions,
  Routes.ComplaintEscalationProcess,
]
export const Logo = ({ isBlackLogo }: { isBlackLogo?: boolean }) => (
  <Link href="/" aria-label="Home" passHref>
    <Image
      src={isBlackLogo ? "/black-logo.svg" : "/white-logo.svg"}
      alt="Company logo"
      width={100}
      height={50}
      priority
      className="h-auto w-auto object-contain"
    />
  </Link>
)

export const useNavLinks = () => {
  const t = useTranslations("NavBar")

  return [
    { title: t("personal"), href: Routes.Personal },
    { title: t("transfers"), href: Routes.Transfers },
    { title: t("offers"), href: Routes.Offers },
    { title: t("company"), href: Routes.Company },
  ]
}

const NavBar = () => {
  const { isScrolled } = useNavScroll()
  const links = useNavLinks()
  const pathname = usePathname()

  const islightPage = whitePages.some((page) => pathname === page)
  const isLinkWillBeBlack = isScrolled || !!islightPage

  const isMobile = useMediaQuery("(max-width: 768px)")
  return isMobile ? (
    <MobileNav isLightPage={isLinkWillBeBlack} links={links} />
  ) : (
    <DesktopNav isLightPage={isLinkWillBeBlack} links={links} />
  )
}

export default NavBar
