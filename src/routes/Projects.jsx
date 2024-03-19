import { PageVars } from "../constants/pageVariants";
import projectsData from "../data/projectsData";

import Title from '../components/Common/Title';
import ProjectsItem from '../components/Projects/ProjectsItem';
import { ProjectsWrap } from "../components/Projects/Projects.style";
import Footer from "../components/Footer/Footer";

import { Wrapper, Content } from "../styles/Common";

function Projects() {
  return (
    <>
      <Wrapper>
        <Title title="Projects" />
        <Content
          variants={PageVars}
          initial="init"
          animate="ani"
          exit="exit"
        >
          <ProjectsWrap>
            {projectsData.map((item, i) => (
              <ProjectsItem
                key={`item${i}`}
                imgUrl={item.imgUrl}
                subTitle={item.subTitle}
                mainTItle={item.mainTitle}
              />
            ))}
          </ProjectsWrap>
        </Content>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Projects;