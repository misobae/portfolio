import styled from "styled-components";
import { motion } from "framer-motion";

export const Item = styled(motion.div)`
  overflow: hidden;
  position: relative;
  height: 0;
  padding-top: 70%;
  cursor: pointer;
  
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 102%;
  }
  .overlay {
    opacity: 0.5;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 800px;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
    transform: translate(-50%, -50%);
    transition: ease .5s;
  }
  &:hover .overlay {
    opacity: 0;
  }
  .title {
    opacity: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    padding: 1em;
    background: rgba(0, 0, 0, .7);
    transition: ease .3s;

    .title__sub {
      margin-bottom: 0.5em;
      color: var(--color-gray);
      font-size: 14px;
    }
    .title__main {
      color: var(--color-white);
      font-size: var(--text-sm);
    }
  }
  &:hover .title {
    opacity: 1;
  }
`;