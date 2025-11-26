import { ReactNode } from "react";
import { Button } from "./button";
import { ArrowUpRight } from "lucide-react";

type WatchButtonProps = {
  children: ReactNode;
};

export const WatchButton = ({ children }: WatchButtonProps) => {
  return (
    <div className="flex gap-2 px-2 py-1 w-fit items-center justify-center">
      <Button className="bg-transparent px-5 py-2.5 rounded w-fit text-[22px] font-bebas leading-[28.6px] text-[#D4E3EF] uppercase">
        {children}
      </Button>
      <ArrowUpRight className=" text-orange-deep w-10 h-10 object-cover" />
    </div>
  );
};
