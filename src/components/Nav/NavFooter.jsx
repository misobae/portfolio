import Nav from "./Nav";

import { Wrapper } from "./NavFooter.style";
const Vars = {
  init: {
    opacity: 0,
    transition: { duration: 0, delay: 0 },
  },
  ani: {
    opacity: 1,
    transition: { duration: 0.6, delay: 0.7 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0, delay: 0 },
  }
}

function NavFooter() {
  return (
    <Wrapper
      variants={Vars}
      initial="init"
      animate="ani"
      exit="exit"
    >
      <Nav />
    </Wrapper>
  )
}

export default NavFooter;