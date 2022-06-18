import { Box, Center, Text, Image } from '@chakra-ui/react';
import React from 'react';
import Card from '../../UI/Card';
import { Price } from '../../../models/Price';

interface ItemProps {
  id: string;
  name: string;
  image: string;
  attack?: number;
  defense?: number;
  agility?: number;
  canBuy?: boolean;
  itemLevel: number;
  price: Price;
  onClick: () => void;
}

const Item: React.FC<ItemProps> = ({
  id,
  name,
  image,
  attack,
  itemLevel,
  canBuy,
  price,
  onClick,
}) => {
  return (
    <Card
      id={id}
      onClick={onClick}
      padding="18"
      height="250px"
      width="230px"
      isDisabled={!canBuy}
    >
      <Center h="100%">
        <Box
          maxW="100%"
          w="100%"
          h="100%"
          display="flex"
          flexDirection="column"
          textAlign="center"
        >
          <Box
            maxW="100%"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image w="100" h="100" objectFit="cover" src={image} />
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
          <Text fontSize="0.8em">
            Price: <strong>{price.gold}</strong> gold,{' '}
            <strong>{price.wood}</strong> wood,{' '}
            <strong>{price.diamonds}</strong> diamonds.
          </Text>
        </Box>
      </Center>
    </Card>
  );
};

export default Item;
