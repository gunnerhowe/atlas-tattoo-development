import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import styles from './api/PreviewPage.module.css'
import Head from "next/head";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage() {
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
      <container className={styles.main_container}>
        <Head>
        <title>Atlas Tattoo - Credits</title>
        </Head>
        <section className={styles.section_stripe}>
          <h1 className={styles.main_title}>Credits</h1>
          <container className={styles.container_row}>
          <form action="/api/prices/oneX" method="POST">
            <container className={styles.container}>
              <div>
                <h1 className={styles.title}>
                  1x
                </h1>
              </div>
              <button className={styles.btn_neu} type="submit" role="link">
                $5.00
              </button>
            </container>
            </form>
            <form action="/api/prices/fiveX" method="POST">
            <container className={styles.container}>
              <div>
                <h1 className={styles.title}>
                  5x
                </h1>
              </div>
              <button className={styles.btn_neu} type="submit" role="link">
                $24.00
              </button>
            </container>
            </form>
            <form action="/api/prices/tenX" method="POST">
            <container className={styles.container}>
              <div>
                <h1 className={styles.title}>
                  10x
                </h1>
              </div>
              <button className={styles.btn_neu} type="submit" role="link">
                $45.00
              </button>
            </container>
            </form>
          </container>
          <container className={styles.container_row}>
            <form action="/api/prices/twenty-fiveX" method="POST">
            <container className={styles.container}>
              <div>
                <h1 className={styles.title}>
                  25x
                </h1>
              </div>
              <button className={styles.btn_neu} type="submit" role="link">
                $75.00
              </button>
            </container>
            </form>
            <form action="/api/prices/fiftyX" method="POST">
            <container className={styles.container}>
              <div>
                <h1 className={styles.title}>
                  50x
                </h1>
              </div>
              <button className={styles.btn_neu} type="submit" role="link">
                $200.00
              </button>
            </container>
            </form>
            <form action="/api/prices/hundredX" method="POST">
            <container className={styles.container}>
              <div>
                <h1 className={styles.title}>
                  100x
                </h1>
              </div>
              <button className={styles.btn_neu} type="submit" role="link">
                $300.00
              </button>
            </container>
            </form>
          </container>
        </section>
      </container>
    //</form>
  );
}