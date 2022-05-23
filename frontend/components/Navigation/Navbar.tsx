import { Box } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";

const Navbar = () => {
  const { data } = useSWR("http://localhost:1337/api/nav-items");
  console.log(data);

  return (
    <Box ml="5">
      {data.data.map((navItem: any) => (
        <li key={navItem.id}>
          {navItem.attributes.title} : {navItem.attributes.to}
        </li>
      ))}
    </Box>
  );
};

export default Navbar;
