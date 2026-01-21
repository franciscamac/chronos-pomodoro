import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  durationInMinutes: number;
  startDate: number;
  completedDate: number | null; //quando time chega ao final
  interruptedDate: number | null; //quando o user interrompe a task
  type: keyof TaskStateModel['config'];
};
