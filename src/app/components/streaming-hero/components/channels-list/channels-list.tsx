"use client";

import { fetchChannelsList } from "@/lib/queries/ChannelsListQuery";
import { ChannelsListQueryResult } from "../../../../../../sanity.types";
import { ChannelsListCard } from "./channel-list-card";

export const ChannelsList = async () => {
  const channels: ChannelsListQueryResult | string = await fetchChannelsList();
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
      {channels?.map((channel) => (
        <ChannelsListCard key={channel.name} {...channel} />
      ))}
    </div>
  );
};
