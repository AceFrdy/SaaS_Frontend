"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none overflow-hidden bg-transparent">
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-emerald-500 via-teal-400 to-primary-3 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}

export default ScrollProgressBar;

