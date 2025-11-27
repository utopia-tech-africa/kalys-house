import { EventBrief } from "./components/event-brief/event-brief";
import { Hero } from "./components/hero/hero";
import { Schedule } from "./components/schedule/schedule";
import { Sponsors } from "./components/sponsors/sponsors";
import { Views } from "./components/views/views";
import { WhatDeyGoOn } from "./components/what-dey-go-on/what-dey-go-on";
import Registration from "@/components/registration/registration";

const Home = () => {
  return (
    <section className="flex flex-col gap-y-30">
      <Hero />
      <EventBrief />
      <Sponsors />
      <WhatDeyGoOn />
      <Schedule />
      <Views />
    </section>
  );
};

export default Home;
