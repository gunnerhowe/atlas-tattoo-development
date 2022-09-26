import Head from 'next/head';

import '../styles/globals.css';
import nav from './nav';

function MyApp({ Component, pageProps }) {
  return (
    <nav>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </nav>
  );
}

export default MyApp;