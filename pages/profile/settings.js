import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/settingsPage.module.css";
import Image from 'next/image';
import Navbar from "../profile/components/newNav";
import {signIn, signOut, useSession, getSession} from 'next-auth/react';

export default function GalleryPage() {
  const { data: session, status} = useSession();
  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>
      {session && (
          <>
        <main className={styles.main}>
          <h1 className={styles.title}>Settings</h1>
          <div className={styles.settings}>
            <div className={styles.display_box}>
              <a className={styles.user_info}>Name: {session.user.name}</a>

              <a className={styles.user_info}>Email: {session.user.email}</a>
            </div>

            <div className={styles.display_box}>
              <a className={styles.transfer_text}>Transfer Credits to another account associated with a different Email</a>
              <input
                id="query"
                type="text"
                value={query}
                onChange={(e) => {setQuery(e.target.value)}}
                placeholder="johnsmith@gmail.com"
                className={styles.transfer_input}
              />
              <button className={styles.btn_neu}>
                Transfer
              </button>
            </div>

            <div className={styles.display_box}>
              <button className={styles.btn_neu_Delete}>
                Delete Profile
              </button>
            </div>
          </div>
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