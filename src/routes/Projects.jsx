import { PageVars } from "../constants/pageVariants";
import galleryItems from "../constants/galleryItems";

import Title from '../components/Common/Title';
import GalleryItem from '../components/Gallery/GalleryItem';

import { Wrapper, Content } from "../styles/Common";
import { GalleryWrap } from "../styles/Gallery";

function Projects() {
  return (
    <>
      <Wrapper>
        <Title title="PROJECTS" />
        <Content
          variants={PageVars}
          initial="init"
          animate="ani"
          exit="exit"
        >
          <GalleryWrap>
            {galleryItems.map((item, i) => (
              <GalleryItem
                key={`item${i}`}
                imgUrl={item.imgUrl}
                subTitle={item.subTitle}
                mainTItle={item.mainTitle}
              />
            ))}
          </GalleryWrap>
        </Content>
      </Wrapper>
    </>
  )
}

export default Projects;