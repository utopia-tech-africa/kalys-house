"use client";

import { useRef, useState, useEffect } from "react";
import { HeroLoader } from "./components/hero-loader";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true); // start muted to ensure autoplay
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (!loaderDone) {
      // Disable scroll
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll
      html.style.overflow = "";
      document.body.style.overflow = "";
    }

    // Cleanup (in case component unmounts)
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [loaderDone]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted((prev) => !prev);
    }
  };

  // Play video programmatically when loader finishes
  useEffect(() => {
    if (loaderDone && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Video playback failed:", error);
        });
      }
    }
  }, [loaderDone]);

  return (
    <section className="relative w-full h-dvh overflow-hidden cursor-pointer">
      {!loaderDone && <HeroLoader onComplete={() => setLoaderDone(true)} />}

      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted={muted}
        playsInline
        onClick={handleVideoClick}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/ddbns4bkw/video/upload/v1765626999/72_HOURS_WITH_KALY_1_MIN_TRAILER_i1fgxt.mp4"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Small mute indicator bubble */}
      <div className="absolute bottom-6 right-6 z-20 bg-black/40 text-white px-3 py-1 rounded-full text-sm">
        {muted ? "Muted" : "Sound On"}
      </div>
    </section>
  );
};
