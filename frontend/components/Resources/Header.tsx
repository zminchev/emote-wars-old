import { Box, Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useAppSelector } from "../../store/hooks/hooks";
import { ActionType } from "../../utils/Actions/ActionType";
import { TimerStatus } from "../../utils/TimerStatus/TimerStatus";
import Resource from "./Resource";

const Header = () => {
  const { data: session } = useSession();
  const { data: user, mutate } = useSWR<any>(
    "http://localhost:1337/api/users-permissions/user/findMe"
  );

  const timerStatus = useAppSelector((state) => state.timer.status);
  const reward = useAppSelector((state) => state.reward.reward);
  const actionType = useAppSelector((state) => state.action.actionType);

  const updateResources = async () => {
    if (user) {
      const workReward = {
        gold: reward[0] + Number(user.gold),
        wood: reward[1] + Number(user.wood),
        diamonds: reward[2] + Number(user.diamonds),
      };
      const huntingReward = {
        food: reward[0] + Number(user.food),
      };

      await fetch(`http://localhost:1337/api/users/${user.id}`, {
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
    }
  };

  useEffect(() => {
    if (timerStatus === TimerStatus.STOPPED) {
      if (user) {
        mutate(updateResources(), { revalidate: true });
      }
    }
  }, [timerStatus]);

  return (
    <Box
      maxW="full"
      w="100%"
      h="100px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgColor="blackAlpha.700"
      gap={7}
      borderBottom="1px solid"
      borderColor="whiteAlpha.700"
    >
      <Heading ml="14" color="white">
        Emote Wars
      </Heading>
      <Box display="flex" gap={6} w="85%" justifyContent="center">
        <Resource
          name="Gold"
          value={user ? user.gold : 0}
          image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933196/resources/gold_coysi7.png"
        />
        <Resource
          name="Wood"
          value={user ? user.wood : 0}
          image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933195/resources/wood_zdkklt.png"
        />
        <Resource
          name="Food"
          value={user ? user.food : 0}
          image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933195/resources/food_xouuhs.png"
        />
        <Resource
          name="Diamonds"
          value={user ? user.diamonds : 0}
          image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933195/resources/diamond_brpl9a.png"
        />
      </Box>
    </Box>
  );
};

export default Header;
