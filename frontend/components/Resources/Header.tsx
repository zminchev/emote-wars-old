import { Box, Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import { useResources } from "../../queries/useResources";
import Resource from "./Resource";

const Header = () => {
  const { data: session } = useSession();
  const resources = useResources(session);

  return (
    <Box
      maxW="full"
      w="100%"
      h="100px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgColor="blackAlpha.700"
      gap={7}
    >
      <Heading ml="14" color="white">
        Emote Wars
      </Heading>
      <Box display="flex" gap={6} w="85%" justifyContent="center">
        {resources && resources.length > 0
          ? resources?.map((resource) => (
              <Resource
                key={resource.id}
                name={resource.name}
                value={resource.value}
                image={resource.image}
              />
            ))
          : null}
      </Box>
    </Box>
  );
};

export default Header;
