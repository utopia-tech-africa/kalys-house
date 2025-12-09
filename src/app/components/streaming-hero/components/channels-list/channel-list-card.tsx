"use client";

import Image from "next/image";
import { ChannelsListQueryResult } from "../../../../../../sanity.types";
import Link from "next/link";

type Props = {
  channel: ChannelsListQueryResult[0];
  isSelected: boolean;
  onSelect: (channel: ChannelsListQueryResult[0]) => void;
};

export const ChannelsListCard = ({ channel, isSelected, onSelect }: Props) => {
  const { name, logo, isExternal, streamUrl } = channel;

  return (
    <>
      {isExternal ? (
        <Link
          href={streamUrl || "#"}
          target="_blank"
          className={`
        flex items-center gap-2 px-4 py-2 rounded transition cursor-pointer min-w-fit 
        ${isSelected ? "bg-white/30 ring-2 ring-white" : "bg-white/10 hover:bg-white/20"}
      `}
        >
          <div className="max-w-[110px] max-h-11 overflow-hidden object-cover">
            <Image
              width={200}
              height={200}
              src={logo || ""}
              alt={name ?? ""}
              className="object-contain h-5 w-full"
            />
          </div>
        </Link>
      ) : (
        <button
          onClick={() => onSelect(channel)}
          className={`
        flex items-center gap-2 px-4 py-2 rounded transition cursor-pointer min-w-fit 
        ${isSelected ? "bg-white/30 ring-2 ring-white" : "bg-white/10 hover:bg-white/20"}
      `}
        >
          <div className="max-w-[110px] max-h-11 overflow-hidden object-cover">
            <Image
              width={200}
              height={200}
              src={logo || ""}
              alt={name ?? ""}
              className="object-contain h-5 w-full"
            />
          </div>
        </button>
      )}
    </>
  );
};
