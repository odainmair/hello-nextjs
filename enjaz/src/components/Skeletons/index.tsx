import { Skeleton } from "../ui/skeleton"

export const OffersCardSkeleton = () => {
  return (
    <figure className="grid w-full overflow-hidden">
      {/* Image Skeleton */}
      <div className="relative inline-block aspect-[6/5] h-full w-full overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Text and Link Skeleton */}
      <figcaption className="flex flex-col gap-4 py-8">
        {/* Title Skeleton */}
        <Skeleton className="h-12 w-3/4" />{" "}
        {/* Mimics Typography h5 with lineClamp */}
        {/* View More Link Skeleton */}
        <Skeleton className="h-5 w-20" /> {/* Mimics View More text */}
      </figcaption>
    </figure>
  )
}
