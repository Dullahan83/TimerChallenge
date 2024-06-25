import "./App.css";
import Countdown from "./component/Countdown";
import TimerControl from "./component/TimerControl";
import { useTimerStore } from "./component/store/useTimerStore";

function App() {
  const { timers } = useTimerStore();

  return (
    <>
      <TimerControl />
      <div className="px-4 py-8 flex flex-wrap gap-y-8 w-full">
        {timers.map((timer) => (
          <Countdown key={timer.id} timer={timer} />
        ))}
      </div>
    </>
  );
}

export default App;
