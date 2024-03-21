import { useParams } from 'react-router-dom';

import { pageVars } from "../constants/pageVariants";
import projectsData from "../data/projectsData";

import { Wrapper, Content, CodeBox, Code, ContentTitle } from "../styles/Common";
import { ProjectTitle, ProjectImg, List } from "../components/Projects/Projects.style";

function ProjectDetail() {
  const params = useParams();
  const id = params.projectId;
  
  return (
    <Wrapper>
      <Content
        variants={pageVars}
        initial="init"
        animate="ani"
        exit="exit"
      >
        <ProjectTitle>
          <h2 className='title'>{projectsData[id].title}</h2>
          <div className='others'>
            <span className='others__date'>{projectsData[id].date}</span>
            <div className='others__links'>
              <a target="_blank" rel="noopener noreferrer" href={projectsData[id].github}>GITHUB</a>
              <a target="_blank" rel="noopener noreferrer" href={projectsData[id].deployed}>DEPLOYED LINK</a>
              <a target="_blank" rel="noopener noreferrer" href={projectsData[id].blog}>BLOG</a>
            </div>
          </div>
        </ProjectTitle>

        <p>{projectsData[id].summary}</p>

        <ProjectImg>
          <img src={projectsData[id].imgSrc} alt='프로젝트 이미지' />
        </ProjectImg>

        <ContentTitle>Tech Stacks</ContentTitle>
        <CodeBox>
          {projectsData[id].tech.map((item, idx) => (
            <Code key={"tech" + idx}>{item}</Code>
          ))}
        </CodeBox>

        <ContentTitle>Features</ContentTitle>
        {projectsData[id].featureTitle.map((item, idx) => (
          <List key={"feat" + idx}>
            <h4 className='title'>{item}</h4>
            <p className='item'>{projectsData[id].featureDesc[idx]}</p>
          </List>
        ))}
      </Content>
    </Wrapper>
  )
}

export default ProjectDetail;