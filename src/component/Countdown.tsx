import { useEffect } from "react";
import { cn } from "../utils/function";
import PauseButton from "./buttons/PauseButton";
import ResetButton from "./buttons/ResetButton";
import StartButton from "./buttons/StartButton";
import useTimer from "./hooks/useTimer";
import useSoundTimer from "./store/useSoundTimer";
import { TimerStoreType, useTimerStore } from "./store/useTimerStore";

const Countdown = ({ timer: Timer }: { timer: TimerStoreType }) => {
  const {
    timer,
    isRunning,
    startTimer,
    stopTimer,
    setNewTimer,
    direction,
    resetTimer,
    isOver,
  } = useTimer();
  const { removeTimer } = useTimerStore();
  const { playSound } = useSoundTimer();
  const { hours, minutes, seconds, milliseconds } = timer;

  useEffect(() => {
    if (isRunning) return;
    setNewTimer(Timer.timer);
  }, []);

  return (
    <div className="font-orbitron mx-auto w-full sm:w-4/5 max-w-[450px] h-fit  items-center flex flex-col relative">
      <div className="w-full bg-[var(--background)] bg-[url('./real-carbon-fibre.png')] rounded-t-full  border border-b-0 max-w-[500px] h-[250px] relative ">
        {/* <AlarmIcon
          width="24px"
          height="24px"
          className="absolute top-[25%] left-[15%]"
        /> */}
        <div className="flex flex-col w-full flex-1 mx-auto rounded-t-full relative ">
          <div className="flex rounded-full items-center justify-center ">
            <svg className=" w-2/5 rounded-full" viewBox="0 0 120 120">
              <path
                x={50}
                y={50}
                className=""
                d="M50,95 A40,40 0 1,1 70,95"
                fill="none"
                stroke="var(--primary)"
                strokeWidth={3}
              />
              <path
                className=" transition-colors bg-[#0000009f]"
                d="M50,95 A40,40 0 1,1 70,95"
                fill="none"
                stroke="var(--secondary)"
                strokeWidth={3}
                strokeDasharray="calc(40 * 3.14159 * 1.84)"
                strokeDashoffset={`${direction}${
                  (minutes + seconds / 60) * 3.85
                }`}
              />

              <text
                className="tracking-widest"
                x={60}
                y={55}
                textAnchor="middle"
                dy=".3em"
                stroke="white"
              >{`${minutes.toString().padStart(2, "0")}`}</text>
              {/* -(milliseconds / 100 + seconds) * 3.85*/}
            </svg>
          </div>
          <div className="flex  justify-between absolute top-full -translate-y-1/4">
            <svg className=" w-2/5 rounded-full" viewBox="0 0 120 120">
              <path
                x={50}
                y={50}
                className="rounded-full"
                d="M50,95 A40,40 0 1,1 70,95"
                fill="none"
                stroke="var(--primary)"
                strokeWidth={3}
              />
              <path
                className=" transition-colors"
                d="M50,95 A40,40 0 1,1 70,95"
                fill="none"
                stroke="var(--secondary)"
                strokeWidth={3}
                strokeDasharray="calc(40 * 3.14159 * 1.84)"
                strokeDashoffset={-(hours + minutes / 60) * 9.6}
              />
              <text
                className="tracking-widest"
                x={60}
                y={55}
                textAnchor="middle"
                dy=".3em"
                stroke="white"
              >{`${hours.toString().padStart(2, "0")}`}</text>
              {/* -(milliseconds / 100 + seconds) * 3.85*/}
            </svg>
            <svg className=" w-2/5 rounded-full" viewBox="0 0 120 120">
              <path
                x={50}
                y={50}
                className=""
                d="M50,95 A40,40 0 1,1 70,95"
                fill="none"
                stroke="var(--primary)"
                strokeWidth={3}
              />
              <path
                className=" transition-colors"
                d="M50,95 A40,40 0 1,1 70,95"
                fill="none"
                stroke="var(--secondary)"
                strokeWidth={3}
                strokeDasharray="calc(40 * 3.14159 * 1.85)"
                strokeDashoffset={-(milliseconds / 100 + seconds) * 3.85}
              />
              <text
                className="tracking-widest"
                x={60}
                y={55}
                textAnchor="middle"
                dy=".3em"
                stroke="white"
              >{`${seconds.toString().padStart(2, "0")}`}</text>
              {/* -(milliseconds / 100 + seconds) * 3.85*/}
            </svg>
            <svg
              className=" w-1/5 absolute left-1/2 bottom-0 -translate-y-[calc(50%+10px)] -translate-x-1/2"
              viewBox="0 0 120 120"
            >
              <path
                x={50}
                y={50}
                r={360}
                className=""
                d="M50,95 A40,40 0 1,1 70,95"
                fill="none"
                stroke="var(--primary)"
                strokeWidth={3}
              />
              <path
                className=" transition-colors"
                d="M50,95 A40,40 0 1,1 70,95"
                fill="none"
                stroke="var(--secondary)"
                strokeWidth={3}
                strokeDasharray="calc(40 * 3.14159 * 1.85)"
                // strokeDasharray={"0,5"}
                strokeDashoffset={-milliseconds * 2.4}
              />
              <text
                className="tracking-widest"
                x={60}
                y={55}
                textAnchor="middle"
                dy=".3em"
                stroke="white"
              >{`${milliseconds.toString().padStart(2, "0")}`}</text>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full h-16 border max-w-[500px] rounded-b-[60px] bg-[var(--background)] bg-[url('./real-carbon-fibre.png')] border-t-0"></div>
      <div className="absolute w-[45%] rounded-3xl translate-y-1/3 bg-[var(--background)] bg-[url('./real-carbon-fibre.png')] border  bottom-0 flex items-center min-h-16 px-4 justify-between z-10">
        {isRunning ? (
          <PauseButton color="var(--primary)" onClick={stopTimer} />
        ) : (
          <StartButton color="var(--primary)" onClick={startTimer} />
        )}
        <p className={cn("text-lg", { "text-red-600 animate-pulse": isOver })}>
          {Timer.endTime}
        </p>
        <ResetButton
          color="var(--primary)"
          onClick={() => {
            removeTimer(Timer.id);
            resetTimer();
            playSound("gacha", 0);
          }}
          disabled={isRunning}
        />
      </div>

      <div className=" absolute top-full left-[15%] z-0 w-0 h-0 -skew-x-[45deg]  border-t-[var(--secondary)] border-t-[40px] border-l-[10px] border-r-[10px] rounded-br-full border-x-transparent  " />
      <div className=" absolute top-full right-[15%] z-0 w-0 h-0 skew-x-[45deg]  border-t-[var(--secondary)] border-t-[40px] border-l-[10px] border-r-[10px] rounded-br-full border-x-transparent  " />
    </div>
  );
};

export default Countdown;
