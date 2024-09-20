import React from 'react';
import { motion } from 'framer-motion';

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  duration?: number;
  delay?: number;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  className = '',
  color = 'bg-green-600',
  duration = 0.5,
  delay = 0,
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.01, delay }}
    >
      {children}
      <motion.div
        className={`absolute inset-0 ${color}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration, delay: delay + 0.01 }}
      />
    </motion.div>
  );
};

export default RevealAnimation;