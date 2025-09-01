"use client"

import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  href: string
  className?: string
  isScrolled?: boolean
  onClick?: () => void
}
const NavLink: FC<Props> = ({
  href,
  children,
  className,
  isScrolled,
  onClick,
}) => {
  const pathname = usePathname()

  const isActivePath = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "font-normal tracking-wide text-white transition-all duration-300 hover:opacity-80",
        isActivePath ? "font-medium" : "",
        isScrolled && "text-black",
        className,
      )}
      prefetch={true}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default NavLink
