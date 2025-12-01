import Image from "next/image";
import { ScheduleQueryResult } from "../../../../../sanity.types";
import { scheduleCardImg } from "@/assets/img";
import { LiveTag } from "@/assets/svg/live-tag";

interface ScheduleCardProps {
  event: ScheduleQueryResult[0];
}

export const ScheduleCard = ({ event }: ScheduleCardProps) => {
  const time = new Date(event.time || Date.now()).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="relative h-16 w-full rounded overflow-hidden flex items-center uppercase ">
      <Image
        src={scheduleCardImg}
        alt={event.title || ""}
        fill
        className="object-cover w-full h-full absolute inset-0 -z-10  bg-neutral-700/85 "
      />

      <div className="flex justify-between items-center text-white text-2xl backdrop-blur-lg h-full w-full px-[18px] ">
        <span>{event.title}</span>

        {!event.live ? <span>{time}</span> : <LiveTag />}
      </div>
    </div>
  );
};
