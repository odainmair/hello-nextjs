"use client"

import { useTransition } from "react"
import { Button } from "../ui/button"
import useNavigation from "@/lib/hooks/useNavigation"
import { useSearchParams } from "next/navigation"

interface Category {
  id: number
  name: string
  slug: string
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Category 1",
    slug: "category-1",
  },
  {
    id: 2,
    name: "Category 2",
    slug: "category-2",
  },
  {
    id: 3,
    name: "Category 3",
    slug: "category-3",
  },
]

const BlogsCategory = () => {
  const { createQueryString, removeQueryString } = useNavigation()
  const [isPending, startTransition] = useTransition()
  const params = useSearchParams()

  const isActive = (category: string | null): boolean => {
    if (category === null) {
      return !params.get("category")
    }
    return params.get("category") === category
  }

  const handleToggleQuery = (category: string): void => {
    startTransition(() => {
      if (isActive(category)) {
        removeQueryString("category")
      } else {
        createQueryString({ category })
      }
    })
  }

  return (
    <div className="flex w-full justify-center">
      <ul className="flex flex-nowrap gap-2 overflow-x-auto">
        <li>
          <Button
            variant={isActive(null) ? "black" : "white"}
            onClick={() => removeQueryString("category")}
            disabled={isPending}
          >
            All Blogs
          </Button>
        </li>
        {CATEGORIES.map(({ id, name, slug }) => (
          <li key={id}>
            <Button
              variant={isActive(slug) ? "black" : "white"}
              onClick={() => handleToggleQuery(slug)}
              disabled={isPending}
              className="flex-1"
              size={"lg"}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogsCategory
