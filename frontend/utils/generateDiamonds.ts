import { randomMultiplier } from "./randomMultiplier";

export const generateDiamonds = (duration: number) => {
  const multiplier = randomMultiplier(0.5, 0.9);
  const diamonds = duration * Number(multiplier);
  return Math.round(diamonds);
};
