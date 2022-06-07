import { useRouter } from "next/router";
import { useItemCategory } from "../../../queries/useItemCategory";
import React from "react";
import Page from "../../../components/UI/Page";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Sword from "../../../components/Items/Sword/Sword";
import Item from "../../../components/Items/Item";

const Category = () => {
  const router = useRouter();
  const { id } = router.query;
  const { category } = useItemCategory(id!);

  const categoryNameToLower = category?.name.toLowerCase();

  return (
    <Page>
      <Box h="95%">
        <Heading textAlign="center" mt="10">
          {category?.name}
        </Heading>
        <Container
          maxW="full"
          w="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box maxW="100%" w="40%" h="150px" mt="12">
            <Text textAlign="center">
              This is the {categoryNameToLower} shop. The better{" "}
              {categoryNameToLower} you buy, the more powerful your Emote
              becomes. But in order to become the most powerful, one has to go
              through many difficult challenges and aquire many resources!
            </Text>
          </Box>
          <Box
            maxW="100%"
            w="100%"
            h="100%"
            mt="12"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            {category && category.items.length > 0 ? (
              category.items.map((item) => (
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  itemLevel={item.itemLevel}
                  attack={item.attack ? item.attack : 0}
                  defense={item.defense ? item.defense : 0}
                  agility={item.agility ? item.agility : 0}
                  price={item.price}
                />
              ))
            ) : (
              <Box>
                <Text>There are no items to display !</Text>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default Category;
