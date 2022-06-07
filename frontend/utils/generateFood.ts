import { randomMultiplier } from "./randomMultiplier";

export const generateFood = (duration: number, level: number) => {
  const multiplier = randomMultiplier(10.5, 15.5);
  const food = duration * level * Number(multiplier);
  return Math.round(food);
};
