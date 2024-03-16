import NavHeader from "../components/Nav/NavHeader";

import { PageVars } from "../constants/pageVariants";

import { Content } from "../styles/Common";

function About() {
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
          About
        </p>
      </Content>
    </>
  )
}

export default About;