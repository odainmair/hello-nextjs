"use client"

import useNavScroll from "@/lib/hooks/useNavScroll"
import Container from "../ui/container"
import { motion, AnimatePresence } from "motion/react"
import {
  menuLinkVariants,
  menuVariants,
  navBarVariants,
} from "../Animations/MotionVariants"
import { FC, useState, useEffect } from "react"

import { ChangeLang, GetAppModal, NavLink } from "../common"
import { cn } from "@/lib/utils"
import { Logo } from "."
import { ArrowLeft, X } from "lucide-react"
import { Button } from "../ui/button"
import { useTranslations } from "next-intl"

type Props = {
  links: {
    title: string
    href: string
  }[]
  isLightPage: boolean
}

const HamburgerButton = ({ isBlackNav }: { isBlackNav?: boolean }) => (
  <div className="flex cursor-pointer flex-col items-center justify-between gap-2 rounded-2xl">
    {Array.from({ length: 3 }).map((_, idx) => (
      <span
        key={idx}
        className={cn(
          "h-[3px] w-8 rounded-full bg-white",
          isBlackNav && "bg-black/70",
        )}
      />
    ))}
  </div>
)

const MobileNav: FC<Props> = ({ isLightPage, links }) => {
  const t = useTranslations("NavBar")
  const { navState } = useNavScroll()
  const [open, setOpen] = useState(false)

  // Add effect to control body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        variants={navBarVariants}
        animate={navState}
        className={cn(
          "fixed top-0 left-0 z-50 block w-full py-6 transition-all duration-300 md:hidden",
          navState === "scrolled" && "py-4 shadow-md",
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Logo isBlackLogo={isLightPage} />

            <button className="m-0" onClick={() => setOpen(!open)}>
              <HamburgerButton isBlackNav={isLightPage} />
            </button>
          </div>
        </Container>
      </motion.nav>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-200 flex h-full w-full flex-col justify-between overflow-hidden bg-white pb-6"
          >
            <header className="flex justify-between border-b p-8">
              <div>
                <Logo isBlackLogo={true} />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="bg-light grid h-8 w-8 cursor-pointer place-items-center rounded-lg shadow-md"
              >
                <X size={18} />
              </button>
            </header>

            <ul className="mt-8 flex flex-col items-center justify-center">
              {links.map((link, idx) => (
                <motion.li
                  key={idx}
                  variants={menuLinkVariants}
                  className="w-full border-b border-black/5 py-6"
                >
                  <NavLink
                    href={link.href}
                    isScrolled={true}
                    className="flex items-center justify-center gap-4"
                    onClick={() => setOpen(false)}
                  >
                    {link.title}{" "}
                    <ArrowLeft size={18} className="ltr:rotate-180" />
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={menuLinkVariants}
              className="flex justify-center py-6"
            >
              <div className="w-fit rounded-full bg-gray-200 p-2">
                <ChangeLang />
              </div>
            </motion.div>
            <motion.div variants={menuLinkVariants} className="mx-8">
              <GetAppModal>
                <Button size={"lg"} className="w-full">
                  {t("getApp")}
                </Button>
              </GetAppModal>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNav
