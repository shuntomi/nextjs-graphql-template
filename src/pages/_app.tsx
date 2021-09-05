import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import dynamic from 'next/dynamic';
import { ApolloClient } from '../utilities/apollo';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
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
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </SafeHydrate>
    </>
  );
};

export default MyApp;
