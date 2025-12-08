import Registration from "@/components/registration/registration";
import { EventBrief } from "../components/event-brief/event-brief";
import { Hero } from "../components/hero/hero";
import { Schedule } from "../components/schedule/schedule";
import { Sponsors } from "../components/sponsors/sponsors";
import { Views } from "../components/views/views";
import { WhatDeyGoOn } from "../components/what-dey-go-on/what-dey-go-on";
import { Collaborate } from "@/components";
import { Highlights } from "../components/highlights/highlights";
import { fetchStreamingHero } from "@/lib/queries/streaming-hro-query";
import { StreamingHero } from "../components/streaming-hero/streaming-hero";

const Home = async () => {
  // Fetch the toggle document
  const heroToggle = await fetchStreamingHero();

  return (
    <section className="flex flex-col gap-y-30">
      {/* Conditionally render hero */}
      {heroToggle?.useStreamingHero ? (
        <StreamingHero
          defaultChannel={heroToggle?.streamingChannel || null || undefined}
        />
      ) : (
        <Hero />
      )}

      <EventBrief />
      <Sponsors />
      <WhatDeyGoOn />
      <Schedule />
      <Views />
      <Highlights />
      <Registration />
      <Collaborate />
    </section>
  );
};

export default Home;
