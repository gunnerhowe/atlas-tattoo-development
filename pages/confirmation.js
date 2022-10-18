import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import Image from 'next/image';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}><span className={styles.titleColor}>Thank you for your payment</span></h1>
        <br />
        <br />
        <h1 className={styles.title}><span className={styles.titleColor}>Select the GENERATE button below to begin</span></h1>
        <p className={styles.description}>
        </p>
        <span></span>
        <Link href="/generate">
          <button className={styles.btn_neu}>
          Generate</button>
        </Link>
      </main>
    </div>
  );
}