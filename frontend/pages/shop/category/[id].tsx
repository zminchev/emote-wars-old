import { useRouter } from 'next/router';
import { useItemCategory } from '../../../queries/useItemCategory';
import React, { useEffect, useState } from 'react';
import Page from '../../../components/UI/Page';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Item from '../../../components/Items/Item/Item';
import { useItem } from '../../../queries/useItem';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { buyItem } from '../../../store/slices/shopSlice';
import { useUser } from '../../../queries/useUser';
import { useSession } from 'next-auth/react';
import { Item as ItemType } from '../../../models/Item';

const Category = () => {
  const [itemId, setItemId] = useState<string>('');
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const storeItem = useAppSelector((state) => state.shop.item);

  const { id } = router.query;

  const { category } = useItemCategory(id!);
  const { item } = useItem(itemId);
  const { user } = useUser(session);

  const categoryNameToLower = category?.name.toLowerCase();

  const getItemId = (id: string) => {
    setItemId(id);
  };

  useEffect(() => {
    if (item) {
      dispatch(buyItem(item));
    }
  }, [item]);

  return (
    <Page>
      <Box h="95%">
        <Heading textAlign="center" mt="5" mb="5">
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
          <Box maxW="100%" w="40%" h="150px">
            <Text textAlign="center">
              This is the {categoryNameToLower} shop. The better{' '}
              {categoryNameToLower} you buy, the more powerful your Emote
              becomes. But in order to become the most powerful, one has to go
              through many difficult challenges and aquire many resources!
            </Text>
          </Box>

          <Box
            maxW="100%"
            w="100%"
            h="550px"
            display="flex"
            flexWrap="wrap"
            overflowY="scroll"
            justifyContent="center"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <Box maxW="100%" display="flex" ml="65" flexWrap="wrap" gap="1">
              {category && category.items!.length > 0 ? (
                category
                  .items!.sort((item1, item2): number => {
                    if (+item1.itemLevel! < +item2.itemLevel!) {
                      return -1;
                    } else {
                      return 1;
                    }
                  })
                  .map((item) => (
                    <Item
                      key={item.id}
                      id={item.id}
                      name={item.name!}
                      image={item.image!}
                      itemLevel={item.itemLevel!}
                      attack={item.attack ? item.attack : 0}
                      defense={item.defense ? item.defense : 0}
                      agility={item.agility ? item.agility : 0}
                      price={item.price}
                      canBuy={
                        +user!.gold >= item.price.gold &&
                        +user!.wood >= item.price.wood &&
                        +user!.diamonds >= item.price.diamonds
                      }
                      onClick={() => getItemId(item.id)}
                    />
                  ))
              ) : (
                <Box>
                  <Text>There are no items to display !</Text>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default Category;
