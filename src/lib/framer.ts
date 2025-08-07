import { Variants } from "framer-motion";

// Animation variants for consistent motion patterns
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

// More dramatic fade in up for better visibility
export const dramaticFadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export const slideInFromLeft: Variants = {
  initial: {
    opacity: 0,
    x: -80,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const slideInFromRight: Variants = {
  initial: {
    opacity: 0,
    x: 80,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// More dramatic stagger container
export const dramaticStaggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const cardHover = {
  scale: 1.03,
  y: -8,
  transition: {
    duration: 0.3
  },
};

export const modernCardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0 20px 64px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

export const parallaxY: Variants = {
  initial: { y: 0 },
  animate: (custom: number) => ({
    y: custom * -0.5,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  }),
};

export const smoothScale: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const modalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 100,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const backdropVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Page transition variants
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

// Utility functions
export const createStaggerDelay = (index: number, baseDelay: number = 0.1) => {
  return {
    delay: index * baseDelay,
  };
};

export const createSpringTransition = (
  stiffness: number = 300,
  damping: number = 20
) => {
  return {
    type: "spring",
    stiffness,
    damping,
  };
};

export const simpleCardHover: Variants = {
  rest: { scale: 1, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" },
  hover: {
    scale: 1.03,
    boxShadow: "0 16px 48px rgba(0,0,0,0.16)",
    transition: { type: "tween", duration: 0.2 }
  },
  tap: {
    scale: 0.98,
    transition: { type: "tween", duration: 0.1 }
  }
};
