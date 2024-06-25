import { ComponentPropsWithoutRef } from "react";

const StartButton = ({
  color = "black",
  ...props
}: { color?: string } & ComponentPropsWithoutRef<"button">) => {
  return (
    <button {...props}>
      <svg
        fill={color}
        width="24px"
        height="24px"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(180)"
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
            d="M694.018 926.244c-27.296 18.796-27.3 49.269 0 68.067l509.836 351.074c27.296 18.797 49.424 7.18 49.424-25.959V601.13c0-33.133-22.125-44.757-49.424-25.959L694.018 926.244Z"
            fillRule="evenodd"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
};

export default StartButton;
