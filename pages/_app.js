import Head from 'next/head';
import Navbar from "./components/Navbar";
import '../styles/globals.css';
//import Layout from './Layout';
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}

export default MyApp;