import Head from 'next/head';
import Navbar from "./components/Navbar";
import '../styles/globals.css';
//import Layout from './Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;