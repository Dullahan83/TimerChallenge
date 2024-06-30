import "./App.css";
import TimerControl from "./component/TimerControl";
import { useTimerStore } from "./component/store/useTimerStore";
import Countdown from "./component/timer/Countdown";

function App() {
  const { timers } = useTimerStore();

  return (
    <>
      <TimerControl />
      <div className="px-4 py-20 flex flex-wrap gap-y-28 gap-x-4 w-full  items-center  max-sm:flex-1">
        {timers.length ? (
          timers.map((timer) => <Countdown key={timer.id} timer={timer} />)
        ) : (
          <div className="text-2xl text-center w-full text-white font-orbitron tracking-widest self-center">
            You didn't set any timer yet.
            <br />
            To set a new timer, use the control panel.
            <br />
            You can set multiple timers at once.
          </div>
        )}
      </div>
    </>
  );
}

export default App;
