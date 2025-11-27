import { Heading } from "@/components/texts";
import { cocacolaLogo, mtnLogo } from "@/assets/img";
import MovingCards from "./components/moving-cards";

const cards = [
  { id: 1, imageUrl: cocacolaLogo },
  { id: 2, imageUrl: mtnLogo },
  { id: 3, imageUrl: cocacolaLogo },
  { id: 4, imageUrl: mtnLogo },
];

export const Sponsors = () => {
  return (
    <div className="space-y-4">
      <Heading className="text-center ">Sponsors & partners</Heading>
      <MovingCards cards={cards} />
    </div>
  );
};
