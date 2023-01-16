import { Box, Button, chakra, SimpleGrid, Text, Icon, Heading } from '@chakra-ui/react';
import React from 'react';
import { FaSync } from 'react-icons/fa';
import { SiAuth0 } from 'react-icons/si';
import { GiTrade } from 'react-icons/gi';
import { GrStakeholder } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export default function index() {
  const features = [
    {
      icon: SiAuth0,
      title: 'Websolutions',
      button: 'Connect Wallet',
    },
    {
      icon: FaSync,
      title: 'Synchronization',
      button: 'Choose',
    },
    {
      icon: GiTrade,
      title: 'Buying and Selling',
      button: 'Choose',
    },
    {
      icon: GrStakeholder,
      title: 'Stake',
      button: 'Choose',
    },
    {
      icon: GrStakeholder,
      title: 'UnStake',
      button: 'Choose',
    },
  ];
  return (
    <Box padding={{ base: '2em 1em', md: '3em 4em', lg: '4em' }} style={{background: "linear-gradient(to top left, #382B77 0%, #100C22 35% 100%)"}}>
      <Heading size={'lg'} className="pt-4 mb-12 text-center text-white">What We Do</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacingX="2em" spacingY={"2em"} className="pb-4">
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={`${feature.title}${index}`} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

const FeatureCard = ({ feature }) => {
  return (
    <Box
      display="flex"
      flexDir={'column'}
      alignItems={'center'}
      justifyContent="center"
      gap="2em"
      className='shadow-md px-2 py-4 rounded-[10px] hover:bg-[rgb(74,62,135)]'
      bg={"rgba(226,232,240,.3)"}
    >
      <chakra.div bg="rgba(255,255,255,.5)" className="shadow-md rounded-md py-3 px-3">
        <Icon as={feature.icon} fontSize="3em" style={{filter: "invert(100%)"}} />
      </chakra.div>
      <Text className='font-black text-2xl font-sans text-white'>{feature.title}</Text>
      <Button colorScheme={"orange"} as={Link} to="wallets-validation" className='bg-[gold]'>{feature.button}</Button>
    </Box>
  );
};
