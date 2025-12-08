"use client";

import { useEffect, useState } from "react";
import { ChannelsList, LiveChat, VideoPlayer } from "./components";
import { fetchChannelsList } from "@/lib/queries/ChannelsListQuery";
import { ChannelsListQueryResult } from "../../../../sanity.types";

interface StreamingHeroProps {
  defaultChannel?: ChannelsListQueryResult[0];
}

export const StreamingHero = ({ defaultChannel }: StreamingHeroProps) => {
  const [channels, setChannels] = useState<ChannelsListQueryResult>([]);
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(
    defaultChannel?._id ?? null
  );
  const [selectedEmbedUrl, setSelectedEmbedUrl] = useState(
    defaultChannel?.embedUrl
  );

  useEffect(() => {
    const loadChannels = async () => {
      const data = await fetchChannelsList();
      setChannels(data);

      const initialChannel = defaultChannel ?? data[0];
      setSelectedChannelId(initialChannel?._id ?? null);
      setSelectedEmbedUrl(initialChannel?.embedUrl ?? undefined);
    };

    loadChannels();
  }, [defaultChannel]);

  const handleSelectChannel = (channel: ChannelsListQueryResult[0]) => {
    setSelectedChannelId(channel._id);
    setSelectedEmbedUrl(channel.embedUrl ?? "");
  };

  // if (channels.length === 0) return null;

  return (
    <section className="relative w-full min-h-screen flex flex-col mb-8 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/vid/streaming-hero-bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-linear-to-t from-black via-black/80 to-transparent z-10" />

      <div className="relative z-20 flex flex-col lg:flex-row w-full px-6 lg:px-16 gap-6 mt-[93px] lg:h-[440px]">
        <div className="w-full lg:w-[70%]">
          <VideoPlayer embedUrl={selectedEmbedUrl || undefined} />
        </div>

        {/* Channels - Mobile */}
        <div className="block md:hidden py-6 px-6">
          <h2 className="text-3xl text-center font-bold text-white mb-4">
            Channels
          </h2>

          <ChannelsList
            channels={channels}
            selectedChannelId={selectedChannelId}
            onSelectChannel={handleSelectChannel}
          />
        </div>

        <div className="lg:w-[30%]">
          <LiveChat />
        </div>
      </div>

      {/* Channels - Desktop */}
      <div className="hidden md:block py-6 px-6 lg:px-16  z-10">
        <h2 className="text-3xl font-bold text-white mb-4">Channels</h2>

        <ChannelsList
          channels={channels}
          selectedChannelId={selectedChannelId}
          onSelectChannel={handleSelectChannel}
        />
      </div>
    </section>
  );
};
