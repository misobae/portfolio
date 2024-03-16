import NavHeader from "../components/Nav/NavHeader";

import { PageVars } from "../constants/pageVariants";

import { Content } from "../styles/Common";

function Projects() {
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
          Projects
        </p>
      </Content>
    </>
  )
}

export default Projects;