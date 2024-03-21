import { LoadingTop, LoadingBottom } from "./Loading.style";

const motion = {
  initial: {
    opacity: 1,
    height: "50vh"
  },
  animate: {
    opacity: 0.5,
    height: "0vh"
  },
  transition: {
    delay: 0.5,
    duration: 0.85,
    opacity: { duration: 3 }
  }
}

function Loading() {
  return (
    <>
      <LoadingTop {...motion} />
      <LoadingBottom {...motion} />
    </>
  )
}

export default Loading;