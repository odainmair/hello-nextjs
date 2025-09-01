import { WhiteLayout } from "@/components/layout"
import PolicyLayout, {
  HeaderWithTitleProps,
} from "@/components/layout/PolicyLayout"
import { useTranslations } from "next-intl"
import React from "react"

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPolicyPage")

  const data: HeaderWithTitleProps[] = [
    {
      title: t("section1.title"),
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
          description: t.raw("section1.points.point3.description"),
        },
        {
          title: t("section1.points.point4.title"),
          description: t("section1.points.point4.description"),
        },
        {
          title: t("section1.points.point5.title"),
          table: {
            headers: t.raw("section1.points.point5.table.headers"),
            rows: t.raw("section1.points.point5.table.rows"),
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
          listItems: t.raw("section2.points.point1.listItems"),
        },
        {
          title: t("section2.points.point2.title"),
          listItems: t.raw("section2.points.point2.listItems"),
        },
        {
          title: t("section2.points.point3.title"),
          listItems: t.raw("section2.points.point3.listItems"),
          description: t.raw("section2.points.point3.description"),
        },
        {
          title: t("section2.points.point4.title"),
          listItems: t.raw("section2.points.point4.listItems"),
        },
        {
          title: t("section2.points.point5.title"),
          description: t("section2.points.point5.description"),
          subTitles: t.raw("section2.points.point5.subTitles"),
        },
        {
          title: t("section2.points.point6.title"),
          description: t("section2.points.point6.description"),
        },
        {
          title: t("section2.points.point7.title"),
          description: t("section2.points.point7.description"),
        },
        {
          title: t("section2.points.point8.title"),
          description: t.raw("section2.points.point8.description"),
        },
        {
          title: t("section2.points.point9.title"),
          description: t.raw("section2.points.point9.description"),
        },
        {
          title: t("section2.points.point10.title"),
          description: t("section2.points.point10.description"),
        },
        {
          title: t("section2.points.point11.title"),
          description: t("section2.points.point11.description"),
        },
        {
          title: t("section2.points.point12.title"),
          description: t("section2.points.point12.description"),
        },
        {
          title: t("section2.points.point13.title"),
          description: t.raw("section2.points.point13.description"),
        },
        {
          title: t("section2.points.point14.title"),
          description: t.raw("section2.points.point14.description"),
        },
        {
          title: t("section2.points.point15.title"),
          description: t("section2.points.point15.description"),
        },
        {
          title: t("section2.points.point16.title"),
          description: t.raw("section2.points.point16.description"),
        },
        {
          title: t("section2.points.point17.title"),
          description: t.raw("section2.points.point17.description"),
        },
        {
          title: t("section2.points.point18.title"),
          description: t.raw("section2.points.point18.description"),
        },
        {
          title: t("section2.points.point19.title"),
          description: t.raw("section2.points.point19.description"),
        },
        {
          title: t("section2.points.point20.title"),
          description: t("section2.points.point20.description"),
        },
        {
          title: t("section2.points.point21.title"),
          description: t.raw("section2.points.point21.description"),
        },
        {
          title: t("section2.points.point22.title"),
          description: t.raw("section2.points.point22.description"),
        },
        {
          title: t("section2.points.point23.title"),
          description: t("section2.points.point23.description"),
        },
        {
          title: t("section2.points.point24.title"),
          description: t("section2.points.point24.description"),
        },
        {
          title: t("section2.points.point25.title"),
          description: t("section2.points.point25.description"),
        },
        {
          title: t("section2.points.point26.title"),
          description: t.raw("section2.points.point26.description"),
        },
        {
          title: t("section2.points.point27.title"),
          description: t.raw("section2.points.point27.description"),
        },
      ],
    },
    {
      title: t("section3.title"),
      points: [
        {
          description: t("section3.points.point1.description"),
        },
      ],
    },
  ]
  return (
    <main>
      <WhiteLayout
        title={t("pageTitle")}
        description={t("PageDate")}
        align="center"
      >
        {data.map((item, index) => (
          <PolicyLayout key={index} {...item} />
        ))}
      </WhiteLayout>
    </main>
  )
}

export default PrivacyPolicy
