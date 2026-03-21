import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical distance in px (reduced on mobile via CSS) */
  yOffset?: number;
  duration?: number;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  yOffset = 30,
  duration = 0.7,
  threshold = 0.15,
}: ScrollRevealProps) => {
  const { ref, isRevealed } = useScrollReveal({ threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
