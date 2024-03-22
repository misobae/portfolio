import styled from "styled-components";
import { motion } from "framer-motion";
import { CodeBox } from "../../styles/Common";
import device from "../../styles/responsive";

export const ExperienceWrap = styled.div`
  display: flex;
  gap: 5%;

  @media ${device.tablet} {
    flex-direction: column;

    &:not(:first-child) {
      margin-top: 56px;
    }
  }
`;

export const ExperienceTitle = styled(motion.div)`
  flex: 200px 0 0;
  strong {
    display: block;
    margin-bottom: 0.5em;
    font-size: var(--text-md);
    font-weight: 600;
  }
  span {
    color: var(--color-gray);
  }

  @media ${device.tablet} {
    flex: auto 0 0;
    margin-bottom: 2em;
    strong {
      margin-bottom: 0.25em;
      font-size: var(--text-lg);
    }
  }
`;

export const ExperienceList = styled.div`
  flex: calc(100% - 200px) 1 1;
  h3 {
    margin-bottom: 1em;
    font-size: var(--text-md);
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    letter-spacing: -0.03em;
  }
  @media ${device.tablet} {
    flex: 100% 1 1;
    padding-left: 5%;
  }
  @media ${device.mobile} {
    h3 {
      margin-bottom: 0.5em;
      font-size: 22px;
    }
  }
`;

export const ExperienceItem = styled(motion.div)`
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray);
    margin-bottom: 48px;
    padding-bottom: 32px;
  }

  @media ${device.tablet} {
    &:not(:last-child) {
      margin-bottom: 40px;
      padding-bottom: 12px;
    }
  }
`;

export const ExperienceCont = styled.div`
  min-height: 32px;
  margin-bottom: 16px;
  strong {
    display: inline-block;
    width: 120px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    letter-spacing: -0.03em;
  }
  ul {
    margin-top: 12px;
    li {
      display: flex;
      align-items: flex-start;
      gap: 0.5em;
      margin-bottom: 0.75em;
      line-height: 1.5;
      word-break: keep-all;
      &::before {
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        margin-top: 9px;
        border-radius: 50%;
        border: 1px solid var(--color-white);
        flex-shrink: 0;
      }
    }
  }

  @media ${device.mobile} {
    min-height: auto;
    margin-bottom: 32px;
    strong {
      display: block;
      margin-bottom: 0.5em;
    }
  }
`;

export const ExperienceCodeBox = styled(CodeBox)`
  display: inline-flex;

  span {
    font-size: var(--text-sm);
  }
`;