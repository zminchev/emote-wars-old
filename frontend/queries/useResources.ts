import useSWR from "swr";
import { Resource } from "../models/Resource";

export const useResources = (session: any) => {
  const { data } = useSWR<Resource[]>(
    session ? "http://localhost:1337/api/resources" : null
  );
  return data;
};
