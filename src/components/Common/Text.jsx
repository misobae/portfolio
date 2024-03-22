import styled from "styled-components";
import { motion } from "framer-motion";
import { boxMotion } from "../../constants/pageVariants";

export const MotionText = styled(motion.p)`
  margin-bottom: 1.5em;
  color: var(--color-white);
  font-size: var(--text-sm);
  line-height: 1.5;
  word-break: keep-all;
`;

function Text({ text }) {
  return (
    <MotionText
      {...boxMotion}
    >
      {text}
    </MotionText>
  )
}

export default Text;