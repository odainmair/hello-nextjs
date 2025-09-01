import Image, { ImageProps } from "next/image"
import { getStrapiMedia } from "@/lib/utils"

interface StrapiImageProps extends ImageProps {
  src: string
  alt: string
  className?: string
}

export function StrapiImage({
  src,
  alt,
  className,
  ...props
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src)

  if (!imageUrl) return null

  return <Image src={imageUrl} alt={alt} className={className} {...props} />
}
