import { ReactNode } from "react";
import { Button } from "./button";

type CtaButtonProps = {
  children: ReactNode;
};

export const CtaButton = ({ children }: CtaButtonProps) => {
  return (
    <Button className="bg-orange-deep px-5 py-2.5 rounded w-fit">
      {children}
    </Button>
  );
};
