import MetaTag from "../SEOMetaTag";

import { expCunextData, expFreeData } from "../data/experienceData";
import { pageVars, boxMotion } from "../constants/pageVariants";

import Title from '../components/Common/Title';

import { Wrapper, Content, Code } from "../styles/Common";
import { 
  ExperienceWrap,
  ExperienceTitle,
  ExperienceList,
  ExperienceItem,
  ExperienceCont,
  ExperienceCodeBox
} from "../components/Experience/Experience.style";

function Experience() {

  return (
    <>
      <MetaTag
        title="Experience - misobae" 
        description="FrontEnd Developer Miso&#x27;s Web - Experience page" 
        keywords="portfolio, FrontEnd, Experience"
        imgsrc={`https://misobae.github.io/portfolio/meta-img.jpg`}
        url="https://misobae.github.io/portfolio/" 
      />

      <Wrapper>
        <Title title="Experience" />
        <Content
          variants={pageVars}
          initial="init"
          animate="ani"
          exit="exit"
        >
          <ExperienceWrap>
            <ExperienceTitle {...boxMotion}>
              <strong>Freelancer</strong>
              <span>2023. 01. -</span>
            </ExperienceTitle>
            <ExperienceList>
            {expFreeData.map((item, idx) => (
              <ExperienceItem key={`key${idx}`}  {...boxMotion}>
                <h3>{item.title}</h3>
                {item.summary ? (
                  <ExperienceCont>
                    <p>{item.summary}</p>
                  </ExperienceCont>
                ) : null}
                <ExperienceCont>
                  <strong>기술 스택</strong>
                  <ExperienceCodeBox>
                    {item.skill.map((skill, i) => (
                      <Code key={`skill${i}`}>{skill}</Code>
                    ))}
                  </ExperienceCodeBox>
                </ExperienceCont>
                <ExperienceCont>
                  <strong>작업 기간</strong>
                  {item.date}
                </ExperienceCont>
                <ExperienceCont>
                  <strong>작업 내용</strong>
                  <ul>
                  {item.description.map((desc, i) => (
                    <li key={`desc${i}`}>{desc}</li>
                  ))}
                  </ul>
                </ExperienceCont>
              </ExperienceItem>
            ))}
            </ExperienceList>

          </ExperienceWrap>

          <ExperienceWrap>
            <ExperienceTitle {...boxMotion}>
              <strong>CUNEXT</strong>
              <span>2020. 12. - 2022. 12</span>
            </ExperienceTitle>
            <ExperienceList>
            {expCunextData.map((item, idx) => (
              <ExperienceItem key={`key${idx}`} {...boxMotion}>
                <h3>{item.title}</h3>
                {item.summary ? (
                  <ExperienceCont>
                    <p>{item.summary}</p>
                  </ExperienceCont>
                ) : null}
                <ExperienceCont>
                  <strong>기술 스택</strong>
                  <ExperienceCodeBox>
                    {item.skill.map((skill, i) => (
                      <Code key={`skill${i}`}>{skill}</Code>
                    ))}
                  </ExperienceCodeBox>
                </ExperienceCont>
                <ExperienceCont>
                  <strong>작업 기간</strong>
                  {item.date}
                </ExperienceCont>
                <ExperienceCont>
                  <strong>작업 내용</strong>
                  <ul>
                  {item.description.map((desc, i) => (
                    <li key={`desc${i}`}>{desc}</li>
                  ))}
                  </ul>
                </ExperienceCont>
              </ExperienceItem>
            ))}
            </ExperienceList>
          </ExperienceWrap>
        </Content>
      </Wrapper>
    </>
  )
}

export default Experience;