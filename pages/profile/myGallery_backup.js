import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/myGalleryPage.module.css";
//import Image from 'next/image';
import clientPromise from "/lib/mongodb";
import SVG from '/pages/gallery/images/download.svg';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
import Image from 'next/future/image';
//import Navbar from "../profile/components/Nav";
import axios from "axios";
import Navbar from "../profile/components/newNav";

export default function GalleryPage({ images }) {
  const { data: session, status} = useSession();
  const [lastImage, setlastImage] = useState([]);
  const [nextImages, setnextImages] = useState([]);
  const [skipImages, setskipImages] = useState(4);

  function download(path) {
    const link = document.createElement("a");
    link.href = `${path}`;
    link.download = `Atlas-Tattoo-Dev.png`;
    link.click();
  }


  const seeMore = async () => {
    let moreImages = await getMore(skipImages);
    const addImages = moreImages.data

    setnextImages(nextImages.concat(addImages));
    setskipImages(Number(skipImages) + 4);

  }


  const getMore = async (skip) => {

      try {
        let newData = await axios.post('/api/dalle/getImages',{
            email: session.user.email,
            skip: skip
        });

        return newData;
      } catch (err) {
        console.log(err);
      }};


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
            </div>
              <h1 className={styles.title}><span className={styles.titleColor}>{session.user.name}'s Gallery</span></h1>
              <div className={styles.grid}>
                {images.map((image) => {
                  return (
                    <div key={image._id} className={styles.card}>
                      <Image 
                        className={styles.imgPreview}
                        src={image.base64}
                        width={300}
                        height={300}
                        quality={100}
                        alt=''/>
                      <div>
                        <button className={styles.btn_neu_download} onClick={() => download(image.base64)}>
                          <SVG className={styles.download_image}/>
                        </button>
                      </div>        
                    </div>
                  );
                })}
                {nextImages.map((nextImage) => {
                  return (
                    <div key={nextImage._id} className={styles.card}>
                      <Image 
                        className={styles.imgPreview}
                        src={nextImage.base64}
                        width={300}
                        height={300}
                        quality={100}
                        alt=''/>
                      <div>
                        <button className={styles.btn_neu_download} onClick={() => download(nextImage.base64)}>
                          <SVG className={styles.download_image}/>
                        </button>
                      </div>        
                    </div>
                  );
                })}
              </div>
              <button className={styles.btn_neu_more} onClick={() => seeMore()}>
                Load More
              </button>
        </main>
        </>
          )
        }
       <Navbar />
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
          .sort({_id: -1})
          .limit(4)
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