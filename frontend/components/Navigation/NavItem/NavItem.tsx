import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export interface NavItemProps {
  id?: number;
  href: string;
  text: string;
  index: number;
}

const NavItem: React.FC<NavItemProps> = ({ index, href, text }) => {
  return (
    <Link href={href}>
      <Text
        textAlign="center"
        mt={index === 0 ? '28' : '1'}
        mb="1"
        maxW="full"
        w="100%"
        _hover={{
          backgroundColor: 'blackAlpha.800',
          cursor: 'pointer',
        }}
      >
        {text}
      </Text>
    </Link>
  );
};

export default NavItem;
