import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/profilePage.module.css";
import Image from 'next/image';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
//import Navbar from "../profile/components/Nav";
import Navbar from "../profile/components/newNav";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";


export default function ProfilePage() {
  const { data: session, status} = useSession();

  const file = {
    email: 'gunnerlevihowe@gmail.com',
    name: 'Gunner Howe',
    payment_id: 'id_123456',
    credits: 1,
  };

  const loadIt = async (file) => {
    var toAdd = {
      email: file.email,
      name: file.name,
      payment_id: file.payment_id,
      credits: file.credits,
    };
    const newData = await fetch(`/api/storeCredits?email=${toAdd.email}&name=${toAdd.name}&payment_id=${toAdd.payment_id}&credits=${toAdd.credits}`);
    const res = await newData.json();
    console.log(res);
    };

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
        <button className={styles.btn_neu} onClick={() => loadIt(file)}>
          Test
        </button>
      </>
        )}
      </main>
      <Navbar/>
    </div>
  );
}