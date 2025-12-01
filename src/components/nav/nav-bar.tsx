"use client";

import Link from "next/link";
import { ComponentLayout } from "../component-layout";
import { ExternalLinkIcon, Hamburger, Logo } from "@/assets/svg";
import { useState } from "react";
import { MenuSlider } from "./components/menu-slider";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-3xl bg-neutral-500/25 z-90">
        <ComponentLayout className="p-1 flex items-center justify-between uppercase">
          {/* Left: Menu toggle */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <Hamburger />
            <span className="text-xl text-secondary">Menu</span>
          </button>

          {/* Center: Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Right: Join Button */}
          <Link
            href="#registration-form"
            className="flex items-center space-x-1 text-xl text-secondary p-1 rounded hover:bg-foreground/10 transition group "
          >
            <span>Join the house</span>

            {/* Animated icon container */}
            <div className="relative w-4 h-5 overflow-hidden ">
              {/* Icon 1 (initial) */}
              <div className="absolute inset-0 transition-transform duration-300 group-hover:-translate-y-full">
                <ExternalLinkIcon />
              </div>

              {/* Icon 2 (slides up on hover) */}
              <div className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <ExternalLinkIcon />
              </div>
            </div>
          </Link>
        </ComponentLayout>
      </nav>

      {/* SLIDER MENU */}
      <MenuSlider open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
