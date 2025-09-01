"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PropsWithChildren, useEffect, useState } from "react"
import Typography from "../ui/typography"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"
import { Link } from "@/i18n/navigation"

type DeviceType = "ios" | "android" | "other"

const APP_STORE_LINKS = {
  ios: "https://apps.apple.com/sa/app/enjaz-app/id1080308156",
  android:
    "https://play.google.com/store/apps/details?id=com.BankAlBilad.EnjazApp",
  other: "https://appgallery.huawei.com/app/C101880939",
} as const

const detectDevice = (): DeviceType => {
  const ua = navigator.userAgent.toLowerCase()

  if (/iphone|ipad|ipod/.test(ua)) return "ios"
  if (/android/.test(ua)) return "android"
  return "other"
}

const GetAppModal = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false)
  const [device, setDevice] = useState<DeviceType>("other")
  const isSmallScreen = useMediaQuery("(max-width: 640px)")
  const t = useTranslations("NavBar")

  useEffect(() => {
    setDevice(detectDevice())
  }, [])

  if (isSmallScreen) {
    return <Link href={APP_STORE_LINKS[device]}>{children}</Link>
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild></DialogTrigger> */}
      <div onClick={() => setOpen(!open)}>{children}</div>
      <DialogContent className="rounded-4xl p-8 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center">
            <Typography
              variant="h1"
              component="p"
              align="center"
              weight="extrabold"
              leading="snug"
            >
              {t("getEnjazApp")}
            </Typography>
          </DialogTitle>
          <DialogDescription className="text-primary text-center">
            {t("getEnjazAppDescription")}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <Image
            src="/QR-Code.svg"
            alt="qr"
            width={211}
            height={211}
            className="h-52 w-52"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GetAppModal
