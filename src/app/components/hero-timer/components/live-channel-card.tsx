"use client";

import Image from "next/image";
import { ChannelsListQueryResult } from "../../../../../sanity.types";
import Link from "next/link";
import { LiveTag } from "@/assets/svg/live-tag";

type Props = {
  channel: ChannelsListQueryResult[0];
};

export const LiveChannelCard = ({ channel }: Props) => {
  const { name, logo, isExternal, streamUrl } = channel;

  return (
    <>
      {isExternal && (
        <Link
          href={streamUrl || "#"}
          target="_blank"
          className={`
        flex items-center gap-6 px-4 py-3 rounded transition cursor-pointer min-w-fit bg-white/10 hover:bg-white/20
      `}
        >
          <div className="max-w-[110px] max-h-15 overflow-hidden object-cover">
            <Image
              width={200}
              height={200}
              src={logo || ""}
              alt={name ?? ""}
              className="object-contain h-5 md:h-6 w-full"
            />
          </div>
          <div className="animate-pulse">
            <LiveTag />
          </div>
        </Link>
      )}
    </>
  );
};
