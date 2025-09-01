import { cookies } from "next/headers"
import { getStrapiURL } from "./utils"
import qs from "qs"
import { GentalResponse, IOfferItem } from "@/types"

export async function getStrapiData(path: string, query?: string) {
  const cookieStore = await cookies()
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en" // Get the locale from the cookie

  const baseUrl = getStrapiURL()

  // Construct the URL with the provided path
  const url = new URL(path, baseUrl)

  // Add locale to the query string (if it exists)
  const queryParams = new URLSearchParams(query)

  if (locale) {
    queryParams.append("locale", locale) // Add locale to the query parameters
  }

  // Set the updated query parameters to the URL
  url.search = queryParams.toString()

  try {
    console.log(url.href)
    const response = await fetch(url.href, {
      next: {
        revalidate: 60,
      },
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.error("error from log ", error)
  }
}

export async function getOffers() {
  const offersQuery = qs.stringify({
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
    },
  })

  const offersData = (await getStrapiData(
    "/api/offers",
    offersQuery,
  )) as GentalResponse<IOfferItem>
  return offersData
}

export async function getOfferBySlug(slug: string) {
  const offerQuery = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
    },
  })

  const offerData = (await getStrapiData(
    "/api/offers",
    offerQuery,
  )) as GentalResponse<IOfferItem>

  return offerData.data[0] || null
}
