import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VStack, Button, Box, Heading, color } from '@chakra-ui/react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Box
      width={"100%"}
      zIndex={"20"}
      as="nav"
      // shadow="md"
      className="navbar px-lg-5 py-3 navbar-expand-md navbar-light"
      position={"absolute"}
      top="0"
      bg={"transparent"}
    >
      <div className="container-fluid">
        <Link className="text-uppercase" to="/" style={{color: "#FFF"}}>
          <Heading size="md">Walletauthenticate</Heading>
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenu(!menu)}
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <Link
            to="/connect-wallet"
            className="text-decoration-none ms-md-auto"
          >
            <Button
              color={'white'}
              bg={'blue.800'}
              colorScheme={'blue.300'}
              size="lg"
            >
              Connect Wallet
            </Button>
          </Link>
        </div>
      </div>
      {menu && (
        <VStack
          position="fixed"
          top="4rem"
          w={'full'}
          p="4"
          bg={'#fff'}
          shadow="md"
        >
          <Button colorScheme={'blue'}>
            <Link to="/connect-wallet" color="#000">
              Connect Wallet
            </Link>
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;
