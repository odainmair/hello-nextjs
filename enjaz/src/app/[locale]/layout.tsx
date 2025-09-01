import { notFound } from "next/navigation"
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server"
import { routing } from "@/i18n/routing"

import { hasLocale, Locale, NextIntlClientProvider } from "next-intl"
import { company } from "@/lib/utils"
import NavBar from "@/components/NavBar"
import SmoothScroll from "@/components/SmoothScroll/index "
import { CookiesModal, Footer } from "@/components/common"
import myFont from "@/components/fonts"
import GoogleTagManager from "@/components/GoogleTagManager"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
) {
  const { locale } = await props.params

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "SEO.Home",
  })

  const description = t("description") || "Enjaz APP "

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description,

    alternates: {
      canonical: company.url,
      languages: {
        en: "https://enjaz.com/en",
        ar: "https://enjaz.com/ar",
      },
    },
    openGraph: {
      title: t("OgTitle"),
      description: t("OgDescription"),
      url: company.url,
      siteName: t("title"),
      images: [
        {
          url: company.logo,
          width: 800,
          height: 600,
          alt: t("title"),
        },
      ],
      locale: t("locale"),
      type: "website",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={myFont.className}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
          <CookiesModal />

          <GoogleTagManager gtmId="GTM-MX5G3PKS" />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
