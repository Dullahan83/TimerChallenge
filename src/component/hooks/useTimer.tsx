import { useEffect, useState } from "react";
import { Timer } from "../../utils/types";
import useSoundTimer from "./useSoundTimer";

const defaultTimer: Timer = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
};
const useTimer = () => {
  const [timer, setTimer] = useState(defaultTimer);
  const [isRunning, setIsRunning] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const { playSound, stopSoundPlaying } = useSoundTimer();

  const isCountdown = true;
  const direction = isCountdown ? "-" : "+";

  const startTimer = () => {
    if (
      isCountdown &&
      timer.days === 0 &&
      timer.hours === 0 &&
      timer.minutes === 0 &&
      timer.seconds === 0 &&
      timer.milliseconds === 0
    ) {
      return;
    }
    setIsRunning(true);
  };
  const setNewTimer = (timer: Timer) => {
    setTimer(timer);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimer({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    stopSoundPlaying();
  };

  const setTimerProps = (value: number, key: keyof Timer) => {
    setTimer((prev) => {
      return { ...prev, [key]: value };
    });
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          let { days, hours, minutes, seconds, milliseconds } = prev;

          milliseconds -= 1;
          if (milliseconds === -1) {
            seconds -= 1;
            milliseconds = 99;
          }
          if (seconds === -1) {
            minutes -= 1;
            seconds = 59;
          }
          if (minutes === -1) {
            hours -= 1;
            minutes = 59;
          }
          if (hours === -1) {
            days -= 1;
            hours = 23;
          }
          if (
            days === 0 &&
            hours === 0 &&
            minutes === 0 &&
            seconds === 0 &&
            milliseconds === 0
          ) {
            stopTimer();
            setIsOver(true);
            playSound("transponder_snail", 0);
          }

          return { days, hours, minutes, seconds, milliseconds };
        });
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isRunning]);
  return {
    timer,
    isOver,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
    direction,
    setTimerProps,
    setNewTimer,
    isCountdown,
  };
};

export default useTimer;
