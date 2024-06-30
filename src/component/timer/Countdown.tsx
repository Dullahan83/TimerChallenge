import { useEffect } from "react";
import useTimer from "../hooks/useTimer";
import { TimerStoreType, useTimerStore } from "../store/useTimerStore";
import CountdownMenu from "./CountdownMenu";
import Gauge from "./Gauge";

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
    isCountdown,
  } = useTimer();
  const { removeTimer } = useTimerStore();
  const { hours, minutes, seconds, milliseconds } = timer;

  useEffect(() => {
    if (isRunning) return;
    setNewTimer(Timer.timer);
  }, []);

  return (
    <div className="font-orbitron mx-auto w-full max-lg:max-w-[350px] sm:w-4/5 max-w-[450px] h-fit  items-center flex flex-col relative ">
      <div className="w-full bg-[var(--background)] bg-carbon rounded-t-full   max-w-[500px] max-lg:h-[190px] h-[32cqw] max-h-[250px] relative shadow-[0_-20px_0_0_var(--secondary),0_0px_0_1px_var(--secondary),inset_0_15px_10px_0_#000,0_-25px_15px_-1px_#000]">
        <div className="flex flex-col w-full flex-1 mx-auto rounded-t-full relative z-30">
          <div className="flex rounded-full items-center justify-center ">
            <Gauge
              unit={minutes}
              offset={+`${direction}${(minutes + seconds / 60) * 3.85}`}
              isCountdown={isCountdown}
            />
          </div>
          <div className="flex  justify-between absolute top-full -translate-y-1/4">
            <Gauge
              unit={hours}
              offset={+`${direction}${(hours + minutes / 60) * 9.6}`}
              isCountdown={isCountdown}
            />

            <Gauge
              unit={seconds}
              offset={+`${direction}${(milliseconds / 100 + seconds) * 3.85}`}
              isCountdown={isCountdown}
            />
            <Gauge
              unit={milliseconds}
              offset={+`${direction}${milliseconds * 2.4}`}
              className=" w-1/5 absolute left-1/2 bottom-0 -translate-y-[calc(50%+10px)] -translate-x-1/2"
              isCountdown={isCountdown}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-16 border max-w-[500px] rounded-b-[60px] bg-[var(--background)] bg-carbon border-t-0 shadow-[0_10px_10px_-5px_#000,0_3px_0_0_var(--secondary),0_3px_0_1px_var(--secondary),inset_0_-5px_5px_0_#000] z-10"></div>

      <CountdownMenu
        Timer={Timer}
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        isOver={isOver}
        resetTimer={resetTimer}
        removeTimer={removeTimer}
      />

      <div className=" absolute top-full left-[15%] -z-0 w-0 h-0 -skew-x-[45deg]  border-t-[var(--secondary)] border-t-[40px] border-l-[10px] border-r-[10px] rounded-br-full border-x-transparent " />
      <div className=" absolute top-full right-[15%] -z-0 w-0 h-0 skew-x-[45deg]  border-t-[var(--secondary)] border-t-[40px] border-l-[10px] border-r-[10px] rounded-br-full border-x-transparent  " />
    </div>
  );
};

export default Countdown;
