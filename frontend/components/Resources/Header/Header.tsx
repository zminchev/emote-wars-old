import { Box } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useUser } from '../../../queries/useUser';
import PageHeader from '../../UI/Page/PageHeader';
import ResourcesDisplay from '../ResourcesDisplay';

const Header = () => {
  const { data: session } = useSession();
  const { user } = useUser(session);
  console.log('test');
  console.log('tes1');

  return (
    <Box
      maxW="full"
      w="100%"
      h="100px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgColor="blackAlpha.700"
      gap={7}
      borderBottom="1px solid"
      borderColor="whiteAlpha.700"
    >
      <PageHeader text="Emote Wars" ml="14" color="white" />
      <ResourcesDisplay user={user} />
    </Box>
  );
};

export default Header;
