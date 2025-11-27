import { ComponentLayout } from "@/components/component-layout";
import { Heading } from "@/components/texts";
import { BannerCard } from "./components/banner-card";
import { whatDeyGoOnBannerImg } from "@/assets/img";

export const WhatDeyGoOn = () => {
  const cards = [
    {
      image: whatDeyGoOnBannerImg,
      title: "Black sherrif set to join the stream! ",
    },
    {
      image: whatDeyGoOnBannerImg,
      title: "Black sherrif set to join the stream!",
    },
    {
      image: whatDeyGoOnBannerImg,
      title: "Black sherrif set to join the stream!",
    },
    {
      image: whatDeyGoOnBannerImg,
      title: "Black sherrif set to join the stream!",
    },
    {
      image: whatDeyGoOnBannerImg,
      title: "Black sherrif set to join the stream!",
    },
  ];

  return (
    <div className="pl-4 sm:pl-12 md:pl-20 lg:pl-25 xl:pl-30 ">
      <Heading>What dey go on?</Heading>

      {/* Scrollable row */}
      <div className="flex gap-6 mt-6 overflow-x-auto no-scrollbar whitespace-nowrap">
        {cards.map((card, i) => (
          <BannerCard key={i} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};
