import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";
import Timer from "../../components/Work/Timer/Timer";
import WorkHours from "../../components/Work/WorkHours";
import { useWorkHours } from "../../queries/useWorkHours";
import { TimerStatus } from "../../components/Work/Timer/Timer";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setTimerStatus } from "../../store/slices/timerSlice";

const Work = () => {
  const { data: session } = useSession();
  const workHours = useWorkHours(session);
  const [workDuration, setWorkDuration] = useState<number>(0);
  const [status, setStatus] = useState<TimerStatus>(TimerStatus.STOPPED);
  const [activeHoursId, setActiveHoursId] = useState<number>(0);
  const timerStatus = useAppSelector((state) => state.timer.status);
  const dispatch = useAppDispatch();

  const work = useCallback(
    (amount: number, id: number) => {
      setWorkDuration(2);
      setStatus(TimerStatus.STARTED);
      setActiveHoursId(id);
      dispatch(setTimerStatus(TimerStatus.STARTED));
    },
    [workDuration]
  );

  useEffect(() => {
    if (timerStatus.STARTED === "STARTED") {
      console.log("start");
    } else {
      console.log("stop");
    }
    // setStatus(timerStatus);
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
                  approximateResources={hours.reward.toString()}
                  isDisabled={status === TimerStatus.STARTED}
                  isActive={activeHoursId === index + 1 ? true : false}
                  onClick={() => {
                    work(hours.msDuration, hours.id);
                  }}
                />
              ))
            : null}
        </Box>
        <Timer duration={workDuration} timerStatus={status} />
      </Container>
    </Box>
  );
};

export default Work;
