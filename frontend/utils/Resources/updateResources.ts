import { User } from "../../models/User";
import { ActionType } from "../Actions/ActionType";

export const updateResources = async (
  reward: number[],
  user: User,
  actionType: ActionType,
  session: any
) => {
  if (user) {
    await fetch(`http://localhost:1337/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${session?.user.jwt}`,
      },
      body: JSON.stringify({
        gold: reward[0] + Number(user.gold),
        wood: reward[1] + Number(user.wood),
        diamonds: reward[2] + Number(user.diamonds),
      }),
    });
  }
  return user;
};
