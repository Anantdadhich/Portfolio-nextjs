"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const WavingHand = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const handleClick = useCallback(() => {
    setIsAnimating(true);
  }, []);

  return (
    <motion.span
      animate={isAnimating ? "animate" : "initial"}
      variants={{
        initial: {
          rotate: 0,
        },
        animate: {
          rotate: [0, 14, -8, 14, -4, 10, 0, 0],
          transition: {
            duration: 2.5,
            ease: "linear",
            repeat: 0,
            onComplete: () => setIsAnimating(false),
          },
        },
      }}
      onClick={handleClick}
      className="inline-block origin-[70%_70%] text-3xl sm:text-6xl cursor-pointer"
    >
      👋
    </motion.span>
  );
};

export default WavingHand;