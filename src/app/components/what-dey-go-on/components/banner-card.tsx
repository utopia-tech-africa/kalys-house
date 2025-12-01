import Image from "next/image";
import { UpdatesQueryResult } from "../../../../../sanity.types";

interface BannerCardProps {
  update: UpdatesQueryResult[0];
}

export const BannerCard = ({ update }: BannerCardProps) => {
  return (
    <div className="relative shrink-0 w-[316px] h-[400px] rounded-xl overflow-hidden">
      <Image
        src={update.imageUrl || ""}
        alt={update.title || ""}
        fill
        className="object-fit"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-linear-to-t from-black via-black to-transparent" />

      {/* Title */}
      <div className="absolute bottom-3 left-3 right-3 text-white tracking-wide text-3xl uppercase text-wrap leading-8">
        {update.title}
      </div>
    </div>
  );
};
