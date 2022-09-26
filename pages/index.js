import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Dev</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><span className={styles.titleColor}>Atlas Tattoo Development</span></h1>
        <p className={styles.description}>
        </p>
        <button>
          <Link href="/generate">Generate</Link>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </button>
      </main>
    </div>
  );
}