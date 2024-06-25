import { ComponentPropsWithoutRef } from "react";

const AlarmIcon = ({
  width = "24px",
  height = "24px",
  ...props
}: {
  width?: string;
  height?: string;
} & ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>alarm-bell</title>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <g
            id="notification"
            fill="var(--primary)"
            transform="translate(64.000000, 42.666667)"
          >
            {" "}
            <path d="M234.666667,341.333333 C234.666667,364.897483 215.564149,384 192,384 C168.435851,384 149.333333,364.897483 149.333333,341.333333 L234.666667,341.333333 M192,7.10542736e-15 C109.44,7.10542736e-15 42.6666667,76.3733333 42.6666667,170.666667 L42.6666667,219.52 L1.42108547e-14,341.333333 L106.666667,341.333333 C106.666667,388.461632 144.871701,426.666667 192,426.666667 C239.128299,426.666667 277.333333,388.461632 277.333333,341.333333 L384,341.333333 L341.333333,219.52 L341.333333,176.853333 C341.333333,96 294.186667,21.9733333 225.066667,6.18666667 C214.336364,2.79014004 203.232451,0.712633806 192,7.10542736e-15 Z M60.16,298.666667 L82.9866667,234.666667 L85.3333333,226.773333 L85.3333333,170.666667 C85.3333333,100.053333 133.12,42.6665446 192,42.6665446 C199.693665,42.6542739 207.3598,43.5856735 214.826667,45.44 C262.613333,57.1733333 298.666667,113.28 298.666667,175.786667 L298.666667,226.773333 L301.013333,233.6 L323.84,298.666667 L60.16,298.666667 Z">
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export default AlarmIcon;
