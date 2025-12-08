"use client";

import { kalyjayImg, kalyjayImgMobile } from "@/assets/img";
import Image from "next/image";
import { About } from "./about";
import { CollaborateButton } from "./collaborate-button";
import { FollowSection } from "./follow-section";
import { useState } from "react";
import { CollaborateModal } from "./collaborate-modal";

export const Collaborate = () => {
  const [isCollaborateModalOpen, setIsCollaborateModalOpen] = useState(false);

  const handleOpenCollaborate = () => setIsCollaborateModalOpen(true);

  return (
    <>
      <section
        id="collaborate"
        className="relative -mt-30 mb-20 w-full min-h-screen overflow-hidden bg-black"
      >
        <div className="relative w-full h-full min-h-[703px]">
          {/* desktop */}
          <Image
            src={kalyjayImg}
            alt=""
            className="hidden lg:block absolute inset-0 w-full h-full object-cover"
          />

          {/* mobile */}

          <Image
            src={kalyjayImgMobile}
            alt=""
            className="block lg:hidden absolute inset-0 w-full h-full object-cover"
          />

          {/* button */}
          <div
            onClick={handleOpenCollaborate}
            className="
          absolute 
          left-1/2 -translate-x-1/2 
          z-20
          top-[94%]      /* mobile position */
          md:top-[92%]   /* tablet */
          lg:top-[88%]   /* desktop */
        "
          >
            <CollaborateButton />
          </div>
        </div>

        {/* other content */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* mobile */}
          <div className="md:hidden flex justify-between px-4 pt-[31px]">
            <div className="w-[161px]">
              <About />
            </div>
            <div className="w-[88px]">
              <FollowSection />
            </div>
          </div>

          {/* desktop */}
          <div className="hidden md:block">
            <div className="absolute left-20 top-80">
              <About />
            </div>
            <div className="absolute right-20 lg:right-[193px] top-80">
              <FollowSection />
            </div>
          </div>
        </div>
      </section>
      <CollaborateModal
        isOpen={isCollaborateModalOpen}
        onClose={() => setIsCollaborateModalOpen(false)}
      />
    </>
  );
};
