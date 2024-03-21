import MetaTag from "../SEOMetaTag";
import { Link } from "react-router-dom";

import { pageVars } from "../constants/pageVariants";
import projectsData from "../data/projectsData";

import { Wrapper, Content } from "../styles/Common";
import Title from '../components/Common/Title';

import ProjectsItem from '../components/Projects/ProjectsItem';
import { ProjectsWrap } from "../components/Projects/Projects.style";


function Projects() {
  return (
    <>
      <MetaTag
        title="Projects - misobae"
        description="FrontEnd Developer Miso&#x27;s Web - Projects page" 
        keywords="portfolio, FrontEnd, Projects, Web Projects"
        imgsrc={`https://misobae.github.io/portfolio/meta-img.jpg`}
        url="https://misobae.github.io/portfolio/" 
      />

      <Wrapper>
        <Title title="Projects" />
        <Content
          variants={pageVars}
          initial="init"
          animate="ani"
          exit="exit"
        >
          <ProjectsWrap>
            {projectsData.map((item, i) => (
              <Link key={`item${i}`} to={`${item.id}`}>
                <ProjectsItem
                  thumbSrc={item.thumbSrc}
                  tech={item.tech}
                  title={item.title}
                />
              </Link>
            ))}
          </ProjectsWrap>
        </Content>
      </Wrapper>
    </>
  )
}

export default Projects;