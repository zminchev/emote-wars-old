import { Box } from "@chakra-ui/react";
import React from "react";

interface PageProps {
  children: JSX.Element;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Box
      maxW="full"
      w="100%"
      bgColor="blackAlpha.700"
      borderLeft="1px solid"
      borderColor="whiteAlpha.700"
      color="whiteAlpha.900"
    >
      {children}
    </Box>
  );
};

export default Page;
