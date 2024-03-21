import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsWrap = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.5vw;
`;

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 56px 0 80px;

  .title {
    opacity: 0.75;
    color: var(--color-white);
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-align: center;
  }
  .others {
    text-align: right;

    .others__date {
      display: block;
      margin-bottom: 12px;
      font-size: 32px;
      font-weight: 700;
    }
    .others__links {
      a {
        margin-left: 1.5em;
        color: var(--color-white);
        font-size: var(--text-sm);
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }
  }
`;

export const ProjectImg = styled.div`
  margin-top: 16px;
  img {
    display: block;
    width: 100%;
  }
`;

export const List = styled.div`
  margin-bottom: 32px;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -0.03em;

  .title {
    margin-bottom: 0.35em;
    font-size: 20px;
    font-weight: 500;
  }
  .item {
    white-space: pre-line;
    line-height: 1.6;
  }
`;