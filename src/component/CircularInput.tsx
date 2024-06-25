import { useEffect, useState } from "react";
import {
  CircularInput,
  CircularProgress,
  CircularThumb,
  CircularTrack,
} from "react-circular-input";
import { Timer } from "./hooks/useTimer";

const CircularTimer = ({
  val,
  maxVal = 59,
  setState,
  unit,
  isRunning,
}: {
  val: number;
  maxVal?: number;
  unit: keyof Timer;
  isRunning: boolean;
  setState: (value: number, key: keyof Timer) => void;
}) => {
  const [value, setValue] = useState(val);

  const stepValue = (v: number) => Math.round(v * 100) / 100;

  const units = {
    days: "d",
    hours: "h",
    minutes: "m",
    seconds: "s",
    milliseconds: "ms",
  };

  useEffect(() => {
    if (val === 0) setValue(0);
  }, [val]);

  return (
    <CircularInput
      className="w-2/4 min-w-[120px]"
      value={stepValue(value)}
      onChange={(v) => {
        if (isRunning) return;
        setValue(v);
        const newVal = Math.floor((stepValue(v) * 100) / (100 / maxVal));
        setState(newVal, unit);
      }}
      speed={"snail"}
    >
      <CircularTrack />
      <CircularProgress className="stroke-[var(--primary)]" />
      <CircularThumb className="hover:cursor-grab fill-[#00bbff]" />

      <text
        x={100}
        y={100}
        textAnchor="middle"
        dy="0.3em"
        fontWeight="bold"
        className="text-white text-[350%] font-orbitron"
        fill="white"
      >
        {Math.round(stepValue(val))}
        {units[unit]}
      </text>
    </CircularInput>
  );
};

export default CircularTimer;
