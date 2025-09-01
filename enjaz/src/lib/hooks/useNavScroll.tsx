import { useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"

const useNavScroll = () => {
  const { scrollY } = useScroll()
  const [navState, setNavState] = useState<"visible" | "hidden" | "scrolled">(
    "visible",
  )

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > 150 && latest > previous) {
      setNavState("hidden") // Hide when scrolling down past 150px
    } else if (latest > 150) {
      setNavState("scrolled") // Show with white background when past 150px
    } else {
      setNavState("visible") // Show transparent at top
    }
  })

  return { navState, isScrolled: navState === "scrolled" }
}
export default useNavScroll
