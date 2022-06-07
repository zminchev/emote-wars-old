import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../UI/Card";

interface WorkHoursProps {
  id: string;
  duration: string;
  msDuration: string;
  isDisabled: boolean;
  isActive: boolean;
  onClick: () => void;
}

const WorkHours: React.FC<WorkHoursProps> = ({
  id,
  duration,
  isDisabled,
  isActive,
  onClick,
}) => {
  return (
    <Card id={id} isDisabled={isDisabled} isActive={isActive} onClick={onClick}>
      <Center h="100%">
        <Box display="flex" flexDirection="column" textAlign="center">
          <Heading>{duration} hours</Heading>
        </Box>
      </Center>
    </Card>
  );
};

export default WorkHours;
