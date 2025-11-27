import Image from "next/image";
import { Copyright } from "./copyright";
import { Join } from "./join";
import { SiteMap } from "./site-map";
import { Socials } from "./socials";
import { BackDropImg } from "@/app/assets/img";
import { ComponentLayout } from "../component-layout";

const Footer = () => {
  return (
    <footer className=" w-full overflow-hidden">
      <ComponentLayout className="relative">
        <Image
          src={BackDropImg}
          alt="footer image"
          fill
          className="absolute inset-0 object-cover -z-20"
        />

        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm -z-10" />

        <div className="relative z-10 py-3 flex flex-col gap-20">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-14 lg:gap-20">
            <SiteMap />
            <Socials />
            <Join />
          </div>
          <Copyright />
        </div>
      </ComponentLayout>
    </footer>
  );
};

export default Footer;
