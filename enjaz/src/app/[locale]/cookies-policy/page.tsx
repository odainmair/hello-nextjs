import { PolicyLayout, WhiteLayout } from "@/components/layout"
import { HeaderWithTitleProps } from "@/components/layout/PolicyLayout"
import { useTranslations } from "next-intl"
import React from "react"

const CookiesPolicy = () => {
  const t = useTranslations("CookiesPolicy")

  // Construct data array from translations
  const data: HeaderWithTitleProps[] = [
    {
      title: t("pageTitle"),
      points: [
        {
          title: t("section1.points.point1.title"),
          description: t("section1.points.point1.description"),
        },
        {
          title: t("section1.points.point2.title"),
          description: t("section1.points.point2.description"),
        },
        {
          title: t("section1.points.point3.title"),
          description: t("section1.points.point3.description"),
        },
        {
          title: t("section1.points.point4.title"),
          description: t("section1.points.point4.description"),
          table: {
            headers: t.raw("section1.points.point4.table.headers"),
            rows: t.raw("section1.points.point4.table.rows"),
          },
        },
      ],
    },
    {
      title: t("section2.title"),
      points: [
        {
          title: t("section2.points.point1.title"),
          description: t("section2.points.point1.description"),
        },
        {
          title: t("section2.points.point2.title"),
          description: t.raw("section2.points.point2.description"),
        },
        {
          title: t("section2.points.point3.title"),
          description: t("section2.points.point3.description"),
          table: {
            headers: t.raw("section2.points.point3.table.headers"),
            rows: t.raw("section2.points.point3.table.rows"),
          },
        },
        {
          title: t("section2.points.point4.title"),
          description: t("section2.points.point4.description"),
          table: {
            headers: t.raw("section2.points.point4.table.headers"),
            rows: t.raw("section2.points.point4.table.rows"),
          },
        },
        {
          title: t("section2.points.point5.title"),
          description: t("section2.points.point5.description"),
          table: {
            headers: t.raw("section2.points.point5.table.headers"),
            rows: t.raw("section2.points.point5.table.rows"),
          },
        },
        {
          title: t("section2.points.point6.title"),
          description: t.raw("section2.points.point6.description"),
          listItems: t.raw("section2.points.point6.listItems"),
        },
        {
          title: t("section2.points.point7.title"),
          description: t("section2.points.point7.description"),
        },
        {
          title: t("section2.points.point8.title"),
          description: t("section2.points.point8.description"),
        },
        {
          title: t("section2.points.point9.title"),
          description: t.raw("section2.points.point9.description"),
        },
      ],
    },
    {
      title: t("periodicReview.title"),
      points: [{ description: t("periodicReview.description") }],
    },
  ]
  return (
    <main>
      <WhiteLayout
        title={t("pageTitle")}
        description={t("pageDescription")}
        align="center"
      >
        {/* Section 1: Overview */}
        {data.map((item, index) => (
          <PolicyLayout key={index} title={item.title} points={item.points} />
        ))}
      </WhiteLayout>
    </main>
  )
}

export default CookiesPolicy
