export const Follow = () => {
  const socials = ["X", "TWITCH", "TIK TOK", "YOUTUBE", "INSTAGRAM"];

  return (
    <div className="content-stretch flex flex-col gap-2 md:gap-4 items-end shrink-0">
      {socials.map((social, index) => (
        <p
          key={social}
          className=" leading-[0.6] not-italic text-secondary-100 text-[18px] md:text-[26px] text-right min-w-full relative shrink-0 w-min"
        >
          {social}
        </p>
      ))}
    </div>
  );
};
