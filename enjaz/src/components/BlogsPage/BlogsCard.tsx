import { cn } from "@/lib/utils"
import Image from "next/image"
import React, { FC } from "react"
import Typography from "../ui/typography"
import { Link } from "@/i18n/navigation"

export interface BlogsCardProps {
  id: string | number
  isFeatured?: boolean
  title: string
  description: string
  date: string
  image: string
  category: string
  readFrom: string
  slug: string
}

const BlogsCard: FC<BlogsCardProps> = ({
  isFeatured = false,
  category,
  date,
  description,
  image,
  readFrom,
  title,
  slug,
}) => {
  const CardImage = ({ slug }: { slug: string }) => (
    <Link
      href={slug}
      className={cn(
        "relative aspect-[6/5] h-full w-full overflow-hidden rounded-xl",
        isFeatured && "aspect-[1.7/1]",
      )}
    >
      <div
        className={cn(
          "relative aspect-[6/5] h-full w-full overflow-hidden rounded-xl",
          isFeatured && "aspect-[1.7/1]",
        )}
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </Link>
  )

  const CardContent = () => (
    <figcaption className={cn("py-6", isFeatured && "bg-[#F5F5F5] p-10")}>
      <div className="flex flex-col gap-4">
        <Typography
          variant={isFeatured ? "h3" : "h5"}
          component="h3"
          lineClamp={2}
        >
          {title}
        </Typography>

        {isFeatured && (
          <Typography variant="caption" color="gray" lineClamp={3}>
            {description}
          </Typography>
        )}

        <div className="mt-4 flex items-center gap-4">
          <Typography
            variant="subtitle2"
            component="span"
            className="rounded-full border px-4 py-1"
          >
            {category}
          </Typography>
          <div>
            <Typography
              component="time"
              variant="subtitle3"
              color="gray"
              weight="semibold"
            >
              {date} . {readFrom}
            </Typography>
          </div>
        </div>
      </div>
    </figcaption>
  )

  return (
    <figure
      className={cn(
        "grid",
        isFeatured
          ? "place-items-center overflow-hidden rounded-xl bg-[#F5F5F5] lg:grid-cols-2"
          : "grid-cols-1",
      )}
    >
      <CardImage slug={slug} />
      <CardContent />
    </figure>
  )
}

export default BlogsCard
