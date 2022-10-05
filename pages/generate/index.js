import Image from 'next/image'
import classes from "./GeneratePage.module.css";
import Head from "next/head";
import { useState } from "react";
import React from 'react';
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/react'
//import { saveAs } from "file-saver";
import SVG from '/pages/gallery/images/download.svg'

export default function Generate() {
  const { data: session, status} = useSession();
  const [token, setToken] = useState("sess-u5OiOtl27T0qbIg0XaGTkq2yiuJSVVtaoneqbS6l");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadIt = async (toAdd) => {
    const newData = await fetch(`https://atlas-tattoo-development-pied.vercel.app/api/storeDalle?created=${toAdd.i_created}&image_path=${toAdd.i_image_path}&image_id=${toAdd.i_image_id}&user=${toAdd.i_user}`);
    const res = await newData.json();
    console.log(res);
  };

  function GetDalle2() {
    if (token != "" && query != "") {
      setError(false);
      setLoading(true);
      fetch(`/api/dalle2?k=${token}&q=${query}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResults(data.result);
          setLoading(false);
          results.forEach((result) => 
            {
              var toAdd = {
                i_created: result.created,
                i_image_path: encodeURIComponent(result.generation.image_path),
                i_image_id: result.id,
                i_user: 'Gunner'
              };
              console.log(toAdd);
              loadIt(toAdd);
            });
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
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Query"
                />
              </p>{" "}
              <button className={classes.btn_neu} onClick={GetDalle2}>
                Generate</button>
                {error ? (
                <div className={classes.error}>Something went wrong..Try again</div>
              ) : (
                <></>
              )}
              {loading && 
              <div className="wrapper">
              <br />
              <br />
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              </div>}
              <div className={classes.grid}>
                {results.map((result) => {
                  return (
                    <div key={result.generation.image_path.toString()} className={classes.card}>
                      <Image key={result.generation.image_path.toString()} className={classes.imgPreview} src={result.generation.image_path} alt=' ' width='300vw' height='300vw'/>
                      <div>
                        <button className={classes.btn_neu_download}>
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