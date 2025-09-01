import {
  DownloadEnjazApp,
  Faq,
  HeroSection,
  LatestOffrs,
  PinSliderFeature,
  SliderWIthCards,
  VideoWithTitle,
  VideoWithTitleAndButton,
} from "@/components/HomePage"
import { EnjazQuestions } from "@/lib/list"
import { company } from "@/lib/utils"
import { Locale, useTranslations } from "next-intl"
import { use } from "react"
import type { Organization, WithContext } from "schema-dts"

type Props = {
  params: Promise<{ locale: Locale }>
}

export default function IndexPage({ params }: Props) {
  const { locale } = use(params)
  const t = useTranslations("SEO.Home")

  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: `${company.url}/${locale}`,
    logo: company.logo,
    image: company.logo,
    name: t("title"),
    description: t("description"),
    sameAs: company.socials,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "8229 Al-Mutamarat District, King Fahd Road",
      postalCode: "12711",
      postOfficeBoxNumber: "3952",
      addressLocality: "Riyadh",
      addressCountry: "Saudi Arabia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: t("CustomerService"),
      email: company.email,
      areaServed: "SA",
      availableLanguage: ["Arabic", "English"],
    },
  }

  return (
    <>
      <main>
        <HeroSection />
        <SliderWIthCards />
        <VideoWithTitle />
        <VideoWithTitleAndButton />
        <PinSliderFeature />
        <LatestOffrs />
        <Faq questions={EnjazQuestions()} />
        <DownloadEnjazApp />
      </main>

      {/* json id */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  )
}
