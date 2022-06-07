import useSWR from "swr";
import { ItemCategory } from "../models/ItemCategory";

export const useItemCategories = (session: any) => {
  const { data } = useSWR<ItemCategory[]>(
    session ? "http://localhost:1337/api/item-categories" : null
  );

  return {
    categories: data,
  };
};
