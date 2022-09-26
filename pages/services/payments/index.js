import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./PaymentsPage.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Dev</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><span className={styles.titleColor}>Payments</span></h1>
        <p className={styles.description}>
        </p>
        <Link href="/">
          <button className={styles.btn_neu}>
          Home</button>
        </Link>
      </main>
    </div>
  );
}