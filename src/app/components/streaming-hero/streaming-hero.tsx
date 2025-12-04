"use client";

import { ChannelsList, LiveChat, VideoPlayer } from "./components";

export const StreamingHero = () => {
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

      {/* Top Container: Video + Chat */}
      <div className="relative z-20 flex flex-col lg:flex-row w-full px-6 lg:px-16 gap-6 mt-[93px] lg:h-[440px]">
        {/* Video */}
        <div className="w-full lg:w-[70%] h-full">
          <VideoPlayer />
        </div>

        {/* Channels - Mobile */}
        <div className="relative z-20 w-full py-6  px-6 block md:hidden">
          <h2 className="text-3xl font-bold text-white mb-4 text-center md:text-start">
            Channels
          </h2>
          <ChannelsList />
        </div>

        {/* Chat */}
        <div className="lg:w-[30%] h-full">
          <LiveChat />
        </div>
      </div>

      {/* Channels - Desktop */}
      <div className="relative hidden md:block z-20 w-full py-6 px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-white mb-4">Channels</h2>
        <ChannelsList />
      </div>
    </section>
  );
};
