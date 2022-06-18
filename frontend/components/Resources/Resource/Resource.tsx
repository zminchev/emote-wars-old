import { Box, Square, Text } from "@chakra-ui/react";
import React from "react";

interface ResourceProps {
  name: string;
  value: number;
  image: string;
}

const Resource: React.FC<ResourceProps> = ({ value, image }) => {
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

export default Resource;
