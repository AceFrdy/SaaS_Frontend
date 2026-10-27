"use client";

import React, { type ReactNode } from "react";
import { motion, type Variants, type Transition } from "motion/react";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "blur-in";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  duration?: number;
  delay?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  margin?: string;
}

const getVariants = (variant: RevealVariant, distance: number): Variants => {
  switch (variant) {
    case "fade-up":
      return {
        hidden: { opacity: 0, y: distance, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      };
    case "fade-down":
      return {
        hidden: { opacity: 0, y: -distance, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      };
    case "fade-left":
      return {
        hidden: { opacity: 0, x: distance, filter: "blur(4px)" },
        visible: { opacity: 1, x: 0, filter: "blur(0px)" },
      };
    case "fade-right":
      return {
        hidden: { opacity: 0, x: -distance, filter: "blur(4px)" },
        visible: { opacity: 1, x: 0, filter: "blur(0px)" },
      };
    case "scale-up":
      return {
        hidden: { opacity: 0, scale: 0.92, filter: "blur(4px)" },
        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
      };
    case "blur-in":
      return {
        hidden: { opacity: 0, filter: "blur(12px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
      };
    default:
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
  }
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  duration = 0.65,
  delay = 0,
  distance = 32,
  once = true,
  className = "",
  margin = "-60px",
}: ScrollRevealProps) {
  const variants = getVariants(variant, distance);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: margin as any }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom smooth ease-out quint
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  className?: string;
  margin?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  delayChildren = 0.05,
  once = true,
  className = "",
  margin = "-60px",
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: margin as any }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  variant?: RevealVariant;
  distance?: number;
  duration?: number;
  className?: string;
}

export function StaggerItem({
  children,
  variant = "fade-up",
  distance = 28,
  duration = 0.55,
  className = "",
}: StaggerItemProps) {
  const variants = getVariants(variant, distance);

  return (
    <motion.div
      variants={variants}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;

