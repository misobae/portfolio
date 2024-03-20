export const pageVars = {
  init: {
    zIndex: 0,
    opacity: 0,
    transform: "translate3d(0, 100px, 0)",
    transition: { type: 'ease', duration: 0.35 }
  },
  ani: {
    zIndex: 10,
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
    transition: { type: 'ease', duration: 0.35, delay: 0.2 }
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    transform: "translate3d(0, 100px, 0)",
    transition: { type: 'ease', duration: 0.35 }
  }
};

export const boxMotion = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: {
    ease: "easeInOut",
    duration: 0.5,
  }
};