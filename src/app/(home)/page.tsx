import Registration from "@/components/registration/registration";
import { EventBrief } from "../components/event-brief/event-brief";
import { Hero } from "../components/hero/hero";
import { Schedule } from "../components/schedule/schedule";
import { Sponsors } from "../components/sponsors/sponsors";
import { Views } from "../components/views/views";
import { WhatDeyGoOn } from "../components/what-dey-go-on/what-dey-go-on";
import { Collaborate } from "@/components";
import { Highlights } from "../components/highlights/highlights";
import { StreamingHero } from "../components/streaming-hero/streaming-hero";

const Home = () => {
  return (
    <section className="flex flex-col gap-y-30">
      {/* <StreamingHero /> */}
      <Hero />
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
