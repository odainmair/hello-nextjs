import GridRepeater from "@/components/GridRepeater"
import { OffersCardSkeleton } from "@/components/Skeletons"

export default function OffersCardLoading() {
  // Or a custom loading skeleton component
  return <GridRepeater Component={OffersCardSkeleton} repeatCount={3} />
}
