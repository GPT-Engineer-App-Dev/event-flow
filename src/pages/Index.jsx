import { Container, VStack, Heading, Text, Button, Box, Flex, IconButton } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Event Management</Heading>
        <Text fontSize="lg" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <Button colorScheme="teal" size="lg" leftIcon={<FaPlus />}>
          Create New Event
        </Button>
        <Box width="100%" mt={10}>
          <Heading as="h2" size="lg" mb={4}>Upcoming Events</Heading>
          <Flex direction="column" gap={4}>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Event 1</Heading>
              <Text mt={2}>Details about Event 1</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Event 2</Heading>
              <Text mt={2}>Details about Event 2</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Event 3</Heading>
              <Text mt={2}>Details about Event 3</Text>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;