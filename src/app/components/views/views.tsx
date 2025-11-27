import { ComponentLayout } from "@/components/component-layout";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { Heading } from "@/components/texts";

export const Views = () => {
  return (
    <ComponentLayout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 min-h-[234px]">
      <Heading className="text-white">
        The <span className="text-primary-light">numbers</span> don’t lie
      </Heading>

      {/* Views 1 */}
      <div className="flex flex-col justify-between items-center ">
        <p className="font-poppins text-sm sm:text-base md:text-lg  text-primary-light">
          #24HoursWithKaly6th December, 2024
        </p>
        <AnimatedNumber
          value={1526}
          as={"p"}
          className="text-8xl sm:text-9xl tracking-tight"
        />
        <p className="uppercase sm:text-6xl text-4xl text-center">Views</p>
      </div>
      {/* Views 2 */}
      <div className="flex flex-col justify-between items-center ">
        <p className="font-poppins text-sm sm:text-base md:text-lg  text-primary-light">
          #24HoursWithKaly6th December, 2024
        </p>
        <AnimatedNumber
          value={2146}
          as={"p"}
          className="text-8xl sm:text-9xl tracking-tight"
        />
        <p className="uppercase sm:text-6xl text-4xl text-center">Views</p>
      </div>
    </ComponentLayout>
  );
};
