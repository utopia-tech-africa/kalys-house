import { ComponentLayout } from "@/components/component-layout";
import { Heading } from "@/components/texts";
import { Button } from "@/components/ui/button";
import React from "react";

export const Highlights = () => {
  return (
    <ComponentLayout className="">
      <Heading className="leading-10">
        VIRAL MOMENTS & <br /> HIGHLIGHTS
      </Heading>
      <div className="flex flex-col items-center">
        <div>{/*{Highlights cards go here}*/}</div>

        <Button className="text-xl sm:text-2xl px-5 py-2.5 rounded w-fit">
          DISCOVER MORE
        </Button>
      </div>
    </ComponentLayout>
  );
};
