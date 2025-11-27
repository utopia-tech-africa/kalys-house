import { EventBrief } from "./components/event-brief/event-brief";
import { Hero } from "./components/hero/hero";
import { Sponsors } from "./components/sponsors/sponsors";
import { WhatDeyGoOn } from "./components/what-dey-go-on/what-dey-go-on";

const Home = () => {
  return (
    <main className="h-screen text-w">
      <Hero />
      <EventBrief />
      <Sponsors />
      <WhatDeyGoOn />
    </main>
  );
};
export default Home;
