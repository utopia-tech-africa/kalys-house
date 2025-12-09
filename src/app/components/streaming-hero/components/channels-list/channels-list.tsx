"use client";

import { ChannelsListQueryResult } from "../../../../../../sanity.types";
import { ChannelsListCard } from "./channel-list-card";

type Props = {
  channels: ChannelsListQueryResult;
  selectedChannelId: string | null;
  onSelectChannel: (channel: ChannelsListQueryResult[0]) => void;
};

export const ChannelsList = ({
  channels,
  selectedChannelId,
  onSelectChannel,
}: Props) => {
  const sorted = [...channels].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999)
  );

  return (
    <div className="flex gap-1 p-1 sm:gap-4 items-center justify-start sm:justify-center md:justify-start overflow-scroll">
      {sorted.map((channel) => (
        <ChannelsListCard
          key={channel._id}
          channel={channel}
          isSelected={selectedChannelId === channel._id}
          onSelect={onSelectChannel}
        />
      ))}
    </div>
  );
};
