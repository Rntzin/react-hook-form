import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      backgroundColor="gray.900"
    >
      <Box
        px={12}
        py={12}
        width="full"
        maxWidth="450px"
        textAlign="center"
        boxShadow="lg"
        background="gray.700"
        borderRadius="6px"
        color="gray.200"
      >
        <Heading>
          <Text fontSize="2xl">Registration Form</Text>
        </Heading>
        <Box>
          <Flex justify="space-between">
            <FormControl isRequired marginTop="15px" width="49%">
              <FormLabel>First name</FormLabel>
              <Input
                type="text"
                name="name"
                border="none"
                outline="none"
                bgColor="gray.900"
                focusBorderColor="gray.600"
                color="gray.200"
                placeholder="First Name"
              />
            </FormControl>
            <FormControl isRequired marginTop="15px" width="49%">
              <FormLabel>Last name</FormLabel>
              <Input
                type="text"
                name="name"
                border="none"
                outline="none"
                bgColor="gray.900"
                focusBorderColor="gray.600"
                color="gray.200"
                placeholder="Last Name"
              />
            </FormControl>
          </Flex>
          <FormControl isRequired marginTop="15px">
            <FormLabel>Your e-mail</FormLabel>
            <Input
              type="text"
              name="name"
              border="none"
              outline="none"
              bgColor="gray.900"
              focusBorderColor="gray.600"
              color="gray.200"
              placeholder="Your e-mail"
            />
          </FormControl>
          <Flex justify="space-between">
            <FormControl isRequired marginTop="15px" width="49%">
              <FormLabel>Your address</FormLabel>
              <Input
                type="text"
                name="name"
                border="none"
                outline="none"
                bgColor="gray.900"
                focusBorderColor="gray.600"
                color="gray.200"
                placeholder="Your address"
              />
            </FormControl>
            <FormControl isRequired marginTop="15px" width="49%">
              <FormLabel>Your phone</FormLabel>
              <Input
                type="text"
                name="name"
                border="none"
                outline="none"
                bgColor="gray.900"
                focusBorderColor="gray.600"
                color="gray.200"
                placeholder="Your phone"
              />
            </FormControl>
          </Flex>
          <FormControl isRequired marginTop="15px">
            <FormLabel>Your descript message</FormLabel>
            <Textarea
              name="name"
              border="none"
              outline="none"
              bgColor="gray.900"
              focusBorderColor="gray.600"
              color="gray.200"
              resize="none"
              placeholder="Your descript message"
            />
          </FormControl>
          <Button
            type="submit"
            width="full"
            bgColor="green.400"
            mt="4px"
            color="gray.200"
            _hover={{
              bgColor: "green.600",
              color: "gray.700",
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
