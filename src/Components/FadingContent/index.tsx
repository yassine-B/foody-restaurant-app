import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const fadingVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 30
    }
  }
};
interface fadingContentProps {
  children: ReactNode;
}
export const FadingContent = ({ children }: fadingContentProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: true, margin: '200px', amount: 0.5 }}
      variants={fadingVariants}>
      {children}
    </motion.div>
  );
};
