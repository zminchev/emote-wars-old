import { ActionType } from "./Actions/ActionType";
import { chanceForDiamonds } from "./chanceForDiamonds";
import { generateDiamonds } from "./generateDiamonds";
import { generateFood } from "./generateFood";
import { generateGold } from "./generateGold";
import { generateWood } from "./generateWood";

export const endAction = (
  actionType: ActionType,
  duration: number,
  playerLevel: number
) => {
  let gold, wood, food;
  let diamonds = 0;
  switch (actionType) {
    case ActionType.WORK:
      gold = generateGold(duration, playerLevel);
      wood = generateWood(duration, playerLevel);
      if (chanceForDiamonds() >= 9.5) {
        diamonds = generateDiamonds(duration);
      }

      return [gold, wood, diamonds];

    case ActionType.HUNTING:
      food = generateFood(duration, playerLevel);
      return [food];
    default:
      return;
  }
};
