import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

export interface ScrollRevealProps {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
  trigger?: 'animate' | 'whileInView';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 30,
  scale = 1,
  trigger = 'whileInView',
  style,
  children,
}) => {
  const getSpatialOffset = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      case 'none':
      default: return {};
    }
  };

  const initial = {
    opacity: 0,
    scale,
    ...getSpatialOffset(),
  };

  const final = {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
  };

  const transition: any = {
    duration,
    delay,
    ease: [0.16, 1, 0.3, 1], // Custom overshoot cubic bezier
  };

  if (trigger === 'animate') {
    return (
      <motion.div
        initial={initial}
        animate={final}
        transition={transition}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={final}
      viewport={{ once: true, margin: '-50px' }}
      transition={transition}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerContainerProps {
  staggerChildren?: number;
  delay?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  staggerChildren = 0.08,
  delay = 0,
  children,
  style,
}) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  scale?: number;
  distance?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  direction = 'up',
  scale = 1,
  distance = 25,
  style,
  children,
}) => {
  const getSpatialOffset = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      case 'none':
      default: return {};
    }
  };

  const itemVariants: any = {
    hidden: {
      opacity: 0,
      scale,
      ...getSpatialOffset(),
    },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} style={style}>
      {children}
    </motion.div>
  );
};
