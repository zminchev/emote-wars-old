import React from 'react';
import { Box } from '@chakra-ui/react';

interface ProgressBarProps {
  type: 'stats' | 'experience';
  progress: number;
  height: string | number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  type,
  progress,
  height,
}) => {
  return (
    <Box w="200px" border="1px solid" borderColor="black">
      <Box
        h={height}
        w={`${progress}%`}
        bgColor={type === 'stats' ? 'darkred' : 'orange'}
      />
    </Box>
  );
};

export default ProgressBar;
