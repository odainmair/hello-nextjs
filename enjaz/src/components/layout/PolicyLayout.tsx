import React, { FC } from "react"
import Typography from "../ui/typography"
import { cn } from "@/lib/utils"

type Table = {
  headers?: string[]
  rows: (string | number)[][]
}
type subTitles = {
  title?: string
  description?: string | string[]
}

type PointItem = {
  title?: string
  description?: string | string[]
  table?: Table
  listItems?: string[]
  subTitles?: subTitles[]
}

export type HeaderWithTitleProps = {
  title?: string
  redParagraph?: string
  points?: PointItem[]
}

const PolicyLayout: FC<HeaderWithTitleProps> = ({
  points,
  title,
  redParagraph,
}) => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <Typography
          variant={"h4"}
          component={"h2"}
          color={"error"}
          weight={"semibold"}
          className="mt-4"
        >
          {title}
        </Typography>

        {redParagraph && (
          <Typography
            variant={"body1"}
            component={"h3"}
            color={"error"}
            weight={"semibold"}
          >
            {redParagraph}
          </Typography>
        )}
      </div>

      {points?.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Typography variant={"h5"} weight={"semibold"} component={"h4"}>
            {item.title}
          </Typography>
          {Array.isArray(item.description) ? (
            item.description.map((desc, idx) => (
              <Typography
                key={idx}
                variant={"body1"}
                color={"gray"}
                weight={"normal"}
                leading={"relaxed"}
                // tracking={"wide"}
              >
                {desc}
              </Typography>
            ))
          ) : (
            <Typography
              variant={"body1"}
              color={"gray"}
              weight={"normal"}
              leading={"relaxed"}
              // tracking={"wide"}
            >
              {item.description}
            </Typography>
          )}

          {item.subTitles &&
            item.subTitles.map((subTitle, index) => (
              <div key={index}>
                <Typography
                  variant={"body1"}
                  weight={"semibold"}
                  component={"h5"}
                  className="mb-2"
                >
                  {subTitle.title}
                </Typography>

                {Array.isArray(subTitle.description) ? (
                  subTitle.description.map((desc, idx) => (
                    <Typography
                      key={idx}
                      variant={"body2"}
                      color={"gray"}
                      weight={"normal"}
                      tracking={"wide"}
                    >
                      {desc}
                    </Typography>
                  ))
                ) : (
                  <Typography
                    variant={"body2"}
                    color={"gray"}
                    weight={"normal"}
                    tracking={"wide"}
                  >
                    {subTitle.description}
                  </Typography>
                )}
              </div>
            ))}

          <div className="overflow-x-auto">
            {item.table && (
              <div className="my-8 rounded-3xl border border-gray-200 shadow-sm">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-50">
                      {item.table.headers?.map((header, index) => (
                        <th
                          key={index}
                          className="px-4 py-4 text-left text-sm font-bold text-gray-400 lg:min-w-sm lg:px-6 rtl:text-right"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.table.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={
                          rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={cn(
                              "px-6 py-4 text-sm text-black/50",
                              cellIndex === 0 ? "font-semibold text-black" : "",
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {item.listItems && (
            <ul className="list-disc ps-6">
              {item.listItems.map((item, index) => (
                <li key={index} className="text-gray py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  )
}

export default PolicyLayout
