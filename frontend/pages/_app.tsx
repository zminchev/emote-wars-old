import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import { SWRConfig } from 'swr';
import { fetcher } from '../fetcher/fetcher';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useEffect } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ChakraProvider>
          <SWRConfig value={{ fetcher }}>
            {pathname !== '/login' && pathname !== '/register' ? (
              <Layout>
                <Auth>
                  <Component {...pageProps} />
                </Auth>
              </Layout>
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
