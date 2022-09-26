import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./SignupPage.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Dev</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><span className={styles.titleColor}>Signup</span></h1>
        <p className={styles.description}>
          <input
            id="firstname"
            type="text"
            placeholder="First Name"
          />
        </p>
        <p className={styles.description}>
          <input
            id="lastname"
            type="text"
            placeholder="Last Name"
          />
        </p>
        <p className={styles.description}>
          <input
            id="email"
            type="text"
            placeholder="Email"
          />
        </p>
        <p className={styles.description}>
          <input
            id="password"
            type="text"
            placeholder="Password"
          />
        </p>
        <Link href="/">
          <button className={styles.btn_neu}>
          Submit</button>
        </Link>
      </main>
    </div>
  );
}