import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsWrap = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.5vw;
`;