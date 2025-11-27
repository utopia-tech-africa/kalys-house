import { ComponentLayout } from "@/components/component-layout";
import { Heading } from "@/components/texts";

export const EventBrief = () => {
  return (
    <ComponentLayout className="py-18">
      <Heading className="text-center">
        KalyJay’s House{" "}
        <span className="text-secondary leading-8 sm:leading-12">
          is a wild, non-stop 72-hour livestream party where your favorite{" "}
          <br /> influencers, creators, musicians, entertainers, and surprise
          guests all live together in
          <br /> one luxury villa. <br />
          Think games, music, chaos, challenges, confessions, late-night
          madness, poolside vibes,
          <br /> and nonstop fan interaction all streaming live to the timeline.
          <br />
          For 3 days straight, the house never sleeps.
        </span>
      </Heading>
    </ComponentLayout>
  );
};
