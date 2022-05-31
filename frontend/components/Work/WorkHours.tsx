import { Box, Center, Heading, ResponsiveValue, Text } from "@chakra-ui/react";
import React from "react";

interface WorkHoursProps {
  id: string;
  duration: string;
  msDuration: string;
  approximateResources: string;
  isDisabled: boolean;
  isActive: boolean;
  onClick: () => void;
}

const WorkHours: React.FC<WorkHoursProps> = ({
  id,
  duration,
  approximateResources,
  isDisabled,
  isActive,
  onClick,
}) => {
  return (
    <Box
      pointerEvents={isDisabled ? "none" : "auto"}
      opacity={isDisabled ? "0.5" : "1"}
      w="25%"
      h="100%"
      mr="1"
      border="1px solid"
      borderColor={isActive ? "whiteAlpha.900" : "whiteAlpha.600"}
      bgColor={isActive ? "blackAlpha.300" : ""}
      borderRadius="6"
      _hover={{ cursor: "pointer", backgroundColor: "blackAlpha.200" }}
      onClick={onClick}
      id={id}
    >
      <Center h="100%">
        <Box display="flex" flexDirection="column" textAlign="center">
          <Heading>{duration} hours</Heading>
          <Text mt="20">Approximate resources: {approximateResources}</Text>
        </Box>
      </Center>
    </Box>
  );
};

export default WorkHours;
