import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStrapiURL() {
  const apiURL = process.env.NEXT_PUBLIC_STRAPI_URL
  return apiURL
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null
  if (url.startsWith("data:")) return url
  if (url.startsWith("http") || url.startsWith("//")) return url
  return `${getStrapiURL()}${url}`
}

export const company = {
  url: "https://enjaz.com",
  logo: "https://uat-446040508095.me-central2.run.app/logo.svg",
  phone: "+966-800-5000-300",
  email: "dataprotectionoffice@enjaz.com",
  socials: [
    "https://www.tiktok.com/@enjaz",
    "https://x.com/enjaz",
    "https://www.instagram.com/enjazsa",
    "https://www.linkedin.com/company/enjazsa/",
    "https://www.facebook.com/enjazsa",
  ],
}
