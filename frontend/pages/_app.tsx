import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import { fetcher } from "../fetcher/fetcher";
import Header from "../components/Resources/Header";
import { useRouter } from "next/router";
import Navbar from "../components/Navigation/Navbar";
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider>
          <SWRConfig value={{ fetcher }}>
            {pathname !== "/login" && pathname !== "/register" ? (
              <Box>
                <Header />
                <Box h="calc(100vh - 100px)" display="flex">
                  <Navbar />
                  <Component {...pageProps} />
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

export default MyApp;
