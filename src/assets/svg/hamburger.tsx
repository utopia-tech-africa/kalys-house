export const Hamburger = ({ color = "#F5FCFF" }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.20544 9.5H18.2054"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5.79456 14.5H21.7946"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
