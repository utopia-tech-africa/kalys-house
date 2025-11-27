import Image, { StaticImageData } from "next/image";

interface ScheduleCardProps {
  name: string;
  time: string;
  image: string | StaticImageData;
}

export const ScheduleCard = ({ name, time, image }: ScheduleCardProps) => {
  return (
    <div className="relative h-16 w-full rounded overflow-hidden flex items-center uppercase ">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover w-full h-full absolute inset-0 -z-10  bg-neutral-700/85 "
      />

      <div className="flex justify-between items-center text-white text-2xl backdrop-blur-lg h-full w-full px-[18px] ">
        <span>{name}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};
