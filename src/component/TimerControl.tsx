import { useEffect, useState } from "react";
import { cn } from "../utils/function";
import { Timer } from "../utils/types";
import CircularTimer from "./CircularInput";
import useTimer from "./hooks/useTimer";
import { useTimerStore } from "./store/useTimerStore";

const TimerControl = () => {
  const { timer, isRunning, setTimerProps, resetTimer, stopTimer, startTimer } =
    useTimer();
  const { hours, minutes, seconds } = timer;
  const [open, setOpen] = useState(true);
  const { addNewtimer, timers } = useTimerStore();

  const isDisabled = hours === 0 && minutes === 0 && seconds === 0;

  const handleSetTimer = (value: number, key: keyof Timer) => {
    setTimerProps(value, key);
    stopTimer();
  };
  const handleClick = () => {
    addNewtimer(timer);
    startTimer();
    resetTimer();
    setOpen(false);
  };

  useEffect(() => {
    if (!timers.length) {
      setOpen(true);
    }
  }, [timers.length]);

  return (
    <>
      <header
        className={cn(
          "flex  max-sm:h-fit max-sm:w-full max-sm:justify-center  max-sm:rounded-b-lg max-sm:rounded-t-none  h-screen  w-[15vw]  min-w-44  bg-carbon rounded-r-3xl max-sm:border-b max-sm:border-r-0 border-r z-[100] sticky top-0 right-full items-center max-sm:py-3 py-8 shadow-2xl max-sm:transition-[margin,transform] max-sm:duration-150",
          {
            " max-sm:-translate-y-full max-sm:-mt-24": !open,
          }
        )}
      >
        <div className="max-sm:w-4/5 max-h-[800px]  h-full w-full flex max-sm:flex-row flex-col items-center justify-evenly">
          <div className=" flex max-sm:flex-row flex-col items-center max-sm:justify-evenly">
            <CircularTimer
              isRunning={isRunning}
              val={hours}
              setState={handleSetTimer}
              unit={"hours"}
              maxVal={23}
            />
            <CircularTimer
              isRunning={isRunning}
              val={minutes}
              setState={handleSetTimer}
              unit={"minutes"}
            />
            <CircularTimer
              isRunning={isRunning}
              val={seconds}
              setState={handleSetTimer}
              unit={"seconds"}
            />
          </div>
          <button
            className="max-sm:w-fit max-sm:tracking-normal horizontal-text max-sm:text-xs max-sm:py-1 max-sm:px-2  w-3/4 py-4 uppercase font-orbitron tracking-widest text-[var(--primary)] font-bold disabled:opacity-50 bg-black shadow-2xl"
            onClick={handleClick}
            disabled={isDisabled}
          >
            Launch
          </button>
        </div>
        <button
          className={cn(
            "absolute top-full mt-2 px-4 py-2 w-11/12 mx-auto font-orbitron uppercase text-[var(--primary)] max-sm:block hidden tracking-widest shadow-2xl bg-black",
            {
              "opacity-0 hidden invisible": open,
            }
          )}
          onClick={() => {
            setOpen(true);
          }}
        >
          Add a new timer
        </button>
      </header>
    </>
  );
};

export default TimerControl;
