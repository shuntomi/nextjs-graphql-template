import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from '../utilities/apollo';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = ApolloClient.instance;
  return (
    <>
      <Head>
        <title>Next Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default MyApp;
