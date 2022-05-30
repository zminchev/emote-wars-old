import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Navbar from "../components/Navigation/Navbar";
import Header from "../components/Resources/Header";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      localStorage.setItem("userJwt", session.user.jwt);
    }
  }, []);

  return (
    <Box>
      <Header />
      <Box h="calc(100vh - 100px)" display="flex">
        <Navbar />
      </Box>
    </Box>
  );
};

export default Home;
