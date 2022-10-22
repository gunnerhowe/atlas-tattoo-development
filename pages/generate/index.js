import Image from 'next/image'
import classes from "./GeneratePage.module.css";
import Head from "next/head";
import { useState } from "react";
import React from 'react';
import Link from 'next/link';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
import SVG from '/pages/gallery/images/download.svg';
//import clientPromise from "/lib/mongodb";
import axios from "axios";

//Main page export
export default function Generate() {
  //Session
  const { data: session, status} = useSession();
  //Dalle Token
  const [token, setToken] = useState("sess-yGcqdrc8VaZTJyUnz2L2JHlrW0067vnkBDSWocE0");
  //Dalle Query
  const [query, setQuery] = useState("");
  //Dalle Results
  const [results, setResults] = useState([]);
  //Dalle Loading
  const [loading, setLoading] = useState(false);
  //Dalle Error
  const [error, setError] = useState(false);
  //Genrate button visibility
  const [IsOpen, setIsOpen] = useState(true);
  //No credits warning
  const [noCred, setnoCred] = useState(false);


  //function to get the base64 image
  const base = async (url) => {
      let newBase = await axios.post(`/api/dalle/download`, { url: url })
        let base6 = await newBase.data.result
        return base6
  }

//Function to load the Dalle generations into Mongodb
  const loadIt = async (files) => {
    for (const file of files) {

      let baseData = await base(file.generation.image_path);

      const newData = await axios.post('/api/dalle/storeDalle',{
          created: file.created,
          image_path: file.generation.image_path,
          image_id: file.id,
          task_id: file.task_id,
          email: session.user.email,
          name: session.user.name,
          base64: 'data:application/octet-stream;base64,'+baseData
      });
      const res = await toString(newData);
      };
      setIsOpen(true)
    };

//Dalle generation function
  function GetDalle2() {
    if (token != "" && query != "") {
      setError(false);
      setLoading(true);
      fetch(`/api/dalle/dalle2?k=${token}&q=${query}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResults(data.result);
          const files = (data.result);
          console.log(data.result);
          loadIt(files);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
        });
    } else {
      setError(true);
    };
  }

  //Download the generations
  function download(url) {
    axios
      .post(`/api/dalle/download`, { url: url })
      .then((res) => {
        const link = document.createElement("a");
        link.href = `data:application/octet-stream;base64,${res.data.result}`;
        link.download = `Atlas-Tattoo-Dev.png`;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Subtract 1 credit from the user in Mongodb
  async function updateCredits(data) {
    const newCred = (Number(data.credits) - 1);
    const newData = await fetch(`/api/dalle/updateCredits?credits=${newCred}&email=${data.email}`);
    const res = await newData.json();
    console.log(res);
  }


  //Get credits that were generated from getCredits()
  const getActivity = async () => {
    let jsonData = await getCredits(session.user.email);
    console.log(jsonData);
    const numCred = jsonData.credits;
    const eEmail = session.user.email;
    if (Number(numCred) > 0) {
      var data = {
        credits: Number(numCred),
        email: eEmail
      };
      updateCredits(data);
      GetDalle2();
      setIsOpen(false);
    } else {
        setnoCred(true);
    }
  }

  //Get the Dalle Credits for the user from Mongodb
   const getCredits = async (seeEmail) => {
    let newData = await fetch(`/api/dalle/getCredits?email=${seeEmail}`)
    let newJson = await newData.json();
    return newJson;
  }


  //Visual elements
  return (
    <div className={classes.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>

      <main className={classes.main}>
        {!session && (
          <>
            <br />
            <button className={classes.btn_neu} onClick={signIn}>Sign In</button>
          </>
        )}
        {
          session && (
            <>
              <h1 className={classes.title}><span className={classes.titleColor}>Get Inked With The Future</span></h1>
              <p className={classes.description}>
                <input
                  id="query"
                  type="text"
                  value={query}
                  onChange={(e) => {setQuery(e.target.value)}}
                  placeholder="Query"
                />
              </p>{" "}
              {IsOpen &&
                <button className={classes.btn_neu} onClick={() => {getActivity()}}>
                    Generate
                  </button>}
                  <br />
              {noCred &&
                <>
                <span><br /></span>
                <h1 className={classes.warning}>
                    No credits available...
                  </h1>
                </>}
                {error ? (
                <div className={classes.error}>Something went wrong..Try again</div>
              ) : (
                <></>
              )}
              {loading && 
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
              <br />
              <br />
              <div className={classes.grid}>
                {results.map((result) => {
                  return (
                    <div key={toString(result.generation.image_path)} className={classes.card}>
                      <Image key={toString(result.generation.image_path)} className={classes.imgPreview} src={result.generation.image_path} alt=' ' width='300vw' height='300vw'/>
                      <div>
                        <button className={classes.btn_neu_download} onClick={() => download(result.generation.image_path)}>
                          <SVG className={classes.download_image}/>
                        </button>
                      </div>        
                    </div>
                  );
                })}
              </div>
            </>
          )
        }
      </main>
    </div>
  );
}


/* export async function creds({req}) {
  const session = await getSession({ req });
  try {
      const client = await clientPromise;

      const db = client.db("Atlas_Tattoo");

      const credits = await db
          .collection("credits")
          .find({email: session.user.email})
          .toArray()
          console.log(credits)
          
      return {
          props: {credits: JSON.parse(JSON.stringify(credits))}
      };

  } catch (e) {
      console.error(e);
  }
} */