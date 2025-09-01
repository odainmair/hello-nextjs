import { Link } from "@/i18n/navigation"
import React, { FC } from "react"
import Typography from "../ui/typography"
import { IOfferItem } from "@/types"
import { StrapiImage } from "../StrapiImage"
import { Routes } from "@/routes"
import { useTranslations } from "next-intl"

const OffersCard: FC<IOfferItem> = ({ image, title, slug }) => {
  const t = useTranslations("OffersPage")

  return (
    <figure className="grid w-full overflow-hidden">
      <Link
        href={Routes.OffersDetails(slug)}
        className="relative inline-block aspect-[6/5] h-full w-full overflow-hidden rounded-xl"
      >
        <div>
          <StrapiImage
            src={image?.url || "/placeholder.png"}
            alt={`Image for ${title}`}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <figcaption className="flex flex-col gap-4 py-8">
        <Typography
          variant="h5"
          component="h3"
          lineClamp={2}
          weight={"semibold"}
        >
          {title}
        </Typography>

        <Link
          href={Routes.OffersDetails(slug)}
          aria-label={`View more details about ${title}`}
        >
          <Typography
            decoration="underline"
            variant="subtitle3"
            component="span"
            color={"gray"}
            weight={"medium"}
          >
            {t("viewMore")}
          </Typography>
        </Link>
      </figcaption>
    </figure>
  )
}

export default OffersCard
