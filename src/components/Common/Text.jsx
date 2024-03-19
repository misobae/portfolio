import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionText = styled(motion.p)`
  margin-bottom: 1.5em;
  color: var(--color-white);
  font-size: var(--text-sm);
  line-height: 1.5;
`;

function Text({ text }) {
  return (
    <MotionText
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
          ease: "easeInOut",
          duration: 1,
          y: { duration: 0.5 },
      }}
    >
      {text}
    </MotionText>
  )
}

export default Text;