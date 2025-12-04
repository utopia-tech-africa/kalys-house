"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue, useTransform, motion } from "motion/react";
import Image from "next/image";
import {
  kalysHouseHeroLogo,
  pluginHeroLogo,
  rebirthHeroLogo,
} from "@/assets/img";
import { X } from "lucide-react";

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
      className="absolute inset-0 z-101 bg-priamry-deep flex flex-col justify-between overflow-hidden py-4 "
      initial={{ y: 0 }}
    >
      <div className="flex flex-col justify-evenly items-center flex-1 invert-100">
        <div className="flex items-center space-x-5 overflow-hidden">
          <div className="h-[65px]">
            <Image
              src={pluginHeroLogo}
              alt="Plugin logo"
              className="object-contain h-full "
            />
          </div>
          <X size={50} strokeWidth={3} className="text-black" />
          <div className="h-[65px]">
            <Image
              src={rebirthHeroLogo}
              alt="Rebirth Creative Studio logo"
              className="object-contain h-full w-fit"
            />
          </div>
        </div>
        <p className="text-xl text-black">presents</p>
        <div className="overflow-hidden">
          <Image src={kalysHouseHeroLogo} alt="Kalys house logo" />
        </div>
      </div>

      <span className="ml-2 sm:ml-5 md:ml-12 text-white text-5xl sm:text-8xl lg:text-9xl tabular-nums w-full">
        {percentage}%
      </span>
    </motion.div>
  );
};
