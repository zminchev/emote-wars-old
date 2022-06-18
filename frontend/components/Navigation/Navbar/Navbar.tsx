import { Box, Button } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React from 'react';
import { signOut } from 'next-auth/react';
import NavItem from '../NavItem';
import { useNavItem } from '../../../queries/useNavItem';

const Navbar = () => {
  const { status } = useSession();
  const { navItems } = useNavItem(status);

  const logout = () => {
    localStorage.removeItem('userJwt');
    signOut({ redirect: false });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      bgColor="blackAlpha.700"
      color="white"
      alignItems="center"
      maxW="full"
      minW="300px"
    >
      {navItems && navItems.length > 0
        ? navItems.map(({ to, title, id }, index) => (
            <NavItem href={to} text={title} index={index} key={id} />
          ))
        : null}
      <Button m="auto" variant="unstyled" onClick={logout}>
        Sign out
      </Button>
    </Box>
  );
};

export default Navbar;
