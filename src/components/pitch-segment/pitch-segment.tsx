import Image from "next/image";
import { pitchSegmentImg } from "@/assets/img";
import { SegmentContent } from "./segment-content";
import { ComponentLayout } from "../component-layout";

export const PitchSegment = () => {
  return (
    <ComponentLayout>
      <section
        id="pitch-segment"
        className="relative w-full flex flex-col md:flex-row overflow-hidden"
      >
        {/* LEFT SIDE – IMAGE */}
        <div className="relative w-full h-[350px] md:h-auto md:basis-[60%] lg:basis-[70%]">
          <Image
            src={pitchSegmentImg}
            alt="Pitch Segment Section Backdrop"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* RIGHT SIDE – CONTENT */}
        <div className="w-full md:basis-[40%] lg:basis-[30%] bg-black flex items-center justify-center px-6 md:px-10 lg:px-16 py-14">
          <div className="text-white max-w-[520px]">
            <SegmentContent />
          </div>
        </div>
      </section>
    </ComponentLayout>
  );
};
