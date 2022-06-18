import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Emote from '../components/Emote';
import Page from '../components/UI/Page';
import { useUser } from '../queries/useUser';

const Home: NextPage = () => {
  const { data: session } = useSession();
  const { user } = useUser(session);

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
        />
      </Box>
    </Page>
  );
};

export default Home;
