import Link from "next/link";

export const SiteMap = () => {
  return (
    <ul className="flex flex-col gap-2">
      <li className="text-[22px] leading-[28.6px] text-[#FF3401]">LIVE</li>
      <li className="text-[22px] leading-[28.6px] text-secondary-100">
        <Link href=""> SCHEDULE</Link>
      </li>
      <li className="text-[22px] leading-[28.6px] text-secondary-100">
        {" "}
        <Link href=""> VISIT THE HOUSE</Link>
      </li>
      <li className="text-[22px] leading-[28.6px] text-secondary-100">
        <Link href=""> HIGHLIGHTS</Link>
      </li>
      <li className="text-[22px] leading-[28.6px] text-secondary-100">
        <Link href=""> COLLABORATE</Link>
      </li>
    </ul>
  );
};
