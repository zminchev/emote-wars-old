import { randomMultiplier } from "./randomMultiplier";

export const generateWood = (duration: number, level: number) => {
  const multiplier = randomMultiplier(10.5, 15.5);
  const wood = duration * level * Number(multiplier);
  return Math.round(wood);
};
