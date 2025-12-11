import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Event dates
export const generateEventDates = () => {
  const dates: string[] = ["14th Dec", "15th Dec", "16th Dec", "17th Dec"];
  return dates;
};

// Event time slots
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

// Collaborate purpose list
export const collaboratePurpose = () => {
  return ["Partnership", "Enquiry", "Sponsorship"];
};

// Socials list
export const socials = [
  { social: "X", link: "https://x.com/kalyshouse" },
  { social: "DISCORD", link: "" },
  { social: "TIK TOK", link: "" },
  {
    social: "YOUTUBE",
    link: "https://youtube.com/@kalyshouse?si=lgIA9Bb4SmbYAz8N",
  },
  { social: "INSTAGRAM", link: "https://www.instagram.com/kalyshouse" },
];

// footer socials
