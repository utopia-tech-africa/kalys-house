import Registration from "@/components/registration/registration";
import { EventBrief } from "./components/event-brief/event-brief";
import { Hero } from "./components/hero/hero";
import { Sponsors } from "./components/sponsors/sponsors";
import { WhatDeyGoOn } from "./components/what-dey-go-on/what-dey-go-on";

const Home = () => {
  return (
    <>
      <Hero />
      <EventBrief />
      <Sponsors />
      <WhatDeyGoOn />
      <Registration />
    </>
  );
};

export default Home;
