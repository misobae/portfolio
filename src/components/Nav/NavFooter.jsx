import Nav from "./Nav";

import { Wrapper } from "./NavFooter.style";

function NavFooter() {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <Nav />
    </Wrapper>
  )
}

export default NavFooter;