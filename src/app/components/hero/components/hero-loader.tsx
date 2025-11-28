"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue, useTransform, motion } from "motion/react";
import { HeroLoaderLogo } from "@/assets/svg/hero-loader-logo";
import { PluginLogo } from "@/assets/svg/plugin-logo";
import { RebirthLogo } from "@/assets/svg/rebirth-logo";

interface HeroLoaderProps {
  onComplete?: () => void; // Callback when loader is gone
}

export const HeroLoader: React.FC<HeroLoaderProps> = ({ onComplete }) => {
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => Math.round(v));

  const loaderRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = display.on("change", setPercentage);

    animate(mv, 100, {
      duration: 3,
      ease: "easeOut",
      onComplete: () => {
        if (loaderRef.current) {
          animate(
            loaderRef.current,
            { y: "-100%" },
            {
              duration: 1,
              ease: "easeInOut",
              onComplete: () => {
                if (onComplete) onComplete(); // Notify parent
              },
            }
          );
        }
      },
    });

    return () => unsubscribe();
  }, [mv, display, onComplete]);

  return (
    <motion.div
      ref={loaderRef}
      className="absolute inset-0 z-101 bg-red-600 grid place-content-center overflow-hidden"
      initial={{ y: 0 }}
    >
      <div className="flex items-center justify-center flex-col ">
        <div className="size-[300px] lg:size-[600px] overflow-hidden">
          <HeroLoaderLogo />
        </div>
        <div className="flex items-center gap-x-10 w-fit -mt-10 md:-mt-20">
          <PluginLogo />
          <RebirthLogo />
        </div>
      </div>

      <span className="absolute bottom-6 left-6 text-black text-5xl sm:text-8xl lg:text-9xl tabular-nums">
        {percentage}%
      </span>
    </motion.div>
  );
};
