import { Item } from './Item';
import { Sword } from './Sword';

export type ItemCategory = {
  id?: string;
  name: string;
  to: string;
  image: string;
  items: Item[];
};
