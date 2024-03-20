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
  max-width: var(--layout-width);
  min-height: 100%;
  margin: 0 auto;
`;

export const ContentTitle = styled(motion.h2)`
  margin-bottom: 0.5em;
  padding: 2.5em 0 0.5em;
  border-bottom: 1px solid var(--color-white);
  font-size: var(--text-lg);
  font-weight: 600;
`;

export const CodeBox = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 0.5em;
`;

export const Code = styled(motion.span)`
  display: inline-block;
  padding: 0.25em 0.5em;
  background-color: rgb(240 246 255 / 30%);
  font-size: var(--text-md);
`;