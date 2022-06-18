import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import { SWRConfig } from 'swr';
import { fetcher } from '../fetcher/fetcher';
import Header from '../components/Resources/Header/Header';
import { useRouter } from 'next/router';
import Navbar from '../components/Navigation/Navbar';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useEffect } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ChakraProvider>
          <SWRConfig value={{ fetcher }}>
            {pathname !== '/login' && pathname !== '/register' ? (
              <Box>
                <Header />
                <Box h="calc(100vh - 100px)" display="flex">
                  <Navbar />
                  <Auth>
                    <Component {...pageProps} />
                  </Auth>
                </Box>
              </Box>
            ) : (
              <Component {...pageProps} />
            )}
          </SWRConfig>
        </ChakraProvider>
      </SessionProvider>
    </Provider>
  );
}

function Auth({ children }: any) {
  const { data: session, status } = useSession();
  const user = !!session?.user;

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn();
    }
  }, [user, status]);

  if (user) {
    return children;
  }
}

export default MyApp;
