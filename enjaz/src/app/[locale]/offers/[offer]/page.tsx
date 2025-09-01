import BlockRendererClient from "@/components/BlockRendererClient"
import { GradientLayout } from "@/components/layout"
import Container from "@/components/ui/container"
import { getOfferBySlug } from "@/lib/getStrapi"
import { BlocksContent } from "@strapi/blocks-react-renderer"

const OfferDetails = async ({
  params,
}: {
  params: Promise<{ offer: string }>
}) => {
  const { offer } = await params

  const data = await getOfferBySlug(offer)

  const content: BlocksContent = data.content

  console.log(data)
  return (
    <main>
      <GradientLayout
        imageSrc={data?.image?.url || ""}
        title={data?.title || ""}
        description={data?.description || ""}
      />
      <Container>
        <BlockRendererClient content={content} />
      </Container>
    </main>
  )
}

export default OfferDetails
