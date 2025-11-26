import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ComponentLayoutProps = {
  children: ReactNode;
  className?: string;
};
export const ComponentLayout = ({
  children,
  className,
}: ComponentLayoutProps) => {
  return (
    <div className={cn("w-full px-4 md:px-10 lg:px-20", className)}>
      {children}
    </div>
  );
};
