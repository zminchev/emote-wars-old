import { ItemCategory } from "./ItemCategory";
import { Price } from "./Price";

export type Item = {
  id: string;
  name: string;
  image: string;
  attack?: number;
  defense?: number;
  agility?: number;
  itemLevel: number;
  price: Price;
  item_category: ItemCategory;
};
