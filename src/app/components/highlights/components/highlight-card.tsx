"use client";

import { ExternalLinkIcon } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HighlightsQueryResult } from "../../../../../sanity.types";

interface HighlightCardProps {
  highlight: HighlightsQueryResult[0];
}

export const HighlightCard = ({ highlight }: HighlightCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Detect if device supports hover (desktop) or not (mobile/tablet)
  const [isHoverDevice, setIsHoverDevice] = useState(true);

  useEffect(() => {
    // Browsers expose hover capability through matchMedia
    setIsHoverDevice(window.matchMedia("(hover: hover)").matches);
  }, []);

  /* ------- Detect when card enters view (used for mobile) -------- */
  useEffect(() => {
    // Only activate intersection observer on NON-hover devices
    if (isHoverDevice) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting);
        });
      },
      { threshold: 0.6 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isHoverDevice]);

  /* ------- Play / Pause video when active -------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  /* ------- Toggle mute on click -------- */
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    video.muted = newMuteState;
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full h-[427px] rounded-xl overflow-hidden shrink-0 cursor-pointer"
      onClick={toggleMute}
      // Desktop hover logic (ignored on mobile)
      onMouseEnter={() => isHoverDevice && setIsActive(true)}
      onMouseLeave={() => isHoverDevice && setIsActive(false)}
    >
      {/* Thumbnail */}
      <Image
        src={highlight.thumbnail || ""}
        alt={highlight.title || ""}
        fill
        className="object-cover w-full transition-all duration-300 hover:scale-110"
        /* ///////////////////Uncomment "style" later////////////////////////////////////////////////////// */
        // style={{ opacity: isActive ? 0 : 1 }}
      />

      {/* ///////////////////Uncomment "Video" later////////////////////////////////////////////////////// */}
      {/* Video */}
      {/* <video
        ref={videoRef}
        src={highlight.video || ""}
        muted={isMuted}
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: isActive ? 1 : 0 }}
      /> */}

      {/* ///////////////////Uncomment "Click to unmute" later////////////////////////////////////////////////////// */}
      {/* Click-to-unmute label */}
      {/* {isActive && isMuted && (
        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md pointer-events-none animate-fadeIn">
          Click to unmute
        </div>
      )} */}

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-linear-to-t from-black via-black/70 to-transparent" />

      {/* Watch Button */}
      <Link
        // href={highlight.url || ""}
        href={""}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 right-0 uppercase bg-black flex items-center gap-1 rounded-tl-xl px-3 py-2 border-t-[0.1px] border-neutral-400/50"
      >
        Watch Video <ExternalLinkIcon />
      </Link>
    </div>
  );
};
