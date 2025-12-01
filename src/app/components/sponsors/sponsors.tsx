import { Heading } from "@/components/texts";
import MovingCards from "./components/moving-cards";
import { fetchSponsors } from "@/lib/queries/sponsorQuery";

export const Sponsors = async () => {
  const sponsors = await fetchSponsors();

  return (
    <div className="space-y-4">
      <Heading className="text-center">Sponsors & Partners</Heading>
      <MovingCards cards={sponsors} />;
    </div>
  );
};
