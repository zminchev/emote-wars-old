import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";
import Timer from "../../components/Work/Timer/Timer";
import WorkHours from "../../components/Work/WorkHours";
import { useWorkHours } from "../../queries/useWorkHours";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setTimerStatus } from "../../store/slices/timerSlice";
import { endAction } from "../../utils/endAction";
import { ActionType } from "../../utils/Actions/ActionType";
import { setActionType } from "../../store/slices/actionSlice";
import { setRewards } from "../../store/slices/rewardSlice";
import { TimerStatus } from "../../utils/TimerStatus/TimerStatus";
import { updateResources } from "../../utils/Resources/updateResources";
import { useUser } from "../../queries/useUser";
import { updateTimer } from "../../queries/updateTimer";

const Work = () => {
  const { data: session } = useSession();
  const { user, mutate } = useUser(session);
  const workHours = useWorkHours(session);
  const [workDuration, setWorkDuration] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const rewards = useAppSelector((state) => state.reward.reward);
  const timerStatus = useAppSelector((state) => state.timer.status);
  const actionType = useAppSelector((state) => state.action.actionType);
  const dispatch = useAppDispatch();

  const work = useCallback(
    (amount: number, id: number, duration: number) => {
      dispatch(setTimerStatus(TimerStatus.STARTED));
      dispatch(setActionType(ActionType.WORK));
      const timerData = {
        data: {
          timer: {
            startTime: Date.now().toString(),
            isWorking: true,
            hoursToWork: duration,
            activeHourId: id - 1,
            actionType: ActionType.WORK,
            hoursInSeconds: amount,
          },
        },
      };
      setWorkDuration(amount);
      mutate(updateTimer(timerData, user?.id!, session?.user.jwt!), {
        revalidate: true,
      });
    },
    [workDuration]
  );

  // const distributeRewards = () => {
  //   if (timerStatus === TimerStatus.STOPPED && rewards) {
  //     console.log("vleznah tuks");
  //     if (user && workHours) {
  //       const reward = endAction(
  //         actionType,
  //         workHours[user.timer.activeHourId].duration,
  //         user.level
  //       );
  //       dispatch(setRewards(reward!));
  //       mutate(updateResources(reward!, user!, actionType, session), {
  //         revalidate: true,
  //       });
  //       dispatch(setActionType(ActionType.NONE));
  //     }
  //   }
  // };

  // useEffect(() => {
  //   distributeRewards();
  // }, [rewards]);

  useEffect(() => {
    if (user) {
      if (user.timer.isWorking) {
        dispatch(setTimerStatus(TimerStatus.STARTED));
        dispatch(setActionType(ActionType.WORK));

        const startTime = new Date(+user.timer.startTime);
        const currentTime = Date.now();

        const elapsedTime = currentTime - startTime.getTime();
        const remainingTime = +user.timer.hoursInSeconds - elapsedTime / 1000;

        setTimeRemaining(Math.round(remainingTime));
      }
    }
  }, [user]);

  return (
    <Box
      maxW="full"
      w="100%"
      bgColor="blackAlpha.700"
      borderLeft="1px solid"
      borderColor="whiteAlpha.700"
      color="whiteAlpha.900"
    >
      <Heading textAlign="center" mt="10">
        Work
      </Heading>
      <Container
        maxW="full"
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box maxW="100%" w="40%" h="150px" mt="12">
          <Text textAlign="center">
            Go to work and get rewarded for it by receiving resources. The
            longer you work the more resources you get. Resources are used to
            purchase items from the shop, or trade with other players.
          </Text>
        </Box>
        <Heading textAlign="center">
          Choose how long you would like to work
        </Heading>
        <Box maxW="100%" w="100%" h="300px" mt="12" display="flex">
          {workHours && workHours.length > 0
            ? workHours.map((hours, index) => (
                <WorkHours
                  id={hours.id.toString()}
                  key={hours.id}
                  duration={hours.duration.toString()}
                  msDuration={hours.msDuration.toString()}
                  isDisabled={user ? user.timer.isWorking : false}
                  isActive={
                    user?.timer.isWorking === true &&
                    Number(user?.timer.activeHourId) === index
                      ? true
                      : false
                  }
                  onClick={() => {
                    work(hours.msDuration, hours.id, hours.duration);
                  }}
                />
              ))
            : null}
        </Box>
        {/* {workFinished &&
        timerStatus === TimerStatus.STOPPED &&
        rewards.length > 0 ? (
          <Text mt="4">
            You were rewarded with {rewards[0]} gold, {rewards[1]} wood,{" "}
            {rewards[2]} diamonds
          </Text>
        ) : null} */}
        {timerStatus === TimerStatus.STARTED ? (
          <Timer duration={timeRemaining ? timeRemaining : workDuration} />
        ) : null}
      </Container>
    </Box>
  );
};

export default Work;
