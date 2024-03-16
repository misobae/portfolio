import NavHeader from "../components/Nav/NavHeader";

import { PageVars } from "../constants/pageVariants";

import { Content } from "../styles/Common";

function Experience() {
  return (
    <>
      <NavHeader />
      <Content
        variants={PageVars}
        initial="init"
        animate="ani"
        exit="exit"
      >
        <p>
          Experience
        </p>
      </Content>
    </>
  )
}

export default Experience;