import { WhiteLayout } from "@/components/layout"
import PolicyLayout, {
  HeaderWithTitleProps,
} from "@/components/layout/PolicyLayout"
import { useTranslations } from "next-intl"

const TermsOfUsePage = () => {
  const t = useTranslations("TermsOfUsePage")

  const data: HeaderWithTitleProps[] = [
    {
      title: t("section1.title"),
      points: [
        {
          description: t.raw("section1.points.point1.description"),
          listItems: t.raw("section1.points.point1.listItems"),
        },
        {
          title: t("section1.points.point2.title"),
          description: t.raw("section1.points.point2.description"),
        },
        {
          title: t("section1.points.point3.title"),
          description: t.raw("section1.points.point3.description"),
        },
        {
          title: t("section1.points.point4.title"),
          description: t.raw("section1.points.point4.description"),
        },
        {
          title: t("section1.points.point5.title"),
          description: t.raw("section1.points.point4.description"),
        },
        {
          title: t("section1.points.point6.title"),
          description: t.raw("section1.points.point6.description"),
        },
        {
          title: t("section1.points.point7.title"),
          description: t.raw("section1.points.point7.description"),
        },
        {
          title: t("section1.points.point8.title"),
          description: t.raw("section1.points.point8.description"),
        },
        {
          title: t("section1.points.point9.title"),
          description: t.raw("section1.points.point9.description"),
        },
        {
          title: t("section1.points.point10.title"),
          description: t.raw("section1.points.point10.description"),
        },
        {
          title: t("section1.points.point11.title"),
          description: t.raw("section1.points.point11.description"),
        },
        {
          title: t("section1.points.point12.title"),
          subTitles: t
            .raw("section1.points.point12.subTitles")
            .map((subTitle: any) => ({
              title: subTitle.title,
              description: Array.isArray(subTitle.description)
                ? subTitle.description
                : [subTitle.description],
            })),
        },
        {
          title: t("section1.points.point13.title"),
          subTitles: t
            .raw("section1.points.point13.subTitles")
            .map((subTitle: any) => ({
              title: subTitle.title,
              description: Array.isArray(subTitle.description)
                ? subTitle.description
                : [subTitle.description],
            })),
        },
        {
          title: t("section1.points.point14.title"),
          description: t.raw("section1.points.point14.description"),
        },
        {
          title: t("section1.points.point15.title"),
          subTitles: t
            .raw("section1.points.point13.subTitles")
            .map((subTitle: any) => ({
              title: subTitle.title,
              description: Array.isArray(subTitle.description)
                ? subTitle.description
                : [subTitle.description],
            })),
        },
        {
          title: t("section1.points.point16.title"),
          description: t.raw("section1.points.point16.description"),
        },
        {
          title: t("section1.points.point17.title"),
          description: t.raw("section1.points.point17.description"),
        },
        {
          title: t("section1.points.point18.title"),
          description: t.raw("section1.points.point18.description"),
        },
        {
          title: t("section1.points.point19.title"),
          description: t.raw("section1.points.point19.description"),
        },
        {
          title: t("section1.points.point20.title"),
          description: t.raw("section1.points.point20.description"),
        },
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
        <PolicyLayout key={index} title={item.title} points={item.points} />
      ))}
    </WhiteLayout>
  )
}

export default TermsOfUsePage
