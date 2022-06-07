import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import {
  setTimerStatus,
  setSecondsRemaining,
} from "../../../store/slices/timerSlice";
import { twoDigits } from "../../../utils/twoDigits";
import useInterval from "../../../utils/useInterval";
import { TimerStatus } from "../../../utils/TimerStatus/TimerStatus";

interface TimerProps {
  duration: number;
}

const Timer: React.FC<TimerProps> = ({ duration }) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.timer.status);
  const [secondsRemaining, setSecondssRemaining] = useState<number>(duration);
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondssRemaining(secondsRemaining - 1);
        dispatch(setSecondsRemaining(secondsRemaining - 1));
      } else {
        dispatch(setTimerStatus(TimerStatus.FINISHED));
      }
    },
    status === TimerStatus.STARTED ? 1000 : null
  );

  useEffect(() => {
    setSecondssRemaining(duration);
  }, [duration]);

  return (
    <Box mt="6">
      <Heading>
        Time left: {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
        {twoDigits(secondsToDisplay)}
      </Heading>
    </Box>
  );
};

export default Timer;
