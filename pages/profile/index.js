import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/profilePage.module.css";
import Image from 'next/image'

export default function ProfilePage() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}><span className={styles.titleColor}>Welcome to your profile Gunner</span></h1>
        <p className={styles.description}>
        </p>
        <span></span>
        <Link href="/">
          <button className={styles.btn_neu}>
          Home</button>
        </Link>

        <span></span>

        <Link href="/stripe">
          <button className={styles.btn_neu}>
          Credits</button>
        </Link>

        <span></span>

        <Link href="/profile/myGallery">
          <button className={styles.btn_neu}>
          My Gallery</button>
        </Link>
      </main>
    </div>
  );
}