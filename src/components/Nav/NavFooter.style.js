
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.nav)`
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 20vh;
  display: flex;
  gap: 2em;
  transform: translateX(-50%);
  font-size: 20px;
  
  a {
    opacity: 0.6;
    position: relative;
    padding: 0.5em;
    transition: .3s;
    color: #fff;

    &::before {
      opacity: 0;
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      box-shadow: 0 0 40px 16px rgba(255, 255, 255, 70%);
      transform: translate(-50%, -50%);
      transition: inherit;
    }

    &:hover {
      opacity: 1;
      &::before {
        opacity: 1;
      }
    }
  }
`;