import { Box, Center, Container, Heading, Text, Image } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useItemCategories } from '../../queries/useItemCategories';
import Card from '../../components/UI/Card';
import Link from 'next/link';
import Page from '../../components/UI/Page';
import PageHeader from '../../components/UI/Page/PageHeader';
const Shop = () => {
  const { data: session } = useSession();
  const { categories } = useItemCategories(session);
  return (
    <Page>
      <Box>
        <PageHeader text="Shop" textAlign="center" mt="10" />
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
              Choose a category to display the different kind of items for that
              category. Spend resources on items to make your Emote more
              powerful and intimidating.
            </Text>
          </Box>
          <PageHeader
            text="Choose a category"
            textAlign="center"
            type="secondary"
          />
          <Box
            maxW="100%"
            w="100%"
            h="300px"
            mt="12"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {categories && categories.length > 0
              ? categories.map((category) => (
                  <Card key={category.id}>
                    <Link href={`${category.to}${category.id}`}>
                      <Center h="100%">
                        <Box
                          display="flex"
                          flexDirection="column"
                          textAlign="center"
                        >
                          <Box maxW="100%" h="100%" w="100%" overflow="hidden">
                            <Image
                              src={category.image}
                              w="200"
                              h="200"
                              objectFit="cover"
                            />
                          </Box>
                          <Heading>{category.name}</Heading>
                        </Box>
                      </Center>
                    </Link>
                  </Card>
                ))
              : null}
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default Shop;
