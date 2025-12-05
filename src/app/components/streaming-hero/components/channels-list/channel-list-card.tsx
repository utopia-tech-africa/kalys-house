"use client";

import Image from "next/image";
import { ChannelsListQueryResult } from "../../../../../../sanity.types";

type Props = {
  channel: ChannelsListQueryResult[0];
  onSelect: (channel: ChannelsListQueryResult[0]) => void;
};

export const ChannelsListCard = ({ channel, onSelect }: Props) => {
  const { name, logo } = channel;

  return (
    <button
      onClick={() => onSelect(channel)}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition cursor-pointer"
    >
      {typeof logo?.asset?.url === "string" && logo.asset.url.trim() !== "" && (
        <div className="max-w-[110px] max-h-11 overflow-hidden object-cover">
          <Image
            width={200}
            height={200}
            src={logo.asset.url}
            alt={name ?? ""}
            className="object-contain h-5 w-full"
          />
        </div>
      )}
    </button>
  );
};
