import { z } from "zod";

const TimerSchema = z.object({
  days: z.number(),
  hours: z.number(),
  minutes: z.number(),
  seconds: z.number(),
  milliseconds: z.number(),
});

export type Timer = z.infer<typeof TimerSchema>;
