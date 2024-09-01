"use client";

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
import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  description: string;
  onSubmit: () => void;
}

const schema = z.object({
  firstName: z.string().nonempty("required"),
  lastName: z.string().nonempty("required"),
  email: z.string().email("must be a valid email").nonempty("required"),
  address: z.string().nonempty("required"),
  phone: z.string().nonempty("required"),
  description: z.string().nonempty("required"),
});

const Home: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: UserFormData) {
    console.log(data);
  }

  const setErros = (error: any) => {
    console.log("Errors", error);
  };

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
          <form action="" onSubmit={handleSubmit(onSubmit, setErros)}>
            <Flex justify="space-between">
              <FormControl isRequired marginTop="15px" width="49%">
                <FormLabel>First name</FormLabel>
                <Input
                  type="fistName"
                  border="none"
                  outline="none"
                  bgColor="gray.900"
                  focusBorderColor="gray.600"
                  color="gray.200"
                  placeholder="First Name"
                  {...register("firstName")}
                />
              </FormControl>
              <FormControl isRequired marginTop="15px" width="49%">
                <FormLabel>Last name</FormLabel>
                <Input
                  type="lastName"
                  border="none"
                  outline="none"
                  bgColor="gray.900"
                  focusBorderColor="gray.600"
                  color="gray.200"
                  placeholder="Last Name"
                  {...register("lastName")}
                />
              </FormControl>
            </Flex>
            <FormControl isRequired marginTop="15px">
              <FormLabel>Your e-mail</FormLabel>
              <Input
                type="text"
                border="none"
                outline="none"
                bgColor="gray.900"
                focusBorderColor="gray.600"
                color="gray.200"
                placeholder="Your e-mail"
                {...register("email")}
              />
            </FormControl>
            <Flex justify="space-between">
              <FormControl isRequired marginTop="15px" width="49%">
                <FormLabel>Your address</FormLabel>
                <Input
                  type="text"
                  border="none"
                  outline="none"
                  bgColor="gray.900"
                  focusBorderColor="gray.600"
                  color="gray.200"
                  placeholder="Your address"
                  {...register("address")}
                />
              </FormControl>
              <FormControl isRequired marginTop="15px" width="49%">
                <FormLabel>Your phone</FormLabel>
                <Input
                  type="text"
                  border="none"
                  outline="none"
                  bgColor="gray.900"
                  focusBorderColor="gray.600"
                  color="gray.200"
                  placeholder="Your phone"
                  {...register("phone")}
                />
              </FormControl>
            </Flex>
            <FormControl isRequired marginTop="15px">
              <FormLabel>Your Description</FormLabel>
              <Textarea
                border="none"
                outline="none"
                bgColor="gray.900"
                focusBorderColor="gray.600"
                color="gray.200"
                resize="none"
                placeholder="Your description"
                {...register("description")}
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
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
