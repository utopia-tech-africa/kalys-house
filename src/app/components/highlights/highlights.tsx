import { ComponentLayout } from "@/components/component-layout";
import { Heading } from "@/components/texts";
import { HighlightCard } from "./components/highlight-card";
import { Button } from "@/components/ui/button";
import { fetchHighlights } from "@/lib/queries/highlightQuery";

export const Highlights = async () => {
  const highlights = await fetchHighlights();

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
                key={highlight._id}
                className={`${
                  index % 2 === 1 ? "lg:translate-y-[89px]" : ""
                } w-full`}
              >
                <HighlightCard highlight={highlight} />
              </div>
            ))}
          </div>

          <Button className="text-xl sm:text-2xl px-5 py-2.5 rounded w-fit lg:mt-35">
            DISCOVER MORE
          </Button>
        </div>
      </section>
    </ComponentLayout>
  );
};
