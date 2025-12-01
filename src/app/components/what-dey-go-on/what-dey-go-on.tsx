import { Heading } from "@/components/texts";
import { BannerCard } from "./components/banner-card";
import { fetchUpdates } from "@/lib/queries/updateQuery";

export const WhatDeyGoOn = async () => {
  const updates = await fetchUpdates();

  return (
    <section
      id="what-dey-go-on"
      className="pl-4 sm:pl-12 md:pl-20 lg:pl-25 xl:pl-30"
    >
      <Heading>What dey go on?</Heading>

      {/* Scrollable row */}
      <div className="flex gap-6 mt-6 overflow-x-auto no-scrollbar whitespace-nowrap">
        {updates.map((update, i) => (
          <BannerCard key={update._id} update={update} />
        ))}
      </div>
    </section>
  );
};
