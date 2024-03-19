import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  min-height: 100%;
  padding: 5% 0 0;
  transition: .8s ease-in-out;
`;

export const Content = styled(motion.div)`
  max-width: 1400px;
  min-height: 100%;
  margin: 0 auto;
`;