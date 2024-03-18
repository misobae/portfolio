import { PageVars } from "../constants/pageVariants";

import { Wrapper, Content } from "../styles/Common";

import Title from '../components/Common/Title';
import Footer from "../components/Footer/Footer";

function Experience() {
  return (
    <>
      <Wrapper>
        <Title title="Experience" />
        <Content
          variants={PageVars}
          initial="init"
          animate="ani"
          exit="exit"
        >
        </Content>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Experience;