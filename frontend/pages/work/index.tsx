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
import useSWR from "swr";
import { useUser } from "../../queries/useUser";

const Work = () => {
  const { data: session } = useSession();
  const { user, mutate } = useUser(session);
  const workHours = useWorkHours(session);
  const [workDuration, setWorkDuration] = useState<number>(0);
  const [activeHoursId, setActiveHoursId] = useState<number>(0);
  const [workFinished, setWorkFinished] = useState<boolean>(false);

  const rewards = useAppSelector((state) => state.reward.reward);
  const timerStatus = useAppSelector((state) => state.timer.status);
  const actionType = useAppSelector((state) => state.action.actionType);
  const dispatch = useAppDispatch();

  const level = 150;

  const work = useCallback(
    (amount: number, id: number) => {
      dispatch(setTimerStatus(TimerStatus.STARTED));
      dispatch(setActionType(ActionType.WORK));
      setWorkDuration(2);
      setActiveHoursId(id);
    },
    [workDuration]
  );

  const distributeRewards = useCallback(() => {
    if (timerStatus === TimerStatus.STOPPED) {
      if (workHours && activeHoursId !== 0) {
        const reward = endAction(
          actionType,
          workHours[activeHoursId - 1].duration,
          level
        );
        mutate(updateResources(reward!, user!, actionType, session), {
          revalidate: true,
        });
        dispatch(setRewards(reward!));
        dispatch(setActionType(ActionType.NONE));
        setWorkFinished(true);
      }
    }
  }, [timerStatus, rewards]);
  useEffect(() => {
    distributeRewards();
  }, [timerStatus]);

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
                  isDisabled={timerStatus === TimerStatus.STARTED}
                  isActive={
                    timerStatus === TimerStatus.STARTED &&
                    activeHoursId === index + 1
                      ? true
                      : false
                  }
                  onClick={() => {
                    work(hours.msDuration, hours.id);
                  }}
                />
              ))
            : null}
        </Box>
        {/* {workFinished && timerStatus === TimerStatus.STOPPED ? (
          <Text mt="4">
            You were rewarded with {rewards[0]} gold, {rewards[1]} wood,{" "}
            {rewards[2]} diamonds
          </Text>
        ) : null} */}
        {timerStatus === TimerStatus.STARTED ? (
          <Timer duration={workDuration} />
        ) : null}
      </Container>
    </Box>
  );
};

export default Work;
