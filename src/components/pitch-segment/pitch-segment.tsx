"use client";

import Image from "next/image";
import { pitchSegmentImg } from "@/assets/img";
import { SegmentContent } from "./segment-content";
import { ComponentLayout } from "../component-layout";

export const PitchSegment = () => {
  return (
    <ComponentLayout>
      <section
        id="pitch-segment"
        className="relative flex flex-col lg:flex-row overflow-hidden scroll-mt-24 md:scroll-mt-32"
      >
        {/* LEFT SIDE – IMAGE */}
        <div className="relative overflow-hidden w-full min-h-[300px] md:min-h-[560px] lg:min-h-[600px] rounded-lg">
          <Image
            src={pitchSegmentImg}
            alt="Pitch Segment Section Backdrop"
            fill
            className="object-cover w-full h-full rounded-[12px]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/30 to-black/75" />
        </div>

        {/* RIGHT SIDE – CONTENT */}
        <div className="w-full md:basis-[40%] lg:basis-[30%] bg-black flex items-center justify-center px-6 md:px-10 lg:px-16 py-14">
          <div className="text-white">
            <SegmentContent />
          </div>
        </div>
      </section>
    </ComponentLayout>
  );
};
