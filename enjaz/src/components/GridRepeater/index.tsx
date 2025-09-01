import React, { ComponentType } from "react"

interface GridRepeaterProps<T> {
  Component: ComponentType<T>
  repeatCount: number
  componentProps?: T // Optional props to pass to each component instance
}

const GridRepeater = <T,>({
  Component,
  repeatCount,
  componentProps,
}: GridRepeaterProps<T>) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: repeatCount }).map((_, index) => (
        <Component key={index} {...(componentProps || ({} as T))} />
      ))}
    </div>
  )
}

export default GridRepeater
