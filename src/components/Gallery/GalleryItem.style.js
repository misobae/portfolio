import styled from "styled-components";
import { motion } from "framer-motion";

export const Item = styled(motion.div)`
  overflow: hidden;
  position: relative;
  height: 0;
  padding-top: 55%;
  background-color: #ddd;
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
    width: 870px;
    height: 870px;
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
    height: 20%;
    padding: 1em;
    background: rgba(0, 0, 0, .7);
    transition: ease .3s;

    .title__sub {
      margin-bottom: 0.5em;
      color: #b3b3b3;
      font-size: 14px;
    }
    .title__main {
      color: #fff;
      font-size: 16px;
    }
  }
  &:hover .title {
    opacity: 1;
  }
`;