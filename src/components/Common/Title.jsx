import styled from "styled-components";
import { motion } from "framer-motion";
import device from "../../styles/responsive";

const MenuTitle = styled(motion.div)`
    padding: 56px 0 80px;
    color: var(--color-white);
    font-size: 120px;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-align: center;

    @media ${device.tablet} {
      font-size: 80px;
      padding: 56px 0;
    }

    @media ${device.mobile} {
      font-size: calc(36px + 3.5vw);
      padding: 56px 0 48px;
    }
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
        opacity: 0.75,
        transform: "perspective(500px) translate3d(0, 0px, 40px)",
        transition: { type: 'ease', duration: 0.35, delay: 0.3 }
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