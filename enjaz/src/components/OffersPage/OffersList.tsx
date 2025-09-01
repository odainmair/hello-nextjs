import React, { FC } from "react"
import Container from "../ui/container"
import { IOfferItem } from "@/types"
import OffersCard from "./OffersCard"

type Props = {
  data: IOfferItem[]
}

const OffersList: FC<Props> = ({ data }) => {
  if (!data.length) return null

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 pt-14 pb-32 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((item) => (
          <OffersCard key={item.id} {...item} />
        ))}
      </div>
    </Container>
  )
}

export default OffersList
