"use client";

import { useEffect, useState } from "react";
import { ChannelsList, LiveChat, VideoPlayer } from "./components";
import { fetchChannelsList } from "@/lib/queries/ChannelsListQuery";
import { ChannelsListQueryResult } from "../../../../sanity.types";

export const StreamingHero = () => {
  const [channels, setChannels] = useState<ChannelsListQueryResult>([]);
  const [selectedEmbedUrl, setSelectedEmbedUrl] = useState<
    string | undefined
  >();

  useEffect(() => {
    fetchChannelsList().then((data) => {
      if (!Array.isArray(data)) return;
      const sorted = [...data].sort(
        (a, b) => (a.order ?? 999) - (b.order ?? 999)
      );
      setChannels(sorted);
      if (sorted.length > 0)
        setSelectedEmbedUrl(sorted[0].embedUrl ?? undefined);
    });
  }, []);

  const handleSelectChannel = (channel: ChannelsListQueryResult[0]) => {
    setSelectedEmbedUrl(
      channel.embedUrl ?? "https://www.youtube.com/embed/y-1_HCPPIS8"
    );
  };

  if (channels.length === 0) return null;

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
        <div className="w-full lg:w-[70%] h-full">
          <VideoPlayer embedUrl={selectedEmbedUrl} />
        </div>

        {/* Channels - Mobile */}
        <div className="relative z-20 w-full py-6 px-6 block md:hidden">
          <h2 className="text-3xl text-center font-bold text-white mb-4">
            Channels
          </h2>
          <ChannelsList
            channels={channels}
            onSelectChannel={handleSelectChannel}
          />
        </div>

        {/* Chat */}
        <div className="lg:w-[30%] h-full">
          <LiveChat />
        </div>
      </div>

      {/* Channels - Desktop */}
      <div className="relative hidden md:block z-20 w-full py-6 px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-white mb-4">Channels</h2>
        <ChannelsList
          channels={channels}
          onSelectChannel={handleSelectChannel}
        />
      </div>
    </section>
  );
};
