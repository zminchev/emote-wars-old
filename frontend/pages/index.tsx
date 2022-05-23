import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import Navbar from "../components/Navigation/Navbar";

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

  return (
    <>
      <Navbar />
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button>
    </>
  );
};

export default Home;
