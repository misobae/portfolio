
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.nav)`
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 20vh;
  display: flex;
  gap: 24px;
  transform: translateX(-50%);
  
  a {
    color: #fff;
    font-size: 22px;
  }
`;