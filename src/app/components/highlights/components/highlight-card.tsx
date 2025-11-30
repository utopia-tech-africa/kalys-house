import { ExternalLinkIcon } from "@/assets/svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HighlightCardProps {
  thumbnail: string | StaticImageData;
  videoUrl: string;
  title: string;
}

export const HighlightCard = ({
  thumbnail,
  videoUrl,
  title,
}: HighlightCardProps) => {
  return (
    <div className="relative w-full max h-[427px] rounded-xl overflow-hidden shrink-0 ">
      <Image src={thumbnail} alt={title} fill className="object-cover w-full" />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-linear-to-t from-black via-black/70 to-transparent" />

      {/* Watch Video Button */}
      <Link
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 right-0  uppercase bg-black  flex items-center gap-1 rounded-tl-xl px-3 py-2 border-t-[0.1px] border-neutral-400/50"
      >
        Watch Video <ExternalLinkIcon />
      </Link>

      {/* Title */}
      {/* <div className="absolute bottom-12 left-3 right-3 text-white tracking-wide text-xl font-semibold leading-6 uppercase">
        {title}
      </div> */}
    </div>
  );
};
