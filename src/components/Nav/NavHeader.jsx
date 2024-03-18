import Nav from "./Nav";

import { Wrapper } from "./NavHeader.style";
const Vars = {
  init: {
    opacity: 0,
    transition: { duration: 0 },
  },
  ani: {
    opacity: 1,
    transition: { duration: 0.6 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0 },
  }
}

function NavHeader() {
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

export default NavHeader;