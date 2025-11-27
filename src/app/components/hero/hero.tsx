"use client";

import { useRef, useState } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted((prev) => !prev);
      console.log(muted);
    }
  };

  return (
    <section className="relative w-full h-dvh overflow-hidden cursor-pointer">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
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

      {/* Hero Content */}

      {/* Small mute indicator bubble */}
      <div className="absolute bottom-6 right-6 z-20 bg-black/40 text-white px-3 py-1 rounded-full text-sm">
        {muted ? "Muted" : "Sound On"}
      </div>
    </section>
  );
};
