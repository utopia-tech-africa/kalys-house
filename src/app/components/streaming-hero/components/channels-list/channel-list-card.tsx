import Image from "next/image";
import { ChannelsListQueryResult } from "../../../../../../sanity.types";

type ChannelsListCardProps = ChannelsListQueryResult[0];

export const ChannelsListCard = ({
  name,
  logo,
  //   platform,
  streamUrl,
  //   embedUrl,
  //   order,
  //   isActive,
}: ChannelsListCardProps) => {
  return (
    <a
      key={name}
      href={streamUrl ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2  rounded transition"
    >
      {typeof logo?.asset?.url === "string" &&
        logo?.asset?.url.trim() !== "" && (
          <div className="max-w-[110px] max-h-11 overflow-hidden object-cover">
            <Image
              width={200}
              height={200}
              src={logo?.asset?.url ?? undefined}
              alt={name ?? ""}
              className="object-contain h-5 w-full"
            />
          </div>
        )}
    </a>
  );
};
