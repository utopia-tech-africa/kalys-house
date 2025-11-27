"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  as?: React.ElementType;
  duration?: number;
};

export function AnimatedNumber({
  value,
  className,
  as = "span",
  duration = 5,
}: AnimatedNumberProps) {
  const MotionComponent: React.ElementType = motion(as);

  const ref = useRef<HTMLSpanElement | null>(null);

  // detect when in view
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // start from zero
  const mv = useMotionValue(0);

  const display = useTransform(mv, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      animate(mv, value, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView, value]);

  return (
    <MotionComponent ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </MotionComponent>
  );
}
