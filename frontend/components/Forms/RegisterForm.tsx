import React from "react";
import {
  Box,
  Container,
  Flex,
  Center,
  FormControl,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { registerSchema } from "../../validation/registerSchema";
import FormInput from "./FormInput";
import Link from "next/link";
import { register } from "../../queries/register";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: FormValues = {
    username: "",
    email: "",
    password: "",
  };

  return (
    <Flex>
      <Container maxW="full" h="100vh" backgroundColor="blackAlpha.900">
        <Center h="100%">
          <Box
            color="white"
            maxW="full"
            w="400px"
            h="500px"
            backgroundColor="gray.900"
            border="1px solid"
            borderColor="cyan.900"
            borderRadius="md"
          >
            <Formik
              initialValues={initialValues}
              validationSchema={registerSchema}
              onSubmit={(values) => {
                const { username, email, password } = values;
                register(username, email, password);
              }}
            >
              {({ errors, touched, values, handleChange }) => {
                return (
                  <Form>
                    <FormControl color="whiteAlpha.800" p="5">
                      <Heading textAlign="center">Register</Heading>
                      <FormInput
                        labelFor="username"
                        labelText="Username"
                        inputName="username"
                        type="text"
                        value={values.username}
                        isInvalid={!!(errors.username && touched.username)}
                        onChange={handleChange}
                      />
                      <FormInput
                        labelFor="email"
                        labelText="Email"
                        inputName="email"
                        type="text"
                        value={values.email}
                        isInvalid={!!(errors.email && touched.email)}
                        onChange={handleChange}
                      />
                      <FormInput
                        labelFor="password"
                        labelText="Password"
                        inputName="password"
                        type="password"
                        value={values.password}
                        isInvalid={!!(errors.password && touched.password)}
                        onChange={handleChange}
                      />
                      <Button
                        w="100%"
                        mt="10"
                        color="black"
                        backgroundColor="cyan"
                        borderRadius="0"
                        type="submit"
                      >
                        Login
                      </Button>
                      <Box
                        color="cyan"
                        mt="1"
                        display="flex"
                        justifyContent="space-between"
                        fontSize="sm"
                      >
                        <Link href="/login">Already have an account?</Link>
                      </Box>
                    </FormControl>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Center>
      </Container>
    </Flex>
  );
};

export default LoginForm;
