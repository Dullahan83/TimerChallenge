import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/function";

const Gauge = ({
  unit,
  offset,
  isCountdown = true,
  ...props
}: {
  unit: number;
  offset: number;
  isCountdown?: boolean;
} & ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      className={cn(" w-2/5 rounded-full ", props.className)}
      viewBox="0 0 120 120"
    >
      <path
        x={50}
        y={50}
        d="M50,95 A40,40 0 1,1 70,95"
        fill="none"
        stroke={`var(${isCountdown ? "--primary" : "--secondary"})`}
        strokeWidth={3}
      />
      <path
        d="M50,95 A40,40 0 1,1 70,95"
        fill="none"
        stroke={`var(${isCountdown ? "--secondary" : "--primary"})`}
        strokeWidth={3}
        strokeDasharray="calc(40 * 3.14159 * 1.85)"
        strokeDashoffset={offset}
      />
      <rect x={39} y={45} width={40} height={28} fill="black" rx={5}></rect>
      <text
        className="tracking-widest"
        x={52}
        y={60}
        textAnchor="middle"
        dy=".3em"
        stroke="white"
      >{`${unit.toString().padStart(2, "0")[0]}`}</text>
      <text
        className="tracking-widest"
        x={68}
        y={60}
        textAnchor="middle"
        dy=".3em"
        stroke="white"
      >{`${unit.toString().padStart(2, "0")[1]}`}</text>
    </svg>
  );
};

export default Gauge;
