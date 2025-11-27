import { EventBrief } from "./components/event-brief/event-brief";
import { Hero } from "./components/hero/hero";
import { Schedule } from "./components/schedule/schedule";
import { Sponsors } from "./components/sponsors/sponsors";
import { WhatDeyGoOn } from "./components/what-dey-go-on/what-dey-go-on";
import Registration from "@/components/registration/registration";

const Home = () => {
  return (
    <>
      <Hero />
      <EventBrief />
      <Sponsors />
      <WhatDeyGoOn />
      <Schedule />
    </>
  );
};

export default Home;
