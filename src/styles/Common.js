import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  max-width: 1920px;
  min-height: 100%;
  margin: 0 auto;
  padding: 5% 5% 10vw;
  transition: .8s ease-in-out;
`;

export const Content = styled(motion.div)``;