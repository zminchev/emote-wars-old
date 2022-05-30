import { Box, Button, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { NavItem } from "../../models/NavItem";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const { data } = useSWR(
    session ? "http://localhost:1337/api/nav-items" : null
  );

  return (
    <Box
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
            <Link href={navItem.to} key={navItem.id}>
              <Text
                textAlign="center"
                mt={index === 0 ? "28" : "1"}
                mb="1"
                maxW="full"
                w="100%"
                _hover={{
                  backgroundColor: "blackAlpha.800",
                  cursor: "pointer",
                }}
              >
                {navItem.title}
              </Text>
            </Link>
          ))
        : null}
      <Button
        m="auto"
        variant="unstyled"
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </Button>
    </Box>
  );
};

export default Navbar;
