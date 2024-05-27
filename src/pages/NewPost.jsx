import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const NewPost = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!title || !content) {
      setMessage("All fields are required.");
      return;
    }
    // Simulate successful post creation
    setMessage("Post created successfully!");
    // Redirect to the category page after a delay
    setTimeout(() => navigate(`/categories/${category}`), 2000);
  };

  return (
    <Container maxW="container.sm" mt={10}>
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          New Post in {category}
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
              Create Post
            </Button>
          </VStack>
        </form>
        {message && (
          <Text mt={4} color={message === "Post created successfully!" ? "green.500" : "red.500"}>
            {message}
          </Text>
        )}
      </Box>
    </Container>
  );
};

export default NewPost;