"use client"

import useNavScroll from "@/lib/hooks/useNavScroll"
import { useTranslations } from "next-intl"
import { FC } from "react"
import { navBarVariants } from "../Animations/MotionVariants"
import { motion } from "motion/react"
import Container from "../ui/container"
import { Logo } from "."
import { ChangeLang, NavLink } from "../common"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

import dynamic from "next/dynamic"

const GetAppModal = dynamic(() => import("../common/GetAppModal"), {
  ssr: false,
})

type Props = {
  links: {
    title: string
    href: string
  }[]
  isLightPage: boolean
}

const DesktopNav: FC<Props> = ({ isLightPage, links }) => {
  const t = useTranslations("NavBar")
  const { navState } = useNavScroll()

  return (
    <motion.header
      variants={navBarVariants}
      animate={navState}
      // initial="visibal"
      className={cn(
        "fixed top-0 left-0 z-50 hidden w-full py-6 transition-all duration-300 md:block",
        navState === "scrolled" && "py-4 shadow-md",
      )}
    >
      <nav role="navigation" aria-label="Main navigation" className="relative">
        <Container className="relative flex items-center justify-between">
          <ul
            className="flex basis-1/2 items-center justify-between gap-4"
            role="list"
          >
            <li className="shrink-0">
              <Logo isBlackLogo={!!isLightPage} />
            </li>
            {links.map((link, index) => (
              <li key={index} role="listitem">
                <NavLink href={link.href} isScrolled={isLightPage}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-4">
            <ChangeLang />
            <GetAppModal>
              <Button variant={isLightPage ? "default" : "white"} size={"lg"}>
                {t("getApp")}
              </Button>
            </GetAppModal>
          </div>
        </Container>
      </nav>
    </motion.header>
  )
}

export default DesktopNav
