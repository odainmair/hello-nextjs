import { WhiteLayout } from "@/components/layout"
import PolicyLayout, {
  HeaderWithTitleProps,
} from "@/components/layout/PolicyLayout"
import { useTranslations } from "next-intl"
import React from "react"

const SecurityStatementPage = () => {
  const t = useTranslations("SecurityStatementPage")

  const data: HeaderWithTitleProps[] = [
    {
      title: t("section1.title"),
      points: [
        {
          description: t("section1.points.point1.description"),
        },
        {
          title: t("section1.points.point2.title"),
          listItems: t.raw("section1.points.point2.listItems"),
        },
        {
          title: t("section1.points.point3.title"),
          listItems: t.raw("section1.points.point3.listItems"),
        },
        {
          title: t("section1.points.point4.title"),
          listItems: t.raw("section1.points.point4.description"),
        },
        // {
        //   description: t.raw("section1.points.point5.description"),
        // },
      ],
    },
  ]
  return (
    <WhiteLayout
      align="center"
      title={t("titlePage")}
      description={t("datePage")}
    >
      {data.map((item, index) => (
        <PolicyLayout key={index} {...item} />
      ))}
    </WhiteLayout>
  )
}

export default SecurityStatementPage
