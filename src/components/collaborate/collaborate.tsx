import { About } from "./about";
import { Follow } from "./follow";
import { ComponentLayout } from "../component-layout";
// import { KalyJayImg } from "@/assets/svg/kalyjay-img";
import Image from "next/image";
import { kalyjayImg } from "@/assets/img";

export const Collaborate = () => {
  return (
    <section className="hidden md:block mb-30 w-full overflow-hidden relative justify-center items-center">
      <Image
        src={kalyjayImg}
        height={600}
        width={600}
        alt="kalyjay collaborate banner"
        className="w-full h-full object-cover"
      />
      <ComponentLayout className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between z-20">
        <About />
        <Follow />
      </ComponentLayout>

      <div className="flex flex-col items-center justify-center absolute top-[93%] left-1/2 transform -translate-x-1/2 rounded-xl -translate-y-1/2 z-20 bg-[linear-gradient(90deg,#FF3401_0%,#991F01_100%)] py-3 px-10">
        <button className="text-[32px]">COLLABORATE WITH ME</button>
      </div>
    </section>
  );
};
