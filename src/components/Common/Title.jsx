import styled from "styled-components";
import { motion } from "framer-motion";

const MenuTitle = styled(motion.div)`
  opacity: 0.3;
  width: 100%;
  padding: 56px 0 64px;
  color: #fff;
  font-size: 180px;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-align: center;
`;

function Title({ title }) {
  return (
    <MenuTitle
      initial={{
        opacity: 0,
        transform: "perspective(500px) translate3d(0, 100px, 0px)",
        transition: { type: 'ease', duration: 0.35 }
      }}
      animate={{
        opacity: 0.3,
        transform: "perspective(500px) translate3d(0, 0px, 40px)",
        transition: { type: 'ease', duration: 0.5, delay: 0.5 }
      }}
      exit={{
        opacity: 0,
        transform: "perspective(500px) translate3d(0, 100px, 0px)",
        transition: { type: 'ease', duration: 0.35 }
      }}
    >
      {title}
    </MenuTitle>
  )
}

export default Title;