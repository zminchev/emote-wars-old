import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navigation/Navbar';
import Header from '../Resources/Header';

const Layout = ({ children }: any) => {
  return (
    <Box>
      <Header />
      <Box h="calc(100vh - 100px)" display="flex">
        <Navbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
