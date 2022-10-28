import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./SignInPage.module.css";
import SVG from '/pages/gallery/images/back_arrow.svg'
import Image from 'next/image'
import GOOGLE from './gallery/images/Google.svg';
import FACEBOOK from './gallery/images/Facebook.svg';
import TWITTER from './gallery/images/Twitter.svg';
import OUT from './gallery/images/sign_out.svg';
import { getProviders, signIn, getSession, useSession, signOut } from "next-auth/react";

export default function SignOutPage({ providers }) {
  const { data: session, status} = useSession();


  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Dev</title>
      </Head>
      <main className={styles.main}>
        {!session && (
          <>
            <h1 className={styles.title}><span className={styles.titleColor}>Sign Back In</span></h1>
              <button className={styles.btn_neu_out} onClick={signIn}>
                Sign In
              </button>
          </>
        )}
        {session && (
          <>
            <OUT className={styles.check}></OUT>
            <h1 className={styles.title}><span className={styles.titleColor}>Signout</span></h1>
            <br />
            <a className={styles.signOutText}>Are you sure you want to signout</a>
            <a className={styles.signOutName}>{session.user.name}?</a>
                <button className={styles.btn_neu_out} onClick={() => signOut(session)}>
                    Sign out
                </button>
          </>
        )}
      </main>
    </div>
  );
}


export async function getServerSideProps(context) {
  const providers = await getProviders(context)
  return {
    props: { providers },
  }
}