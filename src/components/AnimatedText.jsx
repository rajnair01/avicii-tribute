import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedText({ text }) {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, once: true });
  return (
    <div>
      <motion.p
        style={{ lineHeight: "" }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.01 }}
        ref={ref}
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} className="" variants={defaultAnimations}>
            {char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}
export default AnimatedText;
