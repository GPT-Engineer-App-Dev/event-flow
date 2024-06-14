import { useState } from "react";
import { Container, VStack, Heading, Text, Button, Box, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", details: "" });
  const [events, setEvents] = useState([
    { title: "Event 1", details: "Details about Event 1" },
    { title: "Event 2", details: "Details about Event 2" },
    { title: "Event 3", details: "Details about Event 3" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleFormSubmit = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", details: "" });
    setIsModalOpen(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Event Management</Heading>
        <Text fontSize="lg" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <Button colorScheme="teal" size="lg" leftIcon={<FaPlus />} onClick={() => setIsModalOpen(true)}>
          Create New Event
        </Button>
        <Box width="100%" mt={10}>
          <Heading as="h2" size="lg" mb={4}>Upcoming Events</Heading>
          <Flex direction="column" gap={4}>
            {events.map((event, index) => (
              <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">{event.title}</Heading>
                <Text mt={2}>{event.details}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </VStack>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Event Title</FormLabel>
              <Input name="title" value={newEvent.title} onChange={handleInputChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Event Details</FormLabel>
              <Input name="details" value={newEvent.details} onChange={handleInputChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleFormSubmit}>
              Save
            </Button>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;