import { Timer } from './Timer';
import { Role } from './Role';

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
  timer: Timer;
  level: number;
  experience?: number;
};
