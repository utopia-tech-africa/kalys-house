import { Heading } from "../texts";
import { Button } from "../ui/button";

export const SegmentContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <Heading className="text-nowrap">GOT THE NEXT BIG THING?</Heading>

      <p className="font-poppins leading-[130%] tracking-[1px] text-sm ">
        The panel is set. The lights are ready. The only thing missing is YOU.
        We are opening up slots for our Live Pitch Segment. It&apos;s strictly
        limited, and the competition is fierce. If you&apos;re ready to stand in
        the spotlight and defend your vision, fill out the form below
        immediately.
      </p>

      <a
        href="https://form.jotform.com/253291040675051"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="mt-5 py-2.5 hover:bg-priamry-deep">
          GET PLUGGED IN
        </Button>
      </a>
    </div>
  );
};
