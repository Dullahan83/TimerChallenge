import { createId } from "@paralleldrive/cuid2";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Timer } from "../../utils/types";

export type TimerStoreType = {
  isPaused: boolean;
  id: string;
  endTime: string;
} & {
  timer: Timer;
};

type State = {
  timers: TimerStoreType[];
};

type Actions = {
  addNewtimer: (timer: Timer) => void;
  removeTimer: (timerId: TimerStoreType["id"]) => void;
};

export const useTimerStore = create<State & Actions>()(
  immer((set) => ({
    timers: [],
    addNewtimer: (timer) => {
      set((state) => {
        const timerInMs =
          timer.days * 24 * 60 * 60 * 1000 +
          timer.hours * 60 * 60 * 1000 +
          timer.minutes * 60 * 1000 +
          timer.seconds * 1000 +
          timer.milliseconds;
        const end = Date.now() + timerInMs;

        state.timers.push({
          timer: { ...timer },
          isPaused: false,
          id: createId(),
          endTime: new Date(end).toLocaleTimeString("fr-FR"),
        });
      });
    },

    removeTimer: (timerId) => {
      set((state) => {
        state.timers = state.timers.filter((t) => t.id !== timerId);
      });
    },
  }))
);
