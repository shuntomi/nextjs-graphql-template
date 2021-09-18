import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import dynamic from 'next/dynamic';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material';
import { ApolloClient } from '../utilities/apollo';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // NOTE: CSRにするためにdynamic importする
  const SafeHydrate = dynamic(() => import('../components/SafeHydrate'), {
    ssr: false,
  });
  const client = ApolloClient.instance;
  return (
    <>
      <Head>
        <title>Next Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SafeHydrate>
        <MaterialThemeProvider theme={theme}>
          <StyledComponentThemeProvider theme={theme}>
            <GlobalStyle />
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </StyledComponentThemeProvider>
        </MaterialThemeProvider>
      </SafeHydrate>
    </>
  );
};

export default MyApp;
