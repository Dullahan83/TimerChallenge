import { cn } from "../../utils/function";
import AlarmIcon from "../AlarmIcon";
import PauseButton from "../buttons/PauseButton";
import ResetButton from "../buttons/ResetButton";
import StartButton from "../buttons/StartButton";
import useSoundTimer from "../hooks/useSoundTimer";
import { TimerStoreType } from "../store/useTimerStore";

const CountdownMenu = ({
  Timer,
  isRunning,
  startTimer,
  stopTimer,
  isOver,
  resetTimer,
  removeTimer,
}: {
  Timer: TimerStoreType;
  isRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  isOver: boolean;
  resetTimer: () => void;
  removeTimer: (id: string) => void;
}) => {
  const { playSound } = useSoundTimer();
  return (
    <div className="absolute w-[45%] rounded-3xl translate-y-1/3 bg-[var(--background)] bg-carbon border  bottom-0 flex items-center min-h-16 max-lg:px-2 px-3 justify-between z-50 shadow-[0_10px_5px_-3px_#000,0_-3px_0_0_var(--secondary),0_-4px_10px_0_#000,inset_0_5px_10px_0_#000]">
      {isRunning ? (
        <PauseButton
          color="var(--primary)"
          onClick={stopTimer}
          disabled={isOver}
          className={cn("bg-black", {
            hidden: isOver,
          })}
        />
      ) : (
        <StartButton
          disabled={isOver}
          className={cn("bg-black", {
            hidden: isOver,
          })}
          color="var(--primary)"
          onClick={startTimer}
        />
      )}
      {isOver && <AlarmIcon className=" animate-wiggle" />}
      <div className="bg-black px-2 py-1 rounded-lg">
        <p
          className={cn("text-lg max-lg:text-xs", {
            "text-red-600 animate-pulse": isOver,
          })}
        >
          {Timer.endTime}
        </p>
      </div>
      <ResetButton
        color="var(--primary)"
        onClick={() => {
          removeTimer(Timer.id);
          resetTimer();
          playSound("gacha", 0);
        }}
        disabled={isRunning}
        className="bg-black disabled:opacity-50"
      />
    </div>
  );
};

export default CountdownMenu;
