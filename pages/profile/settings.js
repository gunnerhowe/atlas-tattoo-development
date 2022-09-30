import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/myGalleryPage.module.css";
import Image from 'next/image'

export default function GalleryPage() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}><span className={styles.titleColor}>Welcome to your settings Gunner</span></h1>
        <p className={styles.description}>
        </p>
        <span></span>
        <Link href="/">
          <button className={styles.btn_neu}>
          Home</button>
        </Link>
      </main>
    </div>
  );
}