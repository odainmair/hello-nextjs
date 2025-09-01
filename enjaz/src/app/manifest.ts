import { MetadataRoute } from "next"
// import { getTranslations } from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: "Enjaz",
    start_url: "/",
    theme_color: "#000000",
  }
}
