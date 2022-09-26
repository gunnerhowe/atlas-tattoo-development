import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./SignInPage.module.css";
import SVG from '/pages/gallery/images/back_arrow.svg'
import Image from 'next/image'

export default function SignInPage() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Dev</title>
      </Head>

      <main className={styles.main}>
        <Link href='/'>
          <button className={styles.back_neu}>
            <Image src={SVG} alt='svg' ></Image>
          </button>
        </Link>
        <h1 className={styles.title}><span className={styles.titleColor}>Sign In</span></h1>
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
        <Link href="/signup">
            <a>Signup</a>
        </Link>
      </main>
    </div>
  );
}