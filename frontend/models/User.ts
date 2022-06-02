import { Resource } from "./Resource";
import { Role } from "./Role";

export type User = {
  id?: number;
  username: string;
  email: string;
  provider?: string;
  gold: number;
  wood: number;
  diamonds: number;
  food: number;
  role: Role;
};
