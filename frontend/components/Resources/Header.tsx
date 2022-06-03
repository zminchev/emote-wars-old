import { Box, Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import useSWR from "swr";
import { useUser } from "../../queries/useUser";

import Resource from "./Resource";

const Header = () => {
  const { data: session } = useSession();
  const { user } = useUser(session);

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
      borderBottom="1px solid"
      borderColor="whiteAlpha.700"
    >
      <Heading ml="14" color="white">
        Emote Wars
      </Heading>
      <Box display="flex" gap={6} w="85%" justifyContent="center">
        <Resource
          name="Gold"
          value={user ? user.gold : 0}
          image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933196/resources/gold_coysi7.png"
        />
        <Resource
          name="Wood"
          value={user ? user.wood : 0}
          image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933195/resources/wood_zdkklt.png"
        />
        <Resource
          name="Food"
          value={user ? user.food : 0}
          image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933195/resources/food_xouuhs.png"
        />
        <Resource
          name="Diamonds"
          value={user ? user.diamonds : 0}
          image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933195/resources/diamond_brpl9a.png"
        />
      </Box>
    </Box>
  );
};

export default Header;
