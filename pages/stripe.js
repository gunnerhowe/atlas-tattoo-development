import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import styles from './api/PreviewPage.module.css'
import Head from "next/head";
import Navbar from "./profile/components/newNav";
import {signIn, signOut, useSession, getSession} from 'next-auth/react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage() {
  const { data: session, status} = useSession();

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    };

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    };
  }, []);

  return (
    //<form action="/api/checkout_sessions" method="POST">
      <div className={styles.main_container}>
        <Head>
        <title>Atlas Tattoo - Credits</title>
        </Head>
        {session && (
          <>
          <section className={styles.section_stripe}>
            <h1 className={styles.main_title}>Credits</h1>
            <div className={styles.container_row}>
            <form action="/api/prices/oneX" method="POST">
              <div className={styles.container}>
                <div>
                  <h1 className={styles.title}>
                    1x
                  </h1>
                </div>
                <button className={styles.btn_neu} type="submit" role="link">
                  $5.00
                </button>
              </div>
              </form>
              <form action="/api/prices/fiveX" method="POST">
              <div className={styles.container}>
                <div>
                  <h1 className={styles.title}>
                    5x
                  </h1>
                </div>
                <button className={styles.btn_neu} type="submit" role="link">
                  $24.00
                </button>
              </div>
              </form>
              <form action="/api/prices/tenX" method="POST">
              <div className={styles.container}>
                <div>
                  <h1 className={styles.title}>
                    10x
                  </h1>
                </div>
                <button className={styles.btn_neu} type="submit" role="link">
                  $45.00
                </button>
              </div>
              </form>
            </div>
            <div className={styles.container_row}>
              <form action="/api/prices/twenty-fiveX" method="POST">
              <div className={styles.container}>
                <div>
                  <h1 className={styles.title}>
                    25x
                  </h1>
                </div>
                <button className={styles.btn_neu} type="submit" role="link">
                  $75.00
                </button>
              </div>
              </form>
              <form action="/api/prices/fiftyX" method="POST">
              <div className={styles.container}>
                <div>
                  <h1 className={styles.title}>
                    50x
                  </h1>
                </div>
                <button className={styles.btn_neu} type="submit" role="link">
                  $200.00
                </button>
              </div>
              </form>
              <form action="/api/prices/hundredX" method="POST">
              <div className={styles.container}>
                <div>
                  <h1 className={styles.title}>
                    100x
                  </h1>
                </div>
                <button className={styles.btn_neu} type="submit" role="link">
                  $300.00
                </button>
              </div>
              </form>
            </div>
          </section>
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
    //</form>
  );
}