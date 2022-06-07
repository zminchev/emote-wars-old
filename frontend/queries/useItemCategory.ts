import useSWR from "swr";
import { ItemCategory } from "../models/ItemCategory";

export const useItemCategory = (id: string | string[]) => {
  const { data } = useSWR<ItemCategory>(
    `http://localhost:1337/api/item-categories/${id}`
  );

  return {
    category: data,
  };
};
