import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/profilePage.module.css";
import Image from 'next/image';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
import Navbar from "../profile/components/newNav";
import clientPromise from "/lib/mongodb";


export default function ProfilePage( { credits } ) {
  const { data: session, status} = useSession();
  const [curCred, setcurCred] = useState(credits[0]);

  function showCred() {
    if (Number(credits) != []) {
      const numCred = curCred.credits;
      return numCred;
    } else {
      const numCred = 0;
      return numCred;
    };
  }

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
        <h1 className={styles.title}><span className={styles.titleColor}>Profile Overview</span></h1>
             <br />
            <Link href='/stripe'>
                <button className={styles.btn_neu_creds}>
                  Current Credits: {showCred()}
                </button>
            </Link>
          </div>
       {/*  {credits.map((credit) => {
            return (
              <div className={styles.navbar_cont}>
                <br />
                <Link href='/stripe'>
                  <button className={styles.btn_neu_creds}>
                    Current Credits: {credit.credits}
                  </button>
                </Link>
              </div>
            );
          })} */}
      </>
        )}
      </main>
      <Navbar/>
    </div>
  );
}


export async function getServerSideProps({req}) {
  const session = await getSession({ req });
  try {
      //Connecting to the DB
      const client = await clientPromise;

      //Specificially saying which DB to connect to
      const db = client.db("Atlas_Tattoo");

      //Example of retrieving a document from the db
      const credits = await db
          .collection("credits")
          .find({email: session.user.email})
          .toArray()
          //console.log(credits)
          //res.json(credits)
          
      //returning the JSON strings so that they can be added to the UI in the above function
      return {
          //props: { credits: JSON.parse(JSON.stringify(credits)) },
          props: {credits: JSON.parse(JSON.stringify(credits))}
      };

  //Error catcher
  } catch (e) {
      console.error(e);
  }
}