import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { setTimerStatus } from "../../../store/slices/timerSlice";
import { twoDigits } from "../../../utils/twoDigits";
import useInterval from "../../../utils/useInterval";

export enum TimerStatus {
  STARTED = "STARTED",
  STOPPED = "STOPPED",
}
interface TimerProps {
  duration: number;
  timerStatus: TimerStatus;
}

const Timer: React.FC<TimerProps> = ({ duration, timerStatus }) => {
  const dispatch = useAppDispatch();
  const [secondsRemaining, setSecondsRemaining] = useState<number>(duration);
  const [status, setStatus] = useState<TimerStatus>(timerStatus);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(TimerStatus.STOPPED);
        dispatch(setTimerStatus(TimerStatus.STOPPED));
      }
    },
    status === TimerStatus.STARTED ? 1000 : null
  );

  useEffect(() => {
    setSecondsRemaining(duration);
  }, [duration]);
  useEffect(() => {
    setStatus(timerStatus);
  }, [timerStatus]);

  return (
    <Box mt="12">
      <Heading>
        Time left: {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
        {twoDigits(secondsToDisplay)}
      </Heading>
    </Box>
  );
};

export default Timer;
