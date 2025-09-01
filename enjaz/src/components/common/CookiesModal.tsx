"use client"

import React, { useState, useEffect } from "react"
import Container from "../ui/container"
import Image from "next/image"
import Typography from "../ui/typography"
import { Link } from "@/i18n/navigation"
import { Routes } from "@/routes"
import { Button } from "../ui/button"
import { motion, AnimatePresence } from "motion/react"

const CookiesModal = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const cookieConsent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie-consent="))

    if (!cookieConsent) {
      const timer = setTimeout(() => setShowModal(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    const expirationDate = new Date()
    expirationDate.setFullYear(expirationDate.getFullYear() + 1)
    document.cookie = `cookie-consent=accepted; expires=${expirationDate.toUTCString()}; path=/`
    setShowModal(false)
    console.log("Cookies accepted - you can initialize tracking scripts here")
  }

  const rejectAll = () => {
    const expirationDate = new Date()
    expirationDate.setFullYear(expirationDate.getFullYear() + 1)
    document.cookie = `cookie-consent=rejected; expires=${expirationDate.toUTCString()}; path=/`
    setShowModal(false)
    console.log("Cookies rejected - only necessary cookies will be used")
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 h-svh w-full overflow-hidden bg-black/50"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-10 left-0 w-full"
          >
            <Container>
              <div className="flex flex-wrap justify-between gap-4 rounded-[40px] bg-white px-8 py-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/cpu-setting.svg"
                    alt="cookies"
                    width={35}
                    height={35}
                  />
                  <Typography variant={"h5"}>
                    We use cookies to enhance your experience.
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <Link
                    href={Routes.CookiesPolicy}
                    className="text-sm font-semibold underline"
                  >
                    Cookies Policy
                  </Link>
                  <Button variant={"secondary"} onClick={rejectAll}>
                    Reject all
                  </Button>
                  <Button variant={"black"} onClick={acceptAll}>
                    Accept all
                  </Button>
                </motion.div>
              </div>
            </Container>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default CookiesModal
