"use client";

import { useEffect, useState } from "react";
import { ComponentLayout } from "@/components/component-layout";
import { Heading } from "@/components/texts";
import { HighlightCard } from "./components/highlight-card";
import { Button } from "@/components/ui/button";
import { fetchHighlights } from "@/lib/queries/highlightQuery";

export const Highlights = () => {
  const [highlights, setHighlights] = useState<any[]>([1, 2, 3, 4, 5, 6, 7, 8]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0); // <-- total document count

  const initialLimit = 8;
  const loadMoreLimit = 4;

  /* -----------------------------
    Load first 8 highlights on mount
  ------------------------------ */
  useEffect(() => {
    loadInitial();
  }, []);

  const loadInitial = async () => {
    const { data, total } = await fetchHighlights(initialLimit, 0);

    setHighlights(data);
    setTotal(total); // <-- save total count
    setOffset(initialLimit); // next batch after initial 8
  };

  /* -----------------------------
    Load more highlights
  ------------------------------ */
  const loadMore = async () => {
    const { data: moreData } = await fetchHighlights(loadMoreLimit, offset);

    setHighlights((prev) => [...prev, ...moreData]);
    setOffset((prev) => prev + loadMoreLimit);
  };

  /* -----------------------------
    Compute disable state
    Disable when loaded >= total
  ------------------------------ */
  const isOutOfHighlights = highlights.length >= total;

  return (
    <ComponentLayout>
      <section id="highlights">
        <Heading className="leading-10">
          VIRAL MOMENTS & <br /> HIGHLIGHTS
        </Heading>

        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full place-items-center">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 1 ? "lg:translate-y-[89px]" : ""
                } w-full`}
              >
                <HighlightCard highlight={highlight} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <Button
            className="text-xl sm:text-2xl px-5 py-2.5 rounded w-fit mt-10 lg:mt-35"
            onClick={loadMore}
            disabled={isOutOfHighlights} // <-- disable here
          >
            DISCOVER MORE
          </Button>
        </div>
      </section>
    </ComponentLayout>
  );
};
