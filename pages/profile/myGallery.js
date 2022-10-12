import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/myGalleryPage.module.css";
//import Image from 'next/image';
import clientPromise from "/lib/mongodb";
import SVG from '/pages/gallery/images/download.svg';
import FileSaver, { saveAs } from 'file-saver';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
import Image from 'next/future/image';
import Navbar from "../profile/components/Nav";

export default function GalleryPage({ images }) {
  const { data: session, status} = useSession();
  const [token, setToken] = useState("sess-yGcqdrc8VaZTJyUnz2L2JHlrW0067vnkBDSWocE0");
  const [query, setQuery] = useState("generation-2RjshZ39Hmvnz4ZbRoECtzYO");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);


/*   function GetDalle2() {
    if (token != "" && query != "") {
      setError(false);
      fetch(`/api/getImages?k=${token}&q=${query}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResults(data.result);
          console.log(data.result);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    } else {
      setError(true);
    };
  } */



  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>
      {!session && (
          <>
            <main className={styles.main}>
            <button className={styles.btn_neu} onClick={signIn}>Sign In</button>
            </main>
          </>
        )}
        {
          session && (
            <>
            <main className={styles.main}>
            <div className={styles.navbar_cont}>
              <Navbar />
            </div>
        <h1 className={styles.title}><span className={styles.titleColor}>{session.user.name}'s Gallery</span></h1>
        <div className={styles.grid}>
                {images.map((image) => {
                  return (
                    <div className={styles.card}>
                      <Image 
                        className={styles.imgPreview}
                        src={image.image_path}
                        width={300}
                        height={300}
                        quality={75}
                        alt=''/>
                      <div>
                        <button className={styles.btn_neu_download}>
                          <SVG className={styles.download_image}/>
                        </button>
                      </div>        
                    </div>
                  );
                })}
              </div>
        <Link href="/">
          <button className={styles.btn_neu}>
          Home</button>
        </Link>
        </main>
        </>
          )
        }
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
      const images = await db
          .collection("images")
          .find({email: session.user.email})
          .toArray();

      //returning the JSON strings so that they can be added to the UI in the above function
      return {
          props: { images: JSON.parse(JSON.stringify(images)) },
      };

  //Error catcher
  } catch (e) {
      console.error(e);
  }
}