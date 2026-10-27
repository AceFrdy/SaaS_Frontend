"use client";

import React, { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface ScrollParallaxProps {
  children: ReactNode;
  offset?: number; // Distance in px to shift (e.g. -40 or 40)
  className?: string;
}

export function ScrollParallax({
  children,
  offset = 30,
  className = "",
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const y = useSpring(rawY, { stiffness: 80, damping: 25 });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export default ScrollParallax;

