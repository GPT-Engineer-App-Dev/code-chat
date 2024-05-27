import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const categories = [
  { name: "General", description: "General discussions about technology." },
  { name: "Programming", description: "Talk about programming languages, frameworks, and more." },
  { name: "Hardware", description: "Discuss the latest in computer hardware." },
  { name: "Software", description: "Share insights on software applications and tools." },
];

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Tech Forum
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/categories">Categories</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>

      <VStack spacing={8} align="stretch">
        {categories.map((category) => (
          <Box key={category.name} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{category.name}</Heading>
            <Text mt={4}>{category.description}</Text>
            <Link as={RouterLink} to={`/categories/${category.name.toLowerCase()}`} color="blue.500" mt={2} display="block">
              View Discussions
            </Link>
          </Box>
        ))}
      </VStack>

      <Spacer />

      <Flex as="footer" bg="gray.700" color="white" p={4} mt={8} justifyContent="space-between" alignItems="center">
        <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="https://facebook.com" isExternal>
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <FaInstagram />
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;