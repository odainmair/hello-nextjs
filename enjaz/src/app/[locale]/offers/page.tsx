import { DownloadEnjazApp } from "@/components/HomePage"
import WhiteLayout from "@/components/layout/WhiteLayout"
import { OffersList } from "@/components/OffersPage"
import React, { Suspense } from "react"
import OffersCardLoading from "./loading"
import { useTranslations } from "next-intl"

const RenderOffers = async () => {
  // const offers = (await getOffers()) || []

  // if (!offers?.data || offers?.data?.length === 0) {
  //   return (
  //     <div className="py-20 text-center text-gray-500">
  //       No offers available at the moment.
  //     </div>
  //   )
  // }

  return <OffersList data={[]} />
}

const Offers = () => {
  const t = useTranslations("OffersPage")
  return (
    <main>
      <WhiteLayout
        title={t("heroSection.title")}
        align="center"
        description={t("heroSection.description")}
        removeLine
      />

      {/*  */}
      <Suspense fallback={<OffersCardLoading />}>
        <RenderOffers />
      </Suspense>

      <DownloadEnjazApp />
    </main>
  )
}

export default Offers
