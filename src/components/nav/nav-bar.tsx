// components/Navbar.tsx

import Link from "next/link";
import { ComponentLayout } from "../component-layout";
import { ExternalLinkIcon, Hamburger, Logo } from "@/assets/svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full  backdrop-blur-3xl bg-neutral-500/25 z-100">
      <ComponentLayout className="p-1 flex items-center justify-between uppercase ">
        {/* Left: Menu */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <Hamburger />
          <span className="text-xl text-secondary">Menu</span>
        </div>

        {/* Center: Logo */}
        <div className="flex items-center justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Right: Join button */}
        <Link
          href="#registration-form"
          className="flex items-center space-x-1 text-xl text-secondary p-1 rounded hover:bg-foreground/10 transition"
        >
          <span>Join the house</span>
          <ExternalLinkIcon />
        </Link>
      </ComponentLayout>
    </nav>
  );
};

export default Navbar;
