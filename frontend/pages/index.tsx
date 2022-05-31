import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      localStorage.setItem("userJwt", session.user.jwt);
    }
  }, []);

  return <div>Home page</div>;
};

export default Home;
