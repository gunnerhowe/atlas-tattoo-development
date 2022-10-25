import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./SignInPage.module.css";
import SVG from '/pages/gallery/images/back_arrow.svg'
import Image from 'next/image'
import GOOGLE from './gallery/images/Google.svg';
import FACEBOOK from './gallery/images/Facebook.svg';
import TWITTER from './gallery/images/Twitter.svg';
import CHECK from './gallery/images/check.svg';
import { getProviders, signIn, getSession, useSession } from "next-auth/react";

export default function SignInPage({ providers }) {
  const { data: session, status} = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Dev</title>
      </Head>
      <main className={styles.main}>
        {!session && (
          <>
            <h1 className={styles.title}><span className={styles.titleColor}>Sign In</span></h1>

            <button className={styles.btn_neu} onClick={() => signIn(providers.google.id)}>
                <GOOGLE className={styles.google}></GOOGLE>
            </button>

            <button className={styles.btn_neu} onClick={() => signIn(providers.facebook.id)}>
                  <FACEBOOK className={styles.facebook}></FACEBOOK>
            </button>

            <button className={styles.btn_neu} onClick={() => signIn(providers.twitter.id)}>
              <TWITTER className={styles.twitter}></TWITTER>
            </button>
          </>
        )}
        {session && (
          <>
            <CHECK className={styles.check}></CHECK>
            <h1 className={styles.title}><span className={styles.titleColor}>You are signed in as:</span></h1>
            <br />
            <a className={styles.signName}>{session.user.name}</a>
          </>
        )}
      </main>
    </div>
  );
}

/* export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
          <a>{provider.id}</a>
          <a>{provider.name}</a>
        </div>
      ))}
    </>
  )
} */

export async function getServerSideProps(context) {
  const providers = await getProviders(context)
  return {
    props: { providers },
  }
}