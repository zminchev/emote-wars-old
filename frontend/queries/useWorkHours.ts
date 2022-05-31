import useSWR from "swr";
import { WorkHour } from "../models/WorkHour";

export const useWorkHours = (session: any) => {
  const { data } = useSWR<WorkHour[]>(
    session ? "http://localhost:1337/api/working-hours" : null
  );
  return data;
};
