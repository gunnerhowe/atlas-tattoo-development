import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/myGalleryPage.module.css";
import Image from 'next/image';
import Navbar from "../profile/components/newNav";
import {signIn, signOut, useSession, getSession} from 'next-auth/react';

export default function GalleryPage() {
  const { data: session, status} = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>
      {session && (
          <>
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
      </>)}
      {!session && (
          <>
            <main className={styles.main}>
            <button className={styles.btn_neu} onClick={signIn}>Sign In</button>
            </main>
          </>
        )}
      <Navbar />
    </div>
  );
}