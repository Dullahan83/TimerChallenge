import CircularTimer from "./CircularInput";
import useTimer, { Timer } from "./hooks/useTimer";
import { useTimerStore } from "./store/useTimerStore";

const TimerControl = () => {
  const { timer, isRunning, setTimerProps, resetTimer, stopTimer, startTimer } =
    useTimer();
  const { hours, minutes, seconds } = timer;
  const { addNewtimer } = useTimerStore();
  const handleSetTimer = (value: number, key: keyof Timer) => {
    setTimerProps(value, key);
    stopTimer();
  };

  return (
    <header className="flex    h-screen  w-[15vw]  min-w-44   bg-[var(--background)]  bg-[url('./real-carbon-fibre.png')] rounded-r-3xl border z-20 sticky top-0 right-full items-center py-8">
      <div className="max-h-[800px] h-full w-full flex flex-col items-center justify-between">
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
        <button
          className="w-3/4 py-4 uppercase font-orbitron tracking-widest text-[var(--primary)] font-bold"
          onClick={() => {
            addNewtimer(timer);
            startTimer();
            resetTimer();
          }}
        >
          Launch
        </button>
      </div>
    </header>
  );
};

export default TimerControl;
