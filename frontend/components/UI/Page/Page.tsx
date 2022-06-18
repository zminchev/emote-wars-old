import { Box } from "@chakra-ui/react";
import React from "react";

interface PageProps {
  overflow?: string;
  children: JSX.Element;
}

const Page: React.FC<PageProps> = ({ overflow, children }) => {
  return (
    <Box
      maxW="full"
      w="100%"
      bgColor="blackAlpha.700"
      borderLeft="1px solid"
      borderColor="whiteAlpha.700"
      color="whiteAlpha.900"
      overflow={overflow ? overflow : undefined}
    >
      {children}
    </Box>
  );
};

export default Page;
