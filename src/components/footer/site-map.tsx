export const SiteMap = () => {
  return (
    <ul className="flex flex-col gap-2">
      <li className="text-[22px] leading-[28.6px] text-[#FF3401]">LIVE</li>
      <li className="text-[22px] leading-[28.6px] text-secondary-100">
        <a href="#schedule"> SCHEDULE</a>
      </li>
      <li className="text-[22px] leading-[28.6px] text-secondary-100">
        <a href="#registration-form"> VISIT THE HOUSE</a>
      </li>
      <li className="text-[22px] leading-[28.6px] text-secondary-100">
        <a href="#highlights"> HIGHLIGHTS</a>
      </li>
      <li className="text-[22px] leading-[28.6px] text-secondary-100">
        <a href="#collaborate"> COLLABORATE</a>
      </li>
    </ul>
  );
};
