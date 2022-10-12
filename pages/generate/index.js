import Image from 'next/image'
import classes from "./GeneratePage.module.css";
import Head from "next/head";
import { useState } from "react";
import React from 'react';
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/react'
import SVG from '/pages/gallery/images/download.svg'
import { saveAs } from 'file-saver'

export default function Generate() {
  const { data: session, status} = useSession();
  const [token, setToken] = useState("sess-yGcqdrc8VaZTJyUnz2L2JHlrW0067vnkBDSWocE0");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [IsOpen, setIsOpen] = useState(true);

  const loadIt = async (files) => {
    for (const file of files) {
    var toAdd = {
      i_created: file.created,
      i_image_path: encodeURIComponent(file.generation.image_path),
      i_image_id: file.id,
      i_task_id: file.task_id,
      i_email: session.user.email,
      i_name: session.user.name
    };
      const newData = await fetch(`/api/storeDalle?created=${toAdd.i_created}&image_path=${toAdd.i_image_path}&image_id=${toAdd.i_image_id}&task_id=${toAdd.i_task_id}&email=${toAdd.i_email}&name=${toAdd.i_name}`);
      const res = await newData.json();
      console.log(res);};
      setIsOpen(true)};

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
              {IsOpen &&
              <button className={classes.btn_neu} onClick={() => {GetDalle2(); setIsOpen(false)}}>
                Generate</button>}
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