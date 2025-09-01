import { cva, VariantProps } from "class-variance-authority"
import { ElementType, forwardRef, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-semibold tracking-[-2px] lg:text-6xl",
      h2: "text-2xl sm:text-3xl font-semibold tracking-[-1px] lg:text-5xl leading-[110%]",
      h3: "text-2xl font-[500] tracking-tight lg:text-3xl",
      h4: "text-xl font-normal md:text-xl tracking-tight lg:text-2xl",
      h5: "text-lg font-semibold tracking-tight lg:text-xl",
      h6: "text-base font-normal tracking-tight lg:text-lg",
      subtitle: "text-[12px] font-normal md:text-lg tracking-tight lg:text-xl",
      subtitle1: "text-sm font-medium tracking-tight lg:text-base",
      subtitle2: "text-xs font-medium tracking-tight lg:text-sm",
      subtitle3: "text-[10px] font-medium tracking-tight lg:text-xs",
      body1: "text-sm font-normal tracking-tight lg:text-base",
      body2: "text-xs font-normal tracking-tight lg:text-sm",
      caption: "text-xs font-normal tracking-tight lg:text-sm",
      "big-caption": "lg:text-lg  tracking-[-1px] font-normal text-sm",
      overline: "text-xs font-normal tracking-tight lg:text-sm",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      text: "text-text",
      error: "text-[#F53B24]",
      warning: "text-warning",
      success: "text-success",
      info: "text-info",
      black: "text-black dark:text-white",
      white: "text-white dark:text-black",
      muted: "text-muted",
      gray: "text-gray",
      "light-gray": "text-[#A7A7A7]",
      "linear-red":
        "bg-linear-to-r from-[#F53B23] from-35% to-[#FFC700] to-100% bg-clip-text text-transparent",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    transform: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      none: "normal-case",
    },
    decoration: {
      underline: "underline",
      "line-through": "line-through",
      none: "no-underline",
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    tracking: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
      enjaz: "tracking-[-2px]",
      "extra-tight": "tracking-[-1px]",
    },
    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    noWrap: {
      true: "whitespace-nowrap",
    },
    truncate: {
      true: "truncate",
    },
    lineClamp: {
      1: "line-clamp-1",
      2: "line-clamp-2",
      3: "line-clamp-3",
      4: "line-clamp-4",
      5: "line-clamp-5",
      6: "line-clamp-6",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "text",
    transform: "none",
    decoration: "none",
  },
})

type TypographyVariants = VariantProps<typeof typographyVariants>

interface TypographyProps
  extends Omit<TypographyVariants, "truncate" | "lineClamp"> {
  component?: ElementType
  children: ReactNode
  className?: string
  truncate?: boolean
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6
}

const Typography = forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const {
    component: Component = "p",
    children,
    className,
    lineClamp,
    truncate,
    ...rest
  } = props
  const baseClasses = twMerge(
    typographyVariants({
      ...rest,
      ...(lineClamp ? { lineClamp } : truncate ? { lineClamp: 1 } : {}),
    }),
    className,
  )

  return (
    <Component ref={ref} className={baseClasses}>
      {children}
    </Component>
  )
})

Typography.displayName = "Typography"

export default Typography
