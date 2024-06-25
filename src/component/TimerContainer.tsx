import { cn } from "../utils/function";
import PauseButton from "./buttons/PauseButton";
import ResetButton from "./buttons/ResetButton";
import StartButton from "./buttons/StartButton";
import useTimer from "./hooks/useTimer";

const TimerContainer = () => {
  const {
    hours,
    minutes,
    seconds,
    milliseconds,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
    direction,
  } = useTimer();

  return (
    <div className="font-orbitron mx-auto w-full sm:w-4/5 max-w-[900px]  items-center flex flex-col">
      <div className="w-full bg-[var(--background)] bg-[url('./real-carbon-fibre.png')] rounded-t-full border border-b-0 max-w-[500px] h-[250px] ">
        <div className="flex flex-col w-4/5 flex-1 mx-auto rounded-t-full relative">
          {/* <DigitalTimer Time={timer} /> */}
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
                strokeLinecap="round"
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
            <div className="flex gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+5px)]">
              <StartButton
                color="var(--primary)"
                className={cn("opacity-40", {
                  " opacity-100 animate-pulse": isRunning,
                })}
                onClick={startTimer}
              />
              <PauseButton
                color="var(--primary)"
                className={cn("opacity-40", {
                  "opacity-100 animate-pulse":
                    !isRunning &&
                    (milliseconds > 0 ||
                      seconds > 0 ||
                      minutes > 0 ||
                      hours > 0),
                })}
                onClick={stopTimer}
              />
              <ResetButton
                color="var(--primary)"
                className={cn("opacity-40", {
                  "": isRunning,
                })}
                onClick={resetTimer}
                disabled={isRunning}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-16 border max-w-[500px] rounded-b-[60px] bg-[var(--background)] bg-[url('./real-carbon-fibre.png')] border-t-0"></div>
    </div>
  );
};

export default TimerContainer;
