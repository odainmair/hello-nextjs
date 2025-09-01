import { defineRouting } from "next-intl/routing"

export enum codes {
  Arabic = "ar",
  English = "en",
}

export const routing = defineRouting({
  locales: [codes.Arabic, codes.English],

  defaultLocale: codes.English,

  localePrefix: "always",
})
