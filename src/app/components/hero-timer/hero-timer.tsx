"use client";

import { useEffect, useState } from "react";
import { ChannelsListQueryResult } from "../../../../sanity.types";
import { fetchChannelsList } from "@/lib/queries/ChannelsListQuery";
import { LiveChannelCard } from "./components/live-channel-card";
import { fetchStreamViews } from "@/lib/queries/streamViews";

// ---------------- Constants ---------------- //
const HOURS_72_MS = 58 * 60 * 60 * 1000;

// ---------------- HeroTimer Component ---------------- //
export const HeroTimer = () => {
  const [channels, setChannels] = useState<ChannelsListQueryResult>([]);
  const [streamViews, setStreamViews] = useState<number>(1);
  const [liveViews, setLiveViews] = useState(streamViews);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // ---------------- Load Channels + Stream Data ---------------- //
  useEffect(() => {
    const loadData = async () => {
      const channelsData = await fetchChannelsList();
      const streamData = await fetchStreamViews();

      setChannels(channelsData);
      setStreamViews(streamData?.viewCount || 1);

      if (streamData?.streamStartAt) {
        const startTime = new Date(streamData.streamStartAt).getTime();
        const endTime = startTime + HOURS_72_MS;

        const tick = () => {
          const remaining = endTime - Date.now();
          setTimeLeft(Math.max(remaining, 0));
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    setLiveViews(streamViews);
  }, [streamViews]);

  useEffect(() => {
    if (!streamViews) return;

    const interval = setInterval(() => {
      setLiveViews((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = prev + delta;

        // Clamp within ±5 of the real value
        const min = streamViews - 5;
        const max = streamViews + 5;

        return Math.min(Math.max(next, min), max);
      });
    }, 7000); // every 7 seconds (feels natural)

    return () => clearInterval(interval);
  }, [streamViews]);

  // ---------------- Time Helpers ---------------- //
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  // ---------------- Flip Digit ---------------- //
  const FlipDigit = ({ value }: { value: string }) => {
    const [prev, setPrev] = useState(value);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      if (value !== prev) {
        setAnimate(true);
        setPrev(value);

        const timeout = setTimeout(() => setAnimate(false), 600);
        return () => clearTimeout(timeout);
      }
    }, [value, prev]);

    return (
      <span className="relative inline-block w-[1ch] text-center">
        <span className={animate ? "animate-flip" : ""}>{value}</span>
      </span>
    );
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black text-white py-[85px]">
      <div className="w-full max-w-6xl px-6 flex flex-col justify-evenly gap-14 text-center">
        {/* ---------------- Top Info ---------------- */}
        <div className="flex items-center justify-center gap-6 font-normal text-2xl md:text-[40px]">
          <span className="text-primary-light animate-pulse">WE ARE LIVE</span>
          <span
            key={liveViews}
            className="opacity-70 transition-all duration-300 animate-pulse"
          >
            {liveViews}K VIEWERS
          </span>
        </div>

        {/* ---------------- Countdown ---------------- */}
        <div className="flex items-center justify-center font-bold leading-none text-[96px] md:text-[250px] tracking-wide">
          <div className="flex">
            {hours.split("").map((d, i) => (
              <FlipDigit key={`h-${i}`} value={d} />
            ))}
          </div>
          <span className="mx-2 opacity-50">:</span>
          <div className="flex">
            {minutes.split("").map((d, i) => (
              <FlipDigit key={`m-${i}`} value={d} />
            ))}
          </div>
          <span className="mx-2 opacity-50">:</span>
          <div className="flex">
            {seconds.split("").map((d, i) => (
              <FlipDigit key={`s-${i}`} value={d} />
            ))}
          </div>
        </div>

        {/* ---------------- Join Stream ---------------- */}
        <div className="flex flex-col gap-6">
          <h2 className="font-normal tracking-wide text-2xl md:text-[40px] text-primary-light">
            JOIN THE STREAM
          </h2>
          <div className="flex gap-1 p-1 sm:gap-4 items-center justify-center overflow-x-scroll no-scrollbar ">
            {channels.map((channel) => (
              <LiveChannelCard key={channel._id} channel={channel} />
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- Animations ---------------- */}
      {/* <style jsx>{`
        @keyframes flip {
          0% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(90deg);
          }
          100% {
            transform: rotateX(0deg);
          }
        }

        .animate-flip {
          display: inline-block;
          animation: flip 0.6s ease-in-out;
        }
      `}</style> */}
    </section>
  );
};
