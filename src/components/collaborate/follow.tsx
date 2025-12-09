export const Follow = () => {
  const socials = [
    { social: "X", link: "https://x.com/kalyshouse" },
    { social: "DISCORD", link: "" },
    { social: "TIK TOK", link: "" },
    {
      social: "YOUTUBE",
      link: "https://youtube.com/@kalyshouse?si=lgIA9Bb4SmbYAz8N",
    },
    { social: "INSTAGRAM", link: "https://www.instagram.com/kalyshouse" },
  ];

  return (
    <div className="content-stretch flex flex-col gap-2 md:gap-4 items-end shrink-0">
      {socials.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          key={item.social}
          className=" leading-[0.6] not-italic text-secondary-100 text-[18px] md:text-[26px] text-right min-w-full relative shrink-0 w-min"
        >
          {item.social}
        </a>
      ))}
    </div>
  );
};
