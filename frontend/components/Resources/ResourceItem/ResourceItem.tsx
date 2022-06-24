import { Box, Square, Text } from '@chakra-ui/react';
import React from 'react';

interface ResourceItemProps {
  name: string;
  value: number | undefined;
  image: string;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ value, image }) => {
  return (
    <Box color="white">
      <Square
        size="16"
        border="3px solid"
        borderColor="blackAlpha.900"
        borderRadius={5}
        bgImage={image}
        bgSize="cover"
        overflow="hidden"
      />
      <Text textAlign="center">{value}</Text>
    </Box>
  );
};

export default ResourceItem;
