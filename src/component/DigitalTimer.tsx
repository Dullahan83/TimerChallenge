import { Timer } from "./hooks/useTimer";

const DigitalTimer = ({ Time }: { Time: Timer }) => {
  return (
    <div className=" min-w-28">
      {Time.hours.toString().padStart(2, "0")}:
      {Time.minutes.toString().padStart(2, "0")}:
      {Time.seconds.toString().padStart(2, "0")}
    </div>
  );
};

export default DigitalTimer;
