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
import { loginSchema } from "../../validation/loginSchema";
import FormInput from "./FormInput";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const router = useRouter();
  return (
    <Flex>
      <Container maxW="full" h="100vh" backgroundColor="blackAlpha.900">
        <Center h="100%">
          <Box
            color="white"
            maxW="full"
            w="400px"
            h="400px"
            backgroundColor="gray.900"
            border="1px solid"
            borderColor="cyan.900"
            borderRadius="md"
          >
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={async (values, { setSubmitting }) => {
                const response: any = await signIn("credentials", {
                  redirect: false,
                  email: values.email,
                  password: values.password,
                  callbackUrl: `${window.location.origin}`,
                });

                if (response.ok) {
                  router.push("/");
                }
                setSubmitting(false);
              }}
            >
              {({ errors, touched, values, handleChange }) => {
                return (
                  <Form>
                    <FormControl color="whiteAlpha.800" p="5">
                      <Heading textAlign="center">Login</Heading>
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
                        isInvalid={
                          errors.password && touched.password ? true : false
                        }
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
                        <Link href="/register">Don't have an account?</Link>
                        <Link href="/register">Forgot your password?</Link>
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
