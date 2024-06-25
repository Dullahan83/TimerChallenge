import { ComponentPropsWithoutRef } from "react";

const PauseButton = ({
  color = "black",
  ...props
}: { color?: string } & ComponentPropsWithoutRef<"button">) => {
  return (
    <button {...props}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M8 5V19M16 5V19"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
};

export default PauseButton;
