import { Circle, Box, Text, Divider } from '@chakra-ui/react';
import React from 'react';
import ProgressBar from '../UI/ProgressBar';

export interface EmoteProps {
  name?: string;
  level?: number;
  experience?: number;
  experienceNeeded?: number;
  percentExperience?: string;
}

const Emote: React.FC<EmoteProps> = ({
  name,
  level,
  experience,
  experienceNeeded,
  percentExperience,
}) => {
  return (
    <Box
      maxW="full"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Circle bgColor="yellow" size="40" />
      <Box display="flex" alignItems="center" justifyContent="center" mt="4">
        <Text textAlign="center">{name}</Text>
        <Divider orientation="vertical" color="red" h="4" ml="2" mr="2" />
        <Text>{level}</Text>
      </Box>
      <Text textAlign="center">
        Experience: {experience} / {experienceNeeded}
      </Text>
      <Box display="flex" justifyContent="center">
        <ProgressBar
          type="experience"
          progress={percentExperience!}
          height="4"
        />
      </Box>
    </Box>
  );
};

export default Emote;
