import { notFound } from "next/navigation"
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { ReactNode } from "react"
import { routing } from "@/i18n/routing"
import { CookiesModal, Footer } from "../common"
import NavBar from "../NavBar"
import SmoothScroll from "../SmoothScroll/index "
import myFont from "../fonts"
import GoogleTagManager from "../GoogleTagManager"

type Props = {
  children: ReactNode
  locale: Locale
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function BaseLayout({ children, locale }: Props) {
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={myFont.className}
    >
      <NextIntlClientProvider messages={messages}>
        <body suppressHydrationWarning>
          <NavBar />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
          <CookiesModal />

          <GoogleTagManager gtmId="GTM-MX5G3PKS" />
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
