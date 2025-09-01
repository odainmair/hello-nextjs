"use client"
import { useParams } from "next/navigation"
import { useLocale } from "next-intl"
import { useTransition } from "react"
import { usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { codes } from "@/i18n/routing"
import Image from "next/image"
import Typography from "../ui/typography"

const ChangeLang = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  const handleChaneLang = (lang: "ar" | "en" | undefined) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: lang },
      )
    })
  }

  const lang = {
    ar: { code: codes.Arabic, name: "AR", icon: "/KSA.webp" },
    en: { code: codes.English, name: "EN", icon: "/en.svg" },
  }
  const currentLocale = useLocale()
  const targetLang: "ar" | "en" = currentLocale === "en" ? "ar" : "en"

  return (
    <button
      onClick={() => {
        handleChaneLang(targetLang)
      }}
      className={cn(
        "flex cursor-pointer items-center justify-center gap-2",
        isPending && "opacity-50",
      )}
    >
      <Typography
        className="mt-1 block lg:hidden"
        component={"span"}
        color={"black"}
        variant={"h6"}
      >
        {lang[targetLang].name}
      </Typography>
      <Image
        src={lang[targetLang].icon}
        alt={lang[targetLang].name}
        width={24}
        height={24}
        quality={100}
        className="h-auto w-auto"
      />
    </button>
  )
}

export default ChangeLang
