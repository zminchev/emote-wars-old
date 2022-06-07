import { ActionType } from "../utils/Actions/ActionType";

export type Timer = {
  id?: number;
  startTime: string;
  isWorking: boolean;
  hoursToWork: number;
  activeHourId: number;
  actionType: ActionType;
  hoursInSeconds: number;
};
