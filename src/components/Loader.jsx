import { motion } from "framer-motion";
import { useState } from "react";
import "../scss/pageloader.scss";

const Loader = ({ onLoad }) => {
  const [animate, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(true);
  }, 4000);

  setTimeout(() => {
    onLoad(false);
  }, 4800);

  const letters = {
    initial: {
      right: -200,
    },
    animate: {
      right: 0,
      scale: animate ? 15 : 1,
      opacity: animate ? 0 : 1,
      transition: {
        duration: animate ? 0.8 : 3,
        staggerChildren: 0.3,
        ease: [0.6, 0.4, 0.23, 0.9],
      },
    },
  };

  const letter = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="pageloader">
      <motion.div
        variants={letters}
        animate="animate"
        initial="initial"
        transition={{
          staggerChildren: 2.5,
          ease: [0.6, 0.4, 0.23, 0.9],
        }}
        className="letters"
      >
        <motion.span variants={letter} className="letter">
          N
        </motion.span>
        <motion.span variants={letter} className="letter">
          E
        </motion.span>
        <motion.span variants={letter} className="letter">
          T
        </motion.span>
        <motion.span variants={letter} className="letter">
          F
        </motion.span>
        <motion.span variants={letter} className="letter">
          L
        </motion.span>
        <motion.span variants={letter} className="letter">
          I
        </motion.span>
        <motion.span variants={letter} className="letter">
          X
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Loader;
