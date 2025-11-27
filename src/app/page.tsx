import Footer from "@/components/footer/footer";
import { EventBrief } from "./components/event-brief/event-brief";
import { Hero } from "./components/hero/hero";
import { Sponsors } from "./components/sponsors/sponsors";
import { WhatDeyGoOn } from "./components/what-dey-go-on/what-dey-go-on";
import Registration from "@/components/registration/registration";

const Home = () => {
  return (
    <>
      <div className="text-white h-screen ">
        <Hero />
        <Sponsors />
        <WhatDeyGoOn />
        <Registration />
      </div>
    </>
  );
};
export default Home;
