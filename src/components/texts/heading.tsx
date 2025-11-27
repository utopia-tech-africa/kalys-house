import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <div
      className={cn(
        "font-bebas text-2xl sm:text-3xl md:text-[40px] text-[#FF3300]",
        className
      )}
    >
      {children}
    </div>
  );
};
