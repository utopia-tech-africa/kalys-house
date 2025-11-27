import Image, { StaticImageData } from "next/image";

interface ScheduleCardProps {
  name: string;
  time: string;
  image: string | StaticImageData;
}

export const ScheduleCard = ({ name, time, image }: ScheduleCardProps) => {
  return (
    <div className="relative h-16 w-full rounded overflow-hidden flex items-center px-[18px] uppercase">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover w-full h-full absolute inset-0 -z-10  bg-neutral-700/85"
      />

      <div className="flex justify-between items-center w-full text-white text-2xl ">
        <span>{name}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};
