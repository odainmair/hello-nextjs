import { Variants } from "motion/react"

// Animation variants
export const navBarVariants: Variants = {
  hidden: {
    y: -100,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  visible: {
    y: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
    transition: {
      duration: 0.3,
      backgroundColor: { duration: 0.3, ease: "easeOut" },
    },
  },
  scrolled: {
    y: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    transition: {
      duration: 0.3,
      backgroundColor: { duration: 0.3, ease: "easeOut" },
    },
  },
}

export const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
      bounce: 10,
      stiffness: 100,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
      bounce: 10,
      stiffness: 100,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "afterChildren", // Changed to afterChildren for exit animation
      staggerChildren: 0.1, // Faster staggering for exit
      staggerDirection: -1, // Reverse stagger direction (last child animates first)
      bounce: 10,
      stiffness: 100,
    },
  },
}

export const menuLinkVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    x: 60,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 60,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

export const TransferHeroSectionVariants: Variants = {
  hidden: {
    opacity: 0,
    // y: 100,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
  show: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    // y: 100,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.3,
      when: "afterChildren",
    },
  },
}

export const FadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
      ease: "anticipate",
      staggerChildren: 0.2,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
      staggerChildren: 0.2,
      when: "beforeChildren",
      bounce: 50,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
      when: "afterChildren",
    },
  },
}

export const FadeIn: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
      when: "afterChildren",
    },
  },
}

export const PopUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    backdropFilter: "blur(10px)",
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.2,
      bounce: 50,
    },
  },
  show: {
    opacity: 1,
    scale: [0, 1.2, 1], // Keyframes: start at 0, bounce to 1.5, settle at 1
    backdropFilter: "blur(10px)",
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.2,
      when: "beforeChildren",
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    backdropFilter: "blur(10px)",
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.2,
      when: "afterChildren",
    },
  },
}
