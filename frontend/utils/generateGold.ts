import { randomMultiplier } from "./randomMultiplier";

export const generateGold = (duration: number, level: number) => {
  const multiplier = randomMultiplier(10.5, 15.5);
  const gold = duration * level * Number(multiplier);
  return Math.round(gold);
};
