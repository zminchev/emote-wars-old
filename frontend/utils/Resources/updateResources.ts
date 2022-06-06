import { User } from "../../models/User";
import { ActionType } from "../Actions/ActionType";

export const updateResources = async (
  reward: number[],
  user: User,
  actionType: ActionType,
  session: any
) => {
  if (user) {
    const workReward = {
      data: {
        gold: reward[0] + Number(user.gold),
        wood: reward[1] + Number(user.wood),
        diamonds: reward[2] + Number(user.diamonds),
        timer: {
          startTime: "0",
          isWorking: false,
          hoursToWork: 0,
          actionType: "NONE",
          activeHourId: 0,
          hoursInSeconds: 0,
        },
      },
    };
    const huntingReward = {
      data: {
        food: reward.length > 0 ? reward[0] + Number(user.food) : 0,
        timer: {
          startTime: "0",
          isWorking: false,
          hoursToWork: 0,
          actionType: "NONE",
          activeHourId: 0,
          hoursInSeconds: 0,
        },
      },
    };

    const response = await fetch(`http://localhost:1337/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${session?.user.jwt}`,
      },
      body: JSON.stringify(
        actionType === ActionType.WORK ? workReward : huntingReward
      ),
    });
    const data = await response.json();
    console.log(data);
  }
  return user;
};
