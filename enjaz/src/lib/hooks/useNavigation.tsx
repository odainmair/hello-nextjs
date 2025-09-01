"use client"

import { useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { useLocale } from "next-intl"
import { getPathname, usePathname, useRouter } from "@/i18n/navigation"
type Props = {
  justUpdateUrl?: boolean
}

const useNavigation = (justUpdateUrl?: Props) => {
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()
  const pathNameUrl = getPathname({
    href: pathname,
    locale,
  })

  const searchParams = useSearchParams()

  // function takes a parames and return new router
  const updateQueryParams = useCallback(
    (updateFn: (params: URLSearchParams) => void) => {
      const params = new URLSearchParams(searchParams.toString())
      updateFn(params)
      // router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      // router.prefetch(`${pathname}?${params.toString()}`);
      if (justUpdateUrl) {
        window.history.replaceState(
          null,
          "",
          `${pathNameUrl}?${params.toString()}`,
        )
      } else {
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
      }
    },
    [searchParams, pathname, router, justUpdateUrl, pathNameUrl],
  )

  const createQueryString = useCallback(
    (queryParams: Record<string, string | string[]>) => {
      updateQueryParams((params) => {
        Object.entries(queryParams).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((v) => params.append(key, v))
          } else {
            params.set(key, value)
          }
        })
      })
    },
    [updateQueryParams],
  )

  const removeQueryString = useCallback(
    (names: string | string[]) => {
      updateQueryParams((params) => {
        if (Array.isArray(names)) {
          names.forEach((name) => params.delete(name))
        } else {
          params.delete(names)
        }
      })
    },
    [updateQueryParams],
  )

  return { createQueryString, removeQueryString }
}

export default useNavigation
