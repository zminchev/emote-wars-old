import useSWR from "swr";
import { Resource } from "../models/Resource";

export const useResources = () => {
  const { data } = useSWR<Resource[]>("http://localhost:1337/api/resources");
  return data;
};
