"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@/assets/svg";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { menuBg } from "@/assets/img";
import { X } from "lucide-react";

interface MenuSliderProps {
  open: boolean;
  onClose: () => void;
}

export const MenuSlider = ({ open, onClose }: MenuSliderProps) => {
  /* Lock body scroll when menu is open */
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  return (
    <>
      {/* Background Overlay (fade-in) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-99"
          onClick={onClose}
        />
      )}

      {/* Sliding Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: open ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-100 text-white"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={menuBg}
            alt="Menu background"
            fill
            className="object-cover brightness-[0.55]"
          />
        </div>

        {/* Top Bar */}
        <div className="flex justify-between items-center px-5 py-4 text-xl uppercase">
          <button
            onClick={onClose}
            className="hover:opacity-70 flex gap-1 cursor-pointer px-2 rounded-md hover:bg-black/50 transition"
          >
            <X />
            Close
          </button>

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
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center h-[80%] space-y-8 text-4xl md:text-6xl tracking-wide">
          <Link
            href="#what-dey-go-on"
            className="hover:opacity-70"
            onClick={onClose}
          >
            What dey go on?
          </Link>
          <Link href="#schedule" className="hover:opacity-70" onClick={onClose}>
            Schedule
          </Link>
          <Link
            href="#highlights"
            className="hover:opacity-70"
            onClick={onClose}
          >
            Highlights
          </Link>
          <Link
            href="#collaborate"
            className="hover:opacity-70"
            onClick={onClose}
          >
            collaborate
          </Link>
        </div>
      </motion.div>
    </>
  );
};
