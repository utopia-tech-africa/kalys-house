import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateEventDates = () => {
  const dates: string[] = ["14th Dec", "15th Dec", "16th Dec", "17th Dec"];
  return dates;
};

export const generateEventSlots = () => {
  const slots: string[] = [
    "6AM-10AM",
    "10AM-2PM",
    "2PM-6PM",
    "6PM-10PM",
    "10PM-2AM",
    "2AM-6AM",
  ];

  return slots;
};

export const collaboratePurpose = () => {
  return ["Partnership", "Enquiry", "Sponsorship"];
};
