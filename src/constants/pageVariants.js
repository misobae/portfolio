export const PageVars = {
  init: {
    zIndex: 0,
    opacity: 0,
    transform: "translate3d(0, 20%, 0)",
    transition: { type: 'spring', duration: 0.6 }
  },
  ani: {
    zIndex: 10,
    opacity: 1,
    transform: "translate3d(0, 0%, 0)",
    transition: { type: 'spring', duration: 0.6 }
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    transform: "translate3d(0, 20%, 0)",
    transition: { type: 'spring', duration: 0.6 }
  }
}