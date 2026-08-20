import { socials } from "@/lib/utils";

export const Follow = () => {
  return (
    <div className="content-stretch flex flex-col gap-2 md:gap-4 items-end shrink-0">
      {socials.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          key={item.social}
          className=" leading-[0.6] not-italic text-secondary-100 text-[18px] md:text-[26px] text-right min-w-full relative shrink-0 w-min transform transition-transform duration-300 hover:-translate-x-full"
        >
          {item.social}
        </a>
      ))}
    </div>
  );
};
