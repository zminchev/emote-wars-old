import { Box, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { NavItem } from "../../models/NavItem";

const Navbar = () => {
  const { data: session } = useSession();
  const { data } = useSWR(
    session ? "http://localhost:1337/api/nav-items" : null
  );

  return (
    <Box
      ml="5"
      display="flex"
      flexDirection="column"
      bgColor="blackAlpha.700"
      color="white"
      alignItems="center"
      maxW="full"
      w="300px"
    >
      {data
        ? data.map((navItem: NavItem, index: number) => (
            <Text
              key={navItem.id}
              textAlign="center"
              mt={index === 0 ? "24" : "3"}
              mb="3"
              w="full"
            >
              <Link href={navItem.to}>{navItem.title}</Link>
            </Text>
          ))
        : null}
    </Box>
  );
};

export default Navbar;
