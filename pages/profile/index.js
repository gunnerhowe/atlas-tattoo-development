import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/profilePage.module.css";
import Image from 'next/image';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
//import Navbar from "../profile/components/Nav";
import Navbar from "../profile/components/newNav";


export default function ProfilePage() {
  const { data: session, status} = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>
      <main className={styles.main}>
      {!session && (
          <>
            <button className={styles.btn_neu} onClick={signIn}>Sign In</button>
          </>
        )}
      {session && (
          <>
        <div className={styles.navbar_cont}>
        </div>
        <h1 className={styles.title}><span className={styles.titleColor}>Profile Overview</span></h1>
        <button className={styles.btn_neu}>
          Credits
        </button>
      </>
        )}
      </main>
      <Navbar/>
    </div>
  );
}