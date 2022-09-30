import Head from 'next/head';
import Navbar from "../profile/components/Navbar";
import styles from '../profile/overviewPage.module.css';
import Link from 'next/link'

function Overview({ Component, pageProps }) {
  return (
        <>
        <h1 className={styles.title1}>Profile</h1>
            <div className={styles.container}>
                <Head>
                    <title>Atlas Tattoo Development</title>
                </Head>
                <container className={styles.nav_container}>
                        <Link href='/'><a className={styles.link_nav}>Overview</a></Link>
                        <Link href='/'><a className={styles.link_nav}>Gallery</a></Link>
                        <Link href='/'><a className={styles.link_nav}>Credits</a></Link>
                        <Link href='/'><a className={styles.link_nav}>Settings</a></Link>
                </container>
                <main className={styles.main}>
                        <h1 className={styles.title}><span className={styles.titleColor}>Testing</span></h1>
                        <p className={styles.description}>
                        </p>
                        <span></span>
                </main>
            </div>
        </>
  );
}

export default Overview;