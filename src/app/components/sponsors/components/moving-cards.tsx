"use client";

import { useAnimationFrame } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import { sponsorCardBg } from "@/assets/img";
import { SponsorsQueryResult } from "../../../../../sanity.types";

const CARD_WIDTH = 243.2 + 24; // card width + margin (p-12 + mr-6)

type MovingCardsProps = {
  cards: SponsorsQueryResult;
};

export default function MovingCards({ cards }: MovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Speed (px/second)
  const normalSpeed = 120;
  const slowSpeed = 20;

  useAnimationFrame((t, delta) => {
    const moveBy = ((hovered ? slowSpeed : normalSpeed) * delta) / 1000;

    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLDivElement[];

    children.forEach((child) => {
      const currentX = parseFloat(child.dataset.x || "0");
      const nextX = currentX - moveBy;

      // If card moves fully offscreen on left → teleport it to the right end
      if (nextX <= -CARD_WIDTH) {
        const maxX = Math.max(
          ...children.map((c) => parseFloat(c.dataset.x || "0"))
        );
        const newX = maxX + CARD_WIDTH;
        child.dataset.x = newX.toString();
        child.style.transform = `translateX(${newX}px)`;
      } else {
        child.dataset.x = nextX.toString();
        child.style.transform = `translateX(${nextX}px)`;
      }
    });
  });
  return (
    <div
      className="w-full h-40 overflow-hidden relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div ref={containerRef} className="absolute left-0 top-0 h-40">
        {[...cards, ...cards, ...cards].map((card, i) => (
          <div
            key={i}
            data-x={i * CARD_WIDTH}
            style={{
              transform: `translateX(${i * CARD_WIDTH}px)`,
              backgroundImage: `url(${sponsorCardBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="absolute top-0 flex-none flex items-center justify-center h-40 w-[243.2px] p-12 mr-2"
          >
            <Image
              src={card.imageUrl || ""}
              alt={card.title || ""}
              width={243}
              height={64}
              style={{ objectFit: "contain" }}
              className="h-15"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
