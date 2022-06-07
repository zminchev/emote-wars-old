import { useRouter } from "next/router";
import { useItemCategory } from "../../../queries/useItemCategory";
import React from "react";
import Page from "../../../components/UI/Page";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Sword from "../../../components/Items/Sword/Sword";

const Category = () => {
  const router = useRouter();
  const { id } = router.query;
  const { category } = useItemCategory(id!);

  return (
    <Page>
      <Box>
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
              This is the sword shop. The better swords you buy, the more
              powerful your Emote becomes. But in order to become more powerful,
              one has to go through many difficult challenges and require many
              resources!
            </Text>
          </Box>
          <Box
            maxW="100%"
            w="100%"
            h="300px"
            mt="12"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {category && category.swords.length > 0 ? (
              category.swords.map((sword) => (
                <Sword
                  key={sword.id}
                  id={sword.id}
                  name={sword.name}
                  attack={sword.attack}
                  itemLevel={sword.itemLevel}
                  price={sword.price}
                />
              ))
            ) : (
              <Box>there are no items in the shop yet!</Box>
            )}
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default Category;
