"use client";

import { ChannelsListQueryResult } from "../../../../../../sanity.types";
import { ChannelsListCard } from "./channel-list-card";

type Props = {
  channels: ChannelsListQueryResult;
  onSelectChannel: (channel: ChannelsListQueryResult[0]) => void;
};

export const ChannelsList = ({ channels, onSelectChannel }: Props) => {
  const sorted = [...channels].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999)
  );

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
      {sorted.map((channel) => (
        <ChannelsListCard
          key={channel._id}
          channel={channel}
          onSelect={onSelectChannel}
        />
      ))}
    </div>
  );
};
