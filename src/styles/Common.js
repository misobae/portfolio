import styled from "styled-components";
import { motion } from "framer-motion";

export const Content = styled(motion.div)`
  opacity: 0;
  position: absolute;
  z-index: 0;
  top: 0px;
  left: 0px;
  width: 100vw;
  padding: 5% 5% 10vw;
  transform: translate3d(0, 20%, 0);
  transition: .8s ease-in-out;

  p {
    color: #fff;
  }
`;