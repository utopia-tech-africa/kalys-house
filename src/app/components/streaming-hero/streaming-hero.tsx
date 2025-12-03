"use client";

import { ChannelsList, LiveChat, VideoPlayer } from "./components";

export const StreamingHero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/vid/streaming-hero-bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient Overlay (top 10% of screen) */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-linear-to-t from-black via-black/80 to-transparent z-10" />

      {/* Top Container: Video + Chat */}
      <div className="relative z-20 flex flex-1 w-full px-6 lg:px-16 gap-6 mt-[93px]">
        {/* Left: Video Player */}
        <div className="flex-1">
          <VideoPlayer />
        </div>

        {/* Right: Live Chat */}
        <div className="w-full max-w-md">
          <LiveChat />
        </div>
      </div>

      {/* Bottom Container: Channels */}
      <div className="relative z-20 w-full py-10 px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-white mb-4">Channels</h2>
        <ChannelsList />
      </div>
    </section>
  );
};
