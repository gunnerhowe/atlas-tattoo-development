import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/profilePage.module.css";
import Image from 'next/image';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
import Navbar from "../profile/components/Nav";


export default function ProfilePage() {
  //const { data: session, status} = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.navbar_cont}>
          <Navbar/>
        </div>
        <h1 className={styles.title}><span className={styles.titleColor}>Gunner's Profile</span></h1>
        <button className={styles.btn_neu}>
          Credits
        </button>
      </main>
    </div>
  );
}