import styled from 'styled-components';
import { motion } from 'framer-motion';

const Loading = styled(motion.div)`
  position: absolute;
  z-index: 1;
  height: 50vh;
  width: 100%;
  background-color: #000;
`;
export const LoadingTop = styled(Loading)`
  top: 0;
`;
export const LoadingBottom = styled(Loading)`
  bottom: 0;
`;