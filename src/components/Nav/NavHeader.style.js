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
    position: relative;
    color: var(--color-white);
    transition: 0.3s;

    &:not(:last-child)::after {
      content: "|";
      display: inline-block;
      margin-left: 1.5em;
      font-weight: 300;
    }

    span {
      opacity: 0.6;
    }

    .active {
      opacity: 1;
    }
  }
`;

export const Light = styled(motion.span)`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 42%;
  width: 0;
  height: 0;
  border-radius: 50%;
  box-shadow: 0 0 40px 16px rgba(255, 255, 255, 70%);
  transform: translate(-50%, -50%);
`;