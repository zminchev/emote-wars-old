import type { NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const redirectIfNotLogged = async () => {
      const sessionA = await getSession();
    };

    // if (status === "unauthenticated") {
    //   router.push("/login");
    // }
    redirectIfNotLogged();
  }, [session]);

  return <div>Home page</div>;
};

export default Home;
