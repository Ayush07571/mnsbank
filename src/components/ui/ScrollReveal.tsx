'use client';

import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollReveal = ({
  children,
  width = '100%',
  direction = 'up',
  delay = 0.2,
  duration = 0.5,
  distance = 50,
  once = true,
  className = '',
  style = {},
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x:
        direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: 'relative', width, overflow: 'visible', ...style }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
