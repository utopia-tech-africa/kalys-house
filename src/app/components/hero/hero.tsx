"use client";

import { useRef, useState } from "react";
import { HeroLoader } from "./components/hero-loader";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false); // Track when loader finishes

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted((prev) => !prev);
    }
  };

  return (
    <section className="relative w-full h-dvh overflow-hidden cursor-pointer">
      {!loaderDone && <HeroLoader onComplete={() => setLoaderDone(true)} />}

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay={loaderDone} // only autoplay when loader is gone
        loop
        muted={muted}
        playsInline
        onClick={handleVideoClick}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dl02aq6nt/video/upload/v1764253050/hero-bg-video_xtwq5b.mp4"
          type="video/mp4"
        />
      </video>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Small mute indicator bubble */}
      <div className="absolute bottom-6 right-6 z-20 bg-black/40 text-white px-3 py-1 rounded-full text-sm">
        {muted ? "Muted" : "Sound On"}
      </div>
    </section>
  );
};
