import useSWR from "swr";
import { Item } from "../models/Item";

export const useItem = (itemId: string) => {
  const { data } = useSWR<Item>(
    itemId ? `http://localhost:1337/api/items/${itemId}` : null
  );

  return {
    item: data,
  };
};
