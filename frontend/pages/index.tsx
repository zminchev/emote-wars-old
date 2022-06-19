import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect, useMemo } from 'react';
import Emote from '../components/Emote';
import Page from '../components/UI/Page';
import { useUser } from '../queries/useUser';

const Home: NextPage = () => {
  const { data: session } = useSession();
  const { user, mutate } = useUser(session);

  const experienceNeededForNextLevel = useMemo(() => {
    return user?.level! * user?.level! * 45;
  }, [user?.level]);

  const percentExperience = useMemo(() => {
    return ((user?.experience! / experienceNeededForNextLevel) * 100).toFixed(
      1
    );
  }, [user?.experience]);

  const updateUserExperience = async () => {
    await fetch(`http://localhost:1337/api/users/${user?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${session?.user.jwt}`,
      },
      body: JSON.stringify({
        experience: 0,
        level: +user?.level! + 1,
      }),
    });
    return user!;
  };
  useEffect(() => {
    //TODO Extra experience should persist to the next level
    if (user?.experience! >= experienceNeededForNextLevel) {
      mutate(updateUserExperience(), { revalidate: true });
    }
  }, [user?.experience]);

  return (
    <Page>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxW="full"
        w="100%"
        mt="4"
      >
        <Emote
          name={user?.username}
          level={user?.level}
          experience={user?.experience}
          experienceNeeded={experienceNeededForNextLevel}
          percentExperience={percentExperience}
        />
      </Box>
    </Page>
  );
};

export default Home;
