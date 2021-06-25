import Head from 'next/head';
import '../styles/globals.scss';
import '../styles/initialization.scss';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import 'minireset.css';
import { ApolloClient } from '../utilities/apollo/client';
import { SafeHydrate } from '../components/SafeHydrate';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = ApolloClient.instance;
  return (
    <>
      {/* NOTE: CSRをやめる場合のSafeHydrateで囲むのをやめる */}
      <SafeHydrate>
        <Head>
          <title>Next Example2</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </SafeHydrate>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
