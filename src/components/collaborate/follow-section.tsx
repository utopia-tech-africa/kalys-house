import { Follow } from "./follow";

export const FollowSection = () => {
  return (
    <div className="content-stretch lg:-mr-30 flex flex-col gap-3 md:gap-6 items-end">
      <p className="text-[18px] md:text-[26px]  leading-[0.8] not-italic text-secondary-100  text-right">
        FOLLOW ON
      </p>

      <Follow />
    </div>
  );
};
