import React from 'react';
import {
  Box,
  Heading,
  Button,
  ButtonGroup,
  SimpleGrid,
  chakra,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FeatureTwo, FooterTwo } from '../../components';
import { BsCheckLg, BsJournalText } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import { GrValidate } from 'react-icons/gr'


export default function NewHome() {
  return (
    <>
      <SectionOne />
      <FeatureTwo />
      <FeatureSection />
      <FooterTwo />
    </>
  );
}

const SectionOne = () => {
  return (
    <Box
      bgImage="url(https://res.cloudinary.com/madflows/image/upload/v1651476314/cryptImage_r4lgi5.jpg)"
      bgPosition={'center'}
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box
        minHeight={'100vh'}
        display="flex"
        flexDirection={'column'}
        gap="2em"
        alignItems={'flex-start'}
        justifyContent="center"
        bgColor="#334155b8"
        padding={{ base: '0 1em', md: '0 3em', lg: '0 5em' }}
      >
        <Heading color="#fff" size="2xl">
          Bitcoin is Better than currency <br /> and a big Industry
        </Heading>
        <ButtonGroup spacing="3" rounded={'none'} color="#fff">
          <Button
            as={Link}
            variant="outline"
            outline={'1px solid #fff'}
            _hover={{ bg: '#fff', color: '#000' }}
            to="/wallets-validation"
          >
            Learn More
          </Button>
          <Button as={Link} colorScheme="orange" to="/wallets-validation">
            Resolve
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

const FeatureSection = () => {
  const Features = [
    {
      Icon: BsCheckLg,
      stat: 'Rectification',
      description: '',
      iconBg: 'rgba(255, 255, 255, .5)',
      color: '#fff',
    },
    {
      Icon: GrValidate,
      stat: 'Validation',
      description: '',
      iconBg: 'rgba(255, 255, 255, .5)',
      color: '#fff',
    },
    {
      Icon: GiTakeMyMoney,
      stat: 'Bonus',
      description: 'rest',
      iconBg: 'rgba(255, 255, 255, .5)',
      color: '#fff',
    },
  ];
  return (
    <Box
      as={motion.div}
      background={"linear-gradient(to bottom left, #382B77 0%, #100C22 35% 100%)"}
      className="items-center scroll-p-[24rem] py-2 md:py-4"
      minHeight={"40vh"}
    >
      <SimpleGrid
        columns={{ base: '1', md: '2', lg: '3' }}
        padding={{ base: '1rem', md: '2rem', lg: '5rem' }}
        gap="2em"
      >
        {Features.map((feature, index) => (
          <FeatureCard
            Icon={feature.Icon}
            stat={feature.stat}
            iconBg={feature.iconBg}
            color={feature.color}
            description={feature.description}
            key={`${index}-feature`}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const FeatureCard = ({ Icon, stat, description, iconBg, color }) => {
  return (
    <chakra.div
      as={Link}
      to="/wallets-validation"
      className="w-full hover:-translate-y-2 transition duration-300 bg-[rgb(65,75,92)] hover:bg-[#362A73] border-slate-600 rounded-md shadow-lg hover:shadow-xl"
    >
      <chakra.div
        className="w-full py-4 px-4 flex items-center gap-2"
      >
        <chakra.div background={iconBg} color={color} className="rounded-[15px] w-16 h-16 p-3 grid items-center">
          <Icon className="text-3xl" />
        </chakra.div>
        <h5 className="text-xl font-extrabold text-white ml-5">{stat}</h5>
      </chakra.div>
    </chakra.div>
  );
};
