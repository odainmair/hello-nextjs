import { cn } from "@/lib/utils"

// Container component with responsive breakpoints
interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        // `mx-auto w-full px-4 sm:px-6 md:px-8 xl:max-w-7xl 2xl:max-w-[1440px]`,
        `px-(--gallery-side-padding)`,
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Container
