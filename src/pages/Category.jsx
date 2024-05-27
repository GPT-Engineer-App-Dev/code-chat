import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setMessage("Title and content are required.");
      return;
    }
    const newPost = { title, content };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
    setMessage("Post created successfully!");
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>{categoryName} Discussions</Heading>
      <VStack spacing={4} align="stretch">
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
          </Box>
        ))}
      </VStack>
      <Box mt={8}>
        <Heading as="h3" size="md" mb={4}>Create a New Post</Heading>
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
            <Button type="submit" colorScheme="blue" width="full">Create Post</Button>
          </VStack>
        </form>
        {message && (
          <Text mt={4} color={message === "Post created successfully!" ? "green.500" : "red.500"}>
            {message}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Category;