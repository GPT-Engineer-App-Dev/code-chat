import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, Heading, Text, VStack, HStack, Spacer, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleNewPost = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setMessage("Both title and content are required.");
      return;
    }
    const newPost = { title, content };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
    setMessage("");
    setShowForm(false);
  };

  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/categories">Categories</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
          <Link as={RouterLink} to="/register">Register</Link>
        </HStack>
      </Flex>

      <Button colorScheme="blue" onClick={handleNewPost} mb={4}>
        New Post
      </Button>

      {showForm && (
        <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" mb={8}>
          <Heading as="h2" size="lg" mb={6} textAlign="center">
            Create New Post
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </FormControl>
              <FormControl id="content" isRequired>
                <FormLabel>Content</FormLabel>
                <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Submit
              </Button>
            </VStack>
          </form>
          {message && (
            <Text mt={4} color="red.500">
              {message}
            </Text>
          )}
        </Box>
      )}

      <VStack spacing={8} align="stretch">
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
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

export default Category;