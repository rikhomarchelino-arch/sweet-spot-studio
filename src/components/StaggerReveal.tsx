import { ReactNode, Children } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  yOffset?: number;
  duration?: number;
  threshold?: number;
}

const StaggerReveal = ({
  children,
  className = "",
  staggerDelay = 0.08,
  yOffset = 24,
  duration = 0.6,
  threshold = 0.1,
}: StaggerRevealProps) => {
  const { ref, isRevealed } = useScrollReveal({ threshold });

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <motion.div
          initial={{ opacity: 0, y: yOffset }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
          transition={{
            duration,
            delay: i * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default StaggerReveal;
