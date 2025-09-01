import { Routes } from "@/routes"
import { MetadataRoute } from "next"

const locales = ["en", "ar"]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    "",
    Routes.Company,
    Routes.Offers,
    Routes.Transfers,
    Routes.CookiesPolicy,
    Routes.ComplaintEscalationProcess,
    Routes.TermsOfUse,
    Routes.TermsAndConditions,
    Routes.SecurityStatement,
    Routes.PrivacyPolicy,
  ]

  const urls: MetadataRoute.Sitemap = []

  // Add static pages
  staticPages.forEach((page) => {
    locales.forEach((locale) => {
      urls.push({
        url: `https://enjaz.com/${locale}${page ? `/${page}` : ""}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1.0 : 0.8,
      })
    })
  })

  return urls
}
