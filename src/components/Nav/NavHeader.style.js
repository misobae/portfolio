import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.nav)`
  position: absolute;
  z-index: 100;
  right: 5%;
  top: 5%;
  display: flex;
  gap: 1.5em;
  font-size: 15px;
  
  a {
    color: var(--color-white);

    &:not(:last-child)::after {
      content: "|";
      display: inline-block;
      margin-left: 1.5em;
      font-weight: 300;
    }
  }
`;