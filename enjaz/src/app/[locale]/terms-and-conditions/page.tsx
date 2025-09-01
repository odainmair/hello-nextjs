import { WhiteLayout } from "@/components/layout"
import PolicyLayout, {
  HeaderWithTitleProps,
} from "@/components/layout/PolicyLayout"
import { useTranslations } from "next-intl"
import React from "react"

const TermsAndConditions = () => {
  const t = useTranslations("TermsAndConditionsPage")

  const data: HeaderWithTitleProps[] = [
    {
      redParagraph: t("section1.title"),
    },
    {
      redParagraph: t("section2.title"),
    },
    {
      points: [
        {
          description: t("section3.point1.description"),
        },
      ],
    },
    {
      title: t("section4.title"),
      points: [
        {
          description: t("section4.point1.description1"),
        },
        {
          title: t("section4.point2.title"),
          description: t("section4.point2.description"),
          listItems: t.raw("section4.point2.listItems"),
        },
        {
          title: t("section4.point3.title"),
          description: [
            t("section4.point3.description1"),
            t("section4.point3.description1"),
          ],
        },
        {
          title: t("section4.point4.title"),
          description: t("section4.point4.description"),
        },
        {
          title: t("section4.point5.title"),
          description: t.raw("section4.point5.description"),
        },
        {
          title: t("section4.point6.title"),
          description: t.raw("section4.point6.description"),
        },
        {
          title: t("section4.point7.title"),
          description: t.raw("section4.point7.description"),
        },
        {
          title: t("section4.point8.title"),
          description: t("section4.point8.description"),
        },
        {
          title: t("section4.point9.title"),
          description: t("section4.point9.description"),
        },
        {
          title: t("section4.point10.title"),
          description: t("section4.point10.description"),
        },
        {
          description: t("section4.point11.description"),
        },
      ],
    },
  ]

  return (
    <WhiteLayout
      align="center"
      title={t("pageTitle")}
      description={t("PageDate")}
    >
      {data.map((item, index) => (
        <PolicyLayout key={index} {...item} />
      ))}
    </WhiteLayout>
  )
}

export default TermsAndConditions
