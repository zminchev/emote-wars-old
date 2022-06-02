import useSWR from "swr";
import { User } from "../models/User";

export const useUser = (session: any) => {
  const { data, mutate } = useSWR<User>(
    session ? "http://localhost:1337/api/users/me" : null
  );
  return data;
};
