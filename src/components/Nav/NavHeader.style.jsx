import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.nav)`
  position: absolute;
  z-index: 100;
  right: 5%;
  top: 5%;
  display: flex;
  gap: 24px;
  
  a {
    color: #fff;
    font-size: 16px;
  }
`;