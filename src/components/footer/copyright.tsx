export const Copyright = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row justify-between font-poppins">
      <span className="leading-[18.2px] text-sm text-tertiary-300">
        &copy; kalyjays house
      </span>
      <span className="leading-[15.6px] text-xs text-tertiary-300">
        Powered by Utopia technologies
      </span>
      <div className="flex flex-col gap-1 text-start md:text-end">
        <span className="text-tertiary-300 text-sm leading-[18.2px]">
          Terms of Service
        </span>
        <span className="text-tertiary-300 text-sm leading-[18.2px]">
          Privacy Policy
        </span>
      </div>
    </div>
  );
};
