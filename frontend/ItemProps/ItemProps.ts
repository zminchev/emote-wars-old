import { Price } from "../models/Price";

export interface ItemProps {
  id: string;
  name: string;
  attack?: number;
  defense?: number;
  agility?: number;
  itemLevel: number;
  price: Price;
}
