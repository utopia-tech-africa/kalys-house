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
        "font-bebas text-[40px] md:text-[40px] text-[#FF3300]",
        className
      )}
    >
      {children}
    </div>
  );
};
