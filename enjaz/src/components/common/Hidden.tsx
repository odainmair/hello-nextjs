import React, { PropsWithChildren } from "react"

const Hidden = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-max w-fit overflow-hidden py-0.5">{children}</div>
  )
}

export default Hidden
