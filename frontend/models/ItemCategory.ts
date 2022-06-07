import { Sword } from "./Sword";

export type ItemCategory = {
  id: string;
  name: string;
  to: string;
  image: string;
  swords: Sword[];
};
