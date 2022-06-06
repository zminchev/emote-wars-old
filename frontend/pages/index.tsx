import type { NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { setRewards } from "../store/slices/rewardSlice";

const Home: NextPage = () => {
  return <div>Home page</div>;
};

export default Home;
