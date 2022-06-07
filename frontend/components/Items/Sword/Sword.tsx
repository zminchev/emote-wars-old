import { Box, Center, Text, Image } from "@chakra-ui/react";
import React from "react";
import Card from "../../UI/Card";
import { ItemProps } from "../../../ItemProps/ItemProps";

const Sword: React.FC<ItemProps> = ({ id, name, attack, itemLevel, price }) => {
  return (
    <Card id={id} height="70%" width="25%">
      <Center h="100%">
        <Box display="flex" flexDirection="column" textAlign="center">
          <Box
            maxW="100%"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              w="25%"
              h="20%"
              objectFit="contain"
              src="https://res.cloudinary.com/duf8bd8co/image/upload/v1654608217/categories/category-sword_llw2ba.png"
            />
          </Box>
          <Text pl="5" pr="5">
            <strong>{name}</strong>
          </Text>
          <Text pl="5" pr="5">
            Attack: <strong>{attack}</strong>
          </Text>
          <Text pl="5" pr="5">
            Item Level: <strong>{itemLevel}</strong>
          </Text>
          <Text>
            Price: <strong>{price.gold}</strong> gold,{" "}
            <strong>{price.wood}</strong> wood,{" "}
            <strong>{price.diamonds}</strong> diamonds.
          </Text>
        </Box>
      </Center>
    </Card>
  );
};

export default Sword;
