import { Heading } from "@/components/texts";
import { BannerCard } from "./components/banner-card";
import { fetchUpdates } from "@/lib/queries/updateQuery";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Script from "next/script";

export const WhatDeyGoOn = async () => {
  const updates = await fetchUpdates();

  return (
    <section
      id="what-dey-go-on"
      className="pl-4 sm:pl-12 md:pl-20 lg:pl-25 xl:pl-30"
    >
      {/* Header + Arrows */}
      <div className="flex items-center justify-between pr-6">
        <Heading>What dey go on?</Heading>

        <div className="flex items-center gap-2">
          <button
            id="scroll-left"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            id="scroll-right"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Scrollable row */}
      <div
        id="updates-scroll"
        className="flex gap-6 mt-6 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth"
      >
        {updates.map((update) => (
          <BannerCard key={update._id} update={update} />
        ))}
      </div>

      {/* Client-side scroll behavior */}
      <Script id="scroll-controls">
        {`
          const container = document.getElementById('updates-scroll');
          const leftBtn = document.getElementById('scroll-left');
          const rightBtn = document.getElementById('scroll-right');

          leftBtn?.addEventListener('click', () => {
            container?.scrollBy({ left: -350, behavior: 'smooth' });
          });

          rightBtn?.addEventListener('click', () => {
            container?.scrollBy({ left: 350, behavior: 'smooth' });
          });
        `}
      </Script>
    </section>
  );
};
